import { NextApiRequest , NextApiResponse } from "next"
const formidable = require("formidable")
const fs = require("fs")
const path = require("path")
const slugify = require("slugify")

export const config = {
    api: {
      bodyParser: false,
    },
};

export default async (req , res) => {



    console.log("helo")
    // const form = new formidable.IncomingForm();
    // form.uploadDir = "./public/uploads";
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //     console.log(err, fields, files);
    // });


    // const Promis = await new Promise((resolve , reject) => {
    //     fs.mkdir("./public/uploads" , {recursive : true} , function(err) {
    //         return console.log("error asghar : " , err)
    //     })

    //     const form = formidable({
    //         multiple : true,
    //         uploadDir : "./public/uploads"
    //     })

    //     form.keepExtensions = true;
    //     form.keepFileName = true;

    //     form.on('fileBegin', function(name, file) {
    //         console.log(name , file)
    //         file.path = path.join("./public/uploads" , slugify(file.name))
    //     });

    //     form.parse(req, function(err, fields, files) {
    //         if(err) return reject(err)
    //         console.log(err , fields , files)
    //         resolve(files)
    //     });

    // })

    // res.json(Promis)

}