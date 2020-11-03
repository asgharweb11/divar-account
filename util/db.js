const mongose = require("mongoose")


const ConnectDB = async () => {

    try {
        const connect = await mongose.connect(process.env.MONGODB_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify : false
        })

        console.log("Connected To DB")
    } catch (error) {
        console.log("ERROR DB : " , error)
        process.exit(1)
    }

}

module.exports = ConnectDB;