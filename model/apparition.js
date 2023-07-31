const mongoose = require('mongoose')

const ApparitionSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide name']
    },
    approved:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('apparition',ApparitionSchema)