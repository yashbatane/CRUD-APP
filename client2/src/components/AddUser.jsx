import { useState }from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
// import Input --> taking input from the user 
import { addUser } from '../service/api';

// useNavigate use for if we click on somewhere and we have to go on the other page...
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin:7% auto 0 auto;
    &> div{
        margin-top:20px;
    }
`
// In Css we use &> for formcontrol style it is the way in react to style the innerchild with the help of parent

// creating an object
const defaultValue ={
name: '',
username: '',
email: '',
phone: ''
}
const AddUser = () =>{

    const [user,setUser] = useState(defaultValue); //user me default object pda rahega

    const navigate=useNavigate(); //initialize navigate..

const onValueChange=(e)=>{
    console.log(e.target.name , e.target.value);
    setUser({...user,[e.target.name]:e.target.value})   // {...user --> use isliye kiya kuki agar apn spread (...user) nhi krenge to overwrite krdega vo ek dusre ki value ke upar timestamp:01:00:00 }
        // {[e.target.name] --> use kiya kuki agar bracket nhi lgate to vo error deta bcoz object me key:value hoti h or or yha dono variable h so in case bracket use kiya.... }
  
        // console.log(user);
}

const addUserDetails=async()=>{
//    var temp  =  addUser();
//    console.log(temp);
    await addUser(user);

    navigate('/all');   // button pr click krte hi all user wale component pr chale jayega..
}

// Here e is an event where we take the value which we enter in the input field (e.target.value --> take the value , e.target.name --> it gives the whose value it is)

    return(
        // FormGroup ki Jagah Container linka style krne ke liye..
        // FormGroup & FormControl are just a div but with adding css style
        <Container>
            {/* Typography is an alternate of p tag in material ui.. */}
         <Typography variant="h4">Add User</Typography>    
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e) }name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValueChange(e)}name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)}name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)}name="phone"/>
            </FormControl>
            <FormControl>
            {/* onClick function -->button ke click pr, we use for call an api in addUserDetails function */}
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>    
            </FormControl>
        </Container>
        
    )
}
export default AddUser;