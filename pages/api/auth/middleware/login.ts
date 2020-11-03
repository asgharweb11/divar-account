import { NextApiRequest , NextApiResponse } from "next"
import { connectToDatabase } from "../../../../util/mogodb"
import { ObjectId } from "mongodb"
import cookie from "cookie"
import jwt from "jsonwebtoken"

export default async (req : NextApiRequest , res : NextApiResponse) => {

    try {
        const { token } = JSON.parse(req.body)

        if(!token){
            res.statusCode = 200
            res.json({
                status : false,
                msg : "شما عضو سایت نیستید !!"
            })
            return false;
        }
        const { db } = await connectToDatabase();
  
        const decode = jwt.verify(token , process.env.SECRET).user
        if(!decode){
            res.statusCode = 200
            res.json({
                status : false,
                msg : "شما عضو سایت نیستید"
            })
            return false;
        }

        const findUser = db.collection("users").find({_id : ObjectId(decode.id)}).toArray(function (err , result){
            if(err) throw err
            else if(result.length > 0){
                console.log(result[0].name)

                res.statusCode = 200;
                res.json({
                    status : true,
                    data : {
                        name : result[0].name,
                        lastname : result[0].lastname,
                        email : result[0].email,
                        bio : result[0].bio,
                        shareit : result[0].shareit,
                        status : result[0].status,
                        date : result[0].date,
                        update_at : result[0].update_at
                    }
                })
            } else {
                res.statusCode = 200;
                res.json({
                    status : false,
                    msg : "شما عضو سایت نیستید !"
                })
            }
            
        })

    } catch (error) {
        console.log("error page Login MiddleWare : " , error)
    }


}