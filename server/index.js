const express = require('express');
const cors = require('cors');
const UserModel = require('./models/User')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken');
const { verify } = require('crypto');
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 5050;
mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if(!err){
        console.log("Database is succesfully connected!")
    }
    else{
        console.log(err);
    }
})

app.use(express.json());
app.use(cors());

const verifyToken = (req,res,next) =>{
    const bearerToken = req.headers["authorization"]
    try{
        const token = bearerToken.split(" ")[1]
        if(token){
            jwt.verify(token,process.env.KEY,(err,user) =>{
                if(!err){
                    next()
                }
                else{
                    res.sendStatus(404);
                }
            });
        }
        else{
            res.sendStatus(404)
        }
    }catch(err){
        console.log(err)
    }

    
}


app.get('/read',verifyToken,(req,res) =>{
    UserModel.find({},(err,data) =>{
        if(!err){
            res.send(data)
        }
        else{
            res.send(err)
        }
    })
});

app.post('/insert',(req,res) =>{

    const user = new UserModel({
        username: req.body.username,
        password: req.body.password,
        name : req.body.name,
        surname : req.body.surname,
        imageUrl: req.body.imageUrl
    })
    try{
        user.save();
        res.send("INSERTED")
    }
    catch(err){
        res.send(err)
    }
});



app.post('/login',(req,res) =>{
    UserModel.find({username: req.body.username, password: req.body.password},(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            if(data.length === 0){
                res.sendStatus(404);
            }
            else{
                jwt.sign({payload : data},process.env.KEY,(err,token) =>{
                    if(!err){
                        res.json({token: token})
                    }
                    else{
                        console.log(err)
                    }
                })
            }
        }
    })
})


app.listen(PORT,() =>{
    console.log(`Server is listening the port ${PORT}`);
})