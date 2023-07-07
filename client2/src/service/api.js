import axios from 'axios';

const URL="http://localhost:8000";



// Api call -- /add --> to vo backend pr gya index.js pr fir ye  call hua {app.use('/',Routes)} for fir routes pr jakar add match hua or vo API call hui..
export const  addUser = async (data)=>{
    try{
       return await axios.post(`${URL}/add`,data);
    }
    catch(error){
        console.log("Error while calling AddUser Api",error);
    }
}

export const getUsers=async()=>{
    try{
        return await axios.get(`${URL}/all`);
    }
    catch(error){
        console.log("Error while calling allUser API",error);
    }
}

export const getUser = async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
    catch(error){
        console.log("Error while calling GET User API",error);
    }
}

export const editUser = async(user,id)=>{
    try{
        // return await axios.post(`${URL}/${id}`,user);     //post api bcoz apne ko data send krna h...
        return await axios.put(`${URL}/${id}`,user);     //put api bcoz apne ko data send krna h and uniquely find krne ke liye put api ka use krte h...
    }
    catch(error){
        console.log("Error While Calling Edit User Api",error);
    }
}

export const deleteUser = async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(error){
        console.log("Error while calling Delete User Api",error);
    }
}