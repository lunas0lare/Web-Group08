const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String
    },
    userName: {
        type: String
    },
    userPassword: {
        type: String
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User