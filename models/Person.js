const mongoose  = require('mongoose');

// Defination personSchema 
const personSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    age :{
        type: Number
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'],
        require: true,
    },
    mobile:{
        type: String,
        require:true
    },
    email:{
      type:String,
      require: true,
      unique :true
    },
    address:{
    type:String,
    },
    salary:{
type:Number,
require:true
    },
})
// Create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;


// {
//     "name": "nishay",
//     "age": 23,
//     "work": "chef",
//     "mobile": "8989898",
//     "email": "prine@gmail.com",
//     "address": "ranchi",
//     "salary": 23456789,
//     "_id": "65d4f4e90f6d051e0aaff2bb",
//     "__v": 0
// }