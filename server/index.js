const express = require('express');
const next = require('next');
const db = require("../util/db")
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload")
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Status DB
db();

app.prepare()
.then(() => {
    const server = express();
    //server.use(cookieParser());   
    server.use(express.json());
    server.use(fileUpload({
        createParentPath : true
    }));
    
    //Login && Register && Logined
    const auth = require("./routes/auth")

    server.use("/api/auth" , auth)
    
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})