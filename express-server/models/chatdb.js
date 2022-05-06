const mongoose=require('mongoose')

const Schema= mongoose.Schema

const chatSchema=new Schema({
    msg:{
        type:String
    },
    from:{
        type:Number
    },
    to:{
        type:Number
    }
   
    
})

const userSchema=new Schema({
    name:{
        type:String
    },
    number:{
        type:Number
    },
    friends:{
        type:[Object]
    }
})

const m=mongoose.model('msg',chatSchema)
const User=mongoose.model('user',userSchema)
module.exports={
    Msg:m,
    User
};

