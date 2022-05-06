const mongose=require('mongoose')
const { addListener } = require('nodemon')

const dbURI="mongodb+srv://user:1234@cluster0.6hssd.mongodb.net/chat?retryWrites=true&w=majority"

const {Msg,User}=require('./models/chatdb')


mongose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then((res)=>console.log('connected chat'))
  .catch((err)=>console.log(err))



  // const me=new User({
  //     name:'dd',
  //     number:3,
  //     friends:[{
  //         1:'Rohan'},
  //         {2:'aa'},
  //         {3:'bb'},
  //         {4:'cc'}]
  // })

  // me.save()

  Msg.find({ $or: [{
    from: 1,
    to:2
},
{
    from: 1,
    to:2
},
]}, function(err, data){
    let n=data.length-1,arr=[]
    for(let i=0;i<=n;i++)
    {
      arr[i]={m:data[i].msg,id:data[i]._id}
    }
    console.log(arr);

 })