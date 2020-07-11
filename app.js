const express = require('express');
const mongodb = require('mongoose');
const bodyparser = require('body-parser');
const students = require('./routes/students');
require('dotenv').config(); //To load all the environment variables


//To start express
const app = express();

//To start a server
app.listen(7070);

//Home Page
app.get('/',(req,res) =>{
    res.send('Welcome to Hogwarts School');
});
//Use Json Parser
app.use(bodyparser.json());

//Student Page
app.use('/students', students)

//Connect to MongoDB
mongodb.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to MongoDB Cluster - Students Database')
})

