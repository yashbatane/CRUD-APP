// const express =require(express);
import express from 'express';
import dotenv  from 'dotenv';

import Connection from './datbase/connection.js';
import Routes from './routes/route.js'

import bodyParser from 'body-parser';

// cors --> when we use one server to request to the another server so it will give cors issue , cors is an security feature which doen't allow to share data 
import cors from 'cors';

// INitialize an express
const app=express();

//bodyparser postAPI ko handle krti h jo ki json fromat me aata h to uski body ko apne ko show krdega
app.use(bodyParser.json({extended:true}));
// app.use(bodyParser,urlencoded({extended:true}));

app.use(cors());

//initalize the dotenv with the help of config function
dotenv.config();

// app.use(express.json());
// call hua {app.use('/',Routes)} for fir routes pr jakar add match hua or vo API call hui..
app.use('/',Routes);

const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);

// listen function is use to creating an backend server which takes two arguements --> PORT,callback function
app.listen(PORT,()=>console.log(`Server is running Successfully on port ${PORT}`));