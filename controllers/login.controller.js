const User = require('../models/user.models')
//const signUpRoute = require("../routes/signUp.route")
const express = require('express');
const app = express()
const loginControllerGET = async(req, res) => {
   res.render("login")
}

const loginControllerPOST = async (req, res, next) => {
   const userEmailInput = req.body.Email
   const userNameInput = req.body.Username
   const userPasswordInput = req.body.Password
   if(req.body.Email != undefined){
       const user_temp = await User.findOne({email: userEmailInput})
       if(user_temp == null){
           const user_temp1 = await User.findOne({userName: userNameInput})
           if(user_temp1 == null){
               const newUser = new User
               newUser.email = req.body.Email
               newUser.userName = req.body.Username
               newUser.userPassword = req.body.Password
               await newUser.save()
               console.log('Dang ki thanh cong')
               return res.redirect('home')
           }
           else{
               console.log('Dang ki that bai')
               return res.redirect('/login')
           }
       }
       else{
           console.log('Dang ki that bai')
           return res.redirect('/login')
       }
   }

   const user = await User.findOne({userNameInput})

   if(user.userPassword == userPasswordInput){
       console.log('Dang nhap thanh cong')
       return res.redirect('/home')
   }
   
   console.log('Dang nhap that bai')
   return res.redirect('/login')
}


module.exports = {
   loginControllerGET,
   loginControllerPOST
}