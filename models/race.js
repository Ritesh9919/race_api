const mongoose = require('mongoose');


const receSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,

    },
    country:{
        type:String,
        required:true,

    },
    score:{
        type:Number,
        required:true
    },
    event:{
        type:String,
        default:'100m'
    }

});

const Race = mongoose.model('Race', receSchema);
module.exports = Race;