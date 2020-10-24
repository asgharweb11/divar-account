const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env : {
    MONGODB_URI : "mongodb+srv://asghar:225243789@cluster0.ijtho.mongodb.net/DivarAcc?retryWrites=true&w=majority",
    MONGODB_DB : "DivarAcc"
  }
}