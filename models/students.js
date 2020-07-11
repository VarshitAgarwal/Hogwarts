const mongodb = require('mongoose');

const studentSchema = mongodb.Schema({
    FirstName : {
        type : String,
        required : true
    },
    LastName: {
        type : String,
        required :true
    },
    DateofBirth : {
        type : Date
    },
    Class : {
        type : String,
        required : true        
    }
})

module.exports = mongodb.model('students',studentSchema)
