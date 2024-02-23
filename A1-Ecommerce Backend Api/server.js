const express= require("express");
const app= express() ;
app.use(express.json()) ;
require("dotenv").config() ;

const mongoose = require("mongoose") ;

//Mongoose Connection
mongoose.connect(process.env.MONGODB_URI)
.then( ()=>{ console.log("connected to MongoDB")}) 
.catch(err => console.error(err)) ;




//Error Handler

app.use((err,req,res)=>{
    console.err(err.stack);
    res.status(500).send({message: "Internal Server Error"});
})

//Server Connection

const PORT= process.env.PORT||7979 ;    
app.listen(PORT, ()=> {console.log(`server is running on port ${PORT}`)})