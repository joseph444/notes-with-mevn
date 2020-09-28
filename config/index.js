module.exports={
    SALT: require("bcrypt").genSaltSync(),
    SECRET: require("crypto").randomBytes(64).toString("hex"),
    DB:"mongodb+srv://subhro:OyRBwBwkqhozWXx8@cluster0.pfgey.gcp.mongodb.net/app_0?retryWrites=true&w=majority"
}