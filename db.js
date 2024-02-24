const mongoose = require('mongoose');

//Define  the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'// Replace mydatabse with your database name

//set up Mongodb connnection 
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the defoult connection 
// Mongoose maintains a default connection object representing the MongoDB connection 
const db = mongoose.connection;

// Define event listeners for database connection 
db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

db.on('disconnected',()=>{
    console.log('disconnected to MongoDB server');
});


db.on('error',(err)=>{
    console.error('connected to MongoDB server has error',err);
});
// Export the database connection 
module.exports = db;