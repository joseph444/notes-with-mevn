module.exports={
    SALT: require("bcrypt").genSaltSync(),
    SECRET: require("crypto").randomBytes(64).toString("hex"),
    DB:"mongoDB url"
}
