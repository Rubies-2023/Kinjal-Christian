const { request } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req,res) => {
    const {username, password}=req.body;

    const user = await new User({username,password})

    user.save();
    res.send(user);
})

router.post('/login', async(req,res) => {
    const {username,password}=req.body;

    const user = await User.findOne({username});

    console.log(user);
    
    if(password==user.password){
        res.send("Logged In....");
    }else {
        res.send("Failed to Login...");
    }
})

module.exports = router;
