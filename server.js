const express=require('express')
const jwt=require('jsonwebtoken')


const bodyParser=require('body-parser')
const mongoose=require('mongoose')
// Adding middle ware to connect frontend and backend
const cors=require('cors')
const path=require('path')

const app=express()


app.use(cors())
app.use(bodyParser.json())


app.use(express.static('./dist/Project'));

// connecting to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://mausham01:mausham01@eventsdb.skijs.mongodb.net/userdb?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true},
(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to mongo")
    }
})
// verification of token

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("UnAuthorized request");
    }
    let token =req.headers.authorization.split(' ')[1];
    if(token ==='null'){
        return res.status(401).send("UnAuthorized request");
    }

    let payload=jwt.verify(token,'secretKey')

    if(!payload){
        return  res.status(401).send("UnAuthorized request");
    }
    else{
    req.userId=  payload.subject
    next() 
 }

}

mongoose.set("useCreateIndex", true)
// Defining user schema
const userSchema=new mongoose.Schema({
    email: String,
    password: String
})

const User=new mongoose.model("User", userSchema)





// Creating API
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'/dist/Project}/index.html'));

});

// Get request to homepage
// app.get('/', (req, res)=>{
//     res.send("Hello from server")
// })


// Registering users
app.post('/register',(req,res)=>{
    let userData=req.body;
   
    let user=new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error);
        }else{
            let payload={subject: registeredUser._id}
            let token=jwt.sign(payload,'secretKey')
            console.log(registeredUser)
            res.status(200).send({token})

        }
    })

})

// Login

app.post("/login",(req,res)=>{
  let userData=req.body

  User.findOne({email:userData.email},(error,user)=>{
      if(error){
          console.log(error)
      }else{
          if(!user){
              res.status(401).send('Invalid email')
          }else if(user.password!=userData.password){
              res.status(401).send('Invalid Password')

          }else{
              let payload={subject: user._id}
              let token=jwt.sign(payload,'secretKey')
              res.status(200).send({token})
          }
      }
  })
})





// events API

app.get('/events',(req,res)=>{
    let events=[
        {
            "_id":"1",
            "name": "Mausham Shrestha",
            "description":"He is the king of programming"
        },
        {
            "_id":"2",
            "name": "Romit Maharjan",
            "description":"He is the master of AWS"
        },
        {
            "_id":"3",
            "name": "Birendra Rokaha",
            "description":"Has basic knowledge of everything"
        },
        {
            "_id":"4",
            "name": "Ujjwal Malakar",
            "description":"Master of gaming"
        }

      
        
    ]
    res.json(events);

   

    
})


//Special Events


app.get('/special',verifyToken,(req,res)=>{
  
    let events=[
        {
            "_id":"1",
            "name": "Mausham Shrestha",
            "description":"He is the king of programming"
        },
        {
            "_id":"2",
            "name": "Romit Maharjan",
            "description":"He is the master of AWS"
        },
        {
            "_id":"3",
            "name": "Birendra Rokaha",
            "description":"Has basic knowledge of everything"
        },
        {
            "_id":"4",
            "name": "Ujjwal Malakar",
            "description":"Master of gaming"
        }

      
        
    ]

    res.json(events);
  

    
})



app.listen(process.env.PORT || 3000, (req,res)=>{
    console.log('Server started on port '+ process.env.PORT);
})