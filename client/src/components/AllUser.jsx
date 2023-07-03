import { useEffect } from 'react';

import {TableBody, Table,TableCell,TableHead,TableRow}from '@mui/material';

import {getUsers} from '../service/api.js';

const AllUsers = ()=>{
    useEffect(()=>{
        getAllUsers();
    
},[]);

const getAllUsers = async() =>{
    await getUsers();
}

return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone No.</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
        </Table>
    )
}


export default AllUsers;
