const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');

const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/',userRoutes)

async function connectToDB () {
    try {
        await mongoose.connect('mongodb+srv://kinjal:kinjal99@cluster0.25dpabo.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true
        }).then (()=>{
            console.log("Connected to Database");
        })
        
    } catch (error) {
        console.log(error);
    }
}

app.listen(3000,()=>{
    console.log("Connected");
})


connectToDB();


