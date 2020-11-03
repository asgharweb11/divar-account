import { NextApiRequest , NextApiResponse } from "next"
import { connectToDatabase } from "../../../util/mogodb"
import { validateEmail } from "../../../methods/validator"
import bcrypt from "bcryptjs"
import cookie from "cookie"
import jwt from "jsonwebtoken"

export default async (req : NextApiRequest , res : NextApiResponse) => {

    try {
        const { db } = await connectToDatabase();
        const { email , password } = req.body.data;
        const expires = Date.now() + 87000000; // 24h
        // const expires = Date.now() + 20000; // 20 second


        if(email === "" || !validateEmail(email)){
            res.statusCode = 401;
            res.json({
                status : false,
                msg : "لطفا ایمیل صحیحی وارد نمایید"
            })
            return false;
        }
        
        const findUser = await db.collection("users").find({email}).toArray(async function (err , result) {
            if(err) throw err
            if(result.length > 0){
                const checkPass = await bcrypt.compare(password , result[0].password , function(err , check){
                    if(err) throw err;
                    if(check){
                        const payload = {
                            user : {
                                id : result[0]._id,
                                email
                            }
                        }

                        jwt.sign(payload , process.env.SECRET , {expiresIn : expires} , (err , token) => {
                            if(err) throw err
                            // const setCookie = res.setHeader("Set-Cookie" , cookie.serialize("token" , String(token) , {
                            //     expires : new Date(expires)
                            // }))
                            // console.log("cookie : " , setCookie)
                            res.statusCode = 200;
                            res.json({
                                status : true,
                                msg : "ورود به پنل کاربری",
                                data : {
                                    name : result[0].name,
                                    lastname : result[0].lastname,
                                    email : result[0].email,
                                    bio : result[0].bio,
                                    shareit : result[0].shareit,
                                    status : result[0].status,
                                    date : result[0].date,
                                    update_at : result[0].update_at,
                                    token
                                }
                            })

                        })
                    }else {
                        
                        res.statusCode = 400;
                        res.json({
                            status : false,
                            msg : "ایمیل و پسوردی با مشخصات شما یافت نشد !!"
                        });
                    }
                })
            }else {
                res.statusCode = 400;
                res.json({
                    status : false,
                    msg : "ایمیل و پسوردی با مشخصات شما یافت نشد !!"
                });
            }
        })
    } catch (error) {
        console.log("error page Login : " , error)
    }
    

}