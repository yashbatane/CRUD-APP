// import { response } from 'express';
import { response } from 'express';
import User from '../schema/user-schema.js';



// callback function jo api bnana me jo do arguement pass hote h api.post('/path',callback-function);

//req--request me vo bheja jata h jo frontend ke sath bheja jata h .
//res--response me response kiya jata h jo bhi api call hui h uske logics.
export const addUser= async(request,response) =>{

    const user = request.body;         //if we dont use bodyparser so it will give you undeifined because node,express post api ko bydefault handle nhi krta h 
    // console.log(user);
    // console.log("Hello");
    const newUser =new User(user);

    try{
        await newUser.save();
        response.status(201).json(newUser);
    }
    catch(error){
        response.status(409).json({message:error.message});
    }
}
 
export const getUsers = async(req,res)=>{
    try{
        const users=await User.find({});
        response.status(209).json(users);
    }
    catch(error){
        res.status(404).json({message:error});
    }
}
