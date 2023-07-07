// import { response } from 'express';
import { request, response } from 'express';
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
 
export const getUsers = async(request,response)=>{
    try{
        const users=await User.find({});         // find ke andar apn condition likh skte h (like filter) or empty h to vo sara data de dega
        response.status(209).json(users);
    }
    catch(error){
        response.status(404).json({message:error.message});
    }
}

export const getUser = async(request,response)=>{
//  console.log(request.params.id);
    try{
        // const user=await User.find({_id:request.params.id});         // find ke andar apn condition likh skte h (like filter) to apne ko vo ussi se related data deta h or empty h to vo sara data de dega
                   //   OR
        const user=await User.findById(request.params.id);
        response.status(209).json(user);
    }
    catch(error){
        response.status(404).json({message:error.message});
    }
}

export const editUser = async(request,response)=>{
    let user = request.body;
    const editUser = new User(user);
    try{
        await User.updateOne({_id:request.params.id},editUser);
        response.status(201).json(editUser);
    }
    catch(error){
        response.status(409).json({message:error.message});
    }
}

export const deleteUser = async(request,response)=>{
    try{
        await User.deleteOne({_id:request.params.id});
        response.status(200).json({message : "User Deleted Successfully.."})
    }
    catch(error){
        response.status(409).json({message:error.message});
    }
}