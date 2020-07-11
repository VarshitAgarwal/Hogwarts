const express = require('express');
const studentModel = require('../models/students')
// console.log(studentModel)
// console.log(typeof(studentModel))
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Welcome to Student Page');
});

router.post('/createstudent', async (req,res) => {
    const createstudent = new studentModel({
        FirstName : req.body.firstName,
        LastName : req.body.lastName,
        DateofBirth : req.body.dob,
        Class : req.body.class
    })
    //console.log(req.body)
    try {
       const studentdetails = await createstudent.save();
       // console.log(studentdetails) -- Json Object which is coming from request
       //console.log(typeof(studentdetails)) //Object //Await and Async are used for promise
       res.json({
           id : studentdetails._id,
           message : 'Welcome to Hogwarts' + ' ' + studentdetails.FirstName + '!!'
       }) 
       //console.log('Student is created')
    } catch (error) {
        res.json({
            message: error
        })       
    }   
});

router.delete('/', async (req,res) => {
    try {
        //console.log(req.body.studentid);
        const studentsuspend = await studentModel.deleteOne({_id : req.body.studentid});
        res.send('Student with student_id ' + req.body.studentid + ' is suspended.'); 
    } catch (error) {
        res.json({
            message: error
        })  
    }
});

router.get('/fetchstudent', async (req,res) => {
    try {
        const studentsdb = await studentModel.find();
        res.json(studentsdb);

    } catch (error) {
        res.json({
            message : error
        })
        console.log('Not able to get all the students')
        
    }

});

router.patch('/', async (req,res) => {
    try {        
         const studentupdate =  await studentModel.updateOne({
            _id : req.body.studentid },{ $set : {
            FirstName : req.body.firstName,
            LastName : req.body.lastName,
            DateofBirth : req.body.dob,
            Class : req.body.class                    
        }} );
        console.log(req.body.firstName);
        console.log(req.body.lastName);
        console.log(req.body.dob);
        console.log(req.body.class);
        res.send('Student with student_id ' + req.body.studentid + ' is updated.')
        console.log('Updated');
    } 
    catch (error) {
        res.json({
            message : error
        })     
    }
})
module.exports = router