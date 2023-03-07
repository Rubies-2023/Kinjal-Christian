const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'This email already exists in database...'],
        isalphanumeric: [true],
    },
    password: String
})

module.exports=mongoose.model('user',userSchema)