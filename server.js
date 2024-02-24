const express = require('express')
const app = express();
const db = require('./db');


//middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());//req,body

//
app.get('/' , function (req, res){
    res.send('Welocme to your hotel0 ')
})


const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
//get data up
app.listen(3000,()=>{
    console.log(" your server is live now")
})



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app.post('/person',(req,res)=>{
//     const data = req.body // Assuming the request body conatin the person data

//     // create a new person document using the mongoose model
//     const newPerson = new Person(data);

//     // save the new person to the database 
//     newPerson.save((error , savedPerson) =>{
//     if(error){
//         console.log('ERROR saving person ',error);
//          res.status(500).json({error : 'Internal server error'})
//     }
//     else{
//         console.log('data saved successfully ');
//         res.status(200).json(savedPerson);
//     }
// })
// }) 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //save the new person to the database
    // newPerson.save(error,savedPerson) =>{

// const newPerson = new Person();
// newPerson.name = data.name;
// newPerson.age = data.age;
// newPerson.mobile = data.mobile;
// newPerson.email = data.email;
// newPerson.address = data.address;

// app.get('/2nd_page' , function (req, res){
//     res.send(' Your 2nd page is ready ')
// })
