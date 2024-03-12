const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

   username:{
    type: String,
    required: true
   },

   email:{
    type: String,
    required: true,
    unique: true
   },

   password :{
    type: String,
    required: true,
    validate:{
        validator: function(v){

        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
        },
    message:()=>"The password you entered is invalid. Please try again. It must be at least 8 characters long and contain both letters and numbers."
    }
   }
});

const User= mongoose.model("User",userSchema) ;

module.exports= User ;