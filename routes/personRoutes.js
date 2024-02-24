const express = require('express');
const router = express.Router();

const Person = require('./../models/Person');

// post route to add a person
router.post('/' , async (req,res)=>{
    try{
        const data = req.body //Assuming the request body contain the person data  

//create a new person to the database
        const newPerson = new Person(data);

       // const savedPerson = await newPerson.save();
       const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal  server error '});
    }
})


//here get method for person item
router.get('/' ,async(req,res)=>{
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'internal server error '})
    }
})

// workType 

router.get('/:workType',async(req,res)=>{
    try {
        const workType = req.params.workType;
    if(workType =='chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
    } else{
        res.status(400).json({error:'invalid work type'});
    }
        
    } catch(err) {
            console.log(err);
            req.status(500).json({error: 'Internal Server error '});
    }
    })
     
    module.exports = router;