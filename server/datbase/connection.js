import mongoose from "mongoose";

const Connection= async (username,password)=>{

    const URI=`mongodb+srv://${username}:${password}@cluster0.cxguwto.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URI,{useUnifiedTopology:true,useNewUrlParser: true})
        console.log("Database connect Successfully");
    }
    catch(error){
        console.log("Error while connecting with the Database",error);
    }
}

export default Connection;