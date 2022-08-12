const User = require('../models/user.models')
const homeControllerGET = async(req, res) => {
    res.render("home")
}

const homeControllerPOST = async(req, res)=>{
    console.log("cc")
}

module.exports = {
    homeControllerGET,
    homeControllerPOST
}