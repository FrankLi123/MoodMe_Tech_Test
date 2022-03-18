const mongoose = require('mongoose');



const dataSchema = new mongoose.Schema({

    _id: String,

    address:{ 
        building:String,
        street: String
    },

    cuisine: String,

    grade:[{   
        date: Date,
        grade:String,
        score:Number
    }],

    name: String,
    restaurant_id: String


    // name:{
    //     required:true,
    //     type:String

    // },
    // age:{

    //     required:true,
    //     type:Number

    // }
})

module.exports = mongoose.model('Restaurant', dataSchema)