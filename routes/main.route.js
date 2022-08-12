// const indexRoute = require("./index.route")
const loginRoute = require("./login.route")
const homeRoute = require("./home.route")
function route(app){
    //app.use("/", indexRoute)
    app.use("/", loginRoute)
    app.use("/home", homeRoute)
}

module.exports = route