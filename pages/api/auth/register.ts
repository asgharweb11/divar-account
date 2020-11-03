import { NextApiRequest , NextApiResponse } from "next"
import {connectToDatabase} from "../../../util/mogodb"
// ----------------
import bcrypt from "bcryptjs"
import cookie from "cookie"
import jwt from "jsonwebtoken"



export default async (req : NextApiRequest, res : NextApiResponse) => {

  const {db} = await connectToDatabase();

  const {name , lastname , email , password} = req.body.data;

  const expires = Date.now() + 87000000; // 24h
  // const expires = Date.now() + 20000; // 20 second

  // Get Token User
  // const cookies = cookie.parse(req.headers.cookie || "")
  // console.log(cookies.token)


  try {
    const findUser = await db.collection("users").find({email}).toArray();

    if(findUser && findUser.length > 0){
      res.statusCode = 200;
      res.json({
        status : false,
        msg : "این ایمیل در سامانه وجود دارد ، لطفا از ایمیل دیگری استفاده نمایید !!"
      })
      return false;
    }

    const salt = await bcrypt.genSalt(10)
    const setPass = await bcrypt.hash(password , salt);

    const insertUser = await db.collection("users").insertOne({
      name,
      lastname,
      email,
      password : setPass,
      date : Date.now(),
    } , function(err , result){
        if(err) throw err

        const payload = {
            user : {
                id : result.ops[0]._id,
                name : result.ops[0].name,
                lastname : result.ops[0].lastname,
                email : result.ops[0].email,
            }
        }
      // JWT
        jwt.sign(payload , process.env.SECRET , {expiresIn : expires} , (err , token) => {
            // Error
            if(err) throw err;

            // res.setHeader("Set-Cookie" , cookie.serialize("token" , String(token) , {
            //     httpOnly: true,
            //     expires : new Date(expires)
            // }))
            // Send Res
            res.statusCode = 200;
            res.json({
                status : true,
                msg : "خوش آمدید",
                data : {
                    name,
                    lastname,
                    email,
                    date : Date.now(),
                    token
                }
            });
        })

    })

    

  } catch (error) {
    console.log("error page Register : " , error)
  }
  
}
