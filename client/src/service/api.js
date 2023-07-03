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