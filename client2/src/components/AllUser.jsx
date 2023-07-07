import { Component, useEffect,useState } from 'react';

import {TableBody, Table,TableCell,TableHead,TableRow,styled, Button}from '@mui/material';

import {getUsers,deleteUser} from '../service/api.js';
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
width:90%;
 margin:50px auto 0 auto;
  
`
const THead = styled(TableRow)`
background:#000000;
& > th{
color:#fff;
font-size:20px;
}
`
const TBody = styled(TableRow)`
& > td{
    font-size:20px;
}

`

const AllUsers = ()=>{

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    
},[]);

const getAllUsers = async() =>{
    let response = await getUsers();
    // console.log(response.data);
    setUsers(response.data);
}

const deleteUserDetails = async(id) =>{
    await deleteUser(id);
    getAllUsers();
}

return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone No.</TableCell>
                    <TableCell> </TableCell>
                </THead>
            </TableHead>
            <TableBody>
                { users.map(user=>(
                    <TBody key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            {/* jab isme style krte h to camelcase ka use krte h and no need to right px it by default */}
                            <Button variant="contained" color="secondary" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                        </TableCell>
                    </TBody>
                    )) }
            </TableBody>
        </StyledTable>
    )
}


export default AllUsers;
