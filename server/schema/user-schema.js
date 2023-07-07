import mongoose from "mongoose";

//auto incremnt use for give a unique id to the user  
import autoIncrement from 'mongoose-auto-increment';

// validation
const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:Number
})

autoIncrement.initialize(mongoose.connection);
 //userSchema.plugin(autoIncrement.plugin,'user');

const user=mongoose.model('user',userSchema);
export default user;