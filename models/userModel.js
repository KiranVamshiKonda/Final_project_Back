const mongoose = require('mongoose');
 
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
       
    },
    repassword: {
        type: String,
        required: true,
        minlength: 5,
       
    }
},{collection : 'user'})
 
const userModel = mongoose.model('user',userSchema);

module.exports = userModel;