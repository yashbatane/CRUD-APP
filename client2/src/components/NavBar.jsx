import {AppBar,Toolbar,styled} from '@mui/material';
// Here we import NavLink for if we click on the navbor menu's like adduser,alluser so it will give the url path of that component and change the component also.. 
import { NavLink } from 'react-router-dom';

// CSS of Navbar
const Header = styled(AppBar)`
    background:#111111
`;
const Tabs = styled(NavLink)`
    font-size:25px;
    margin-right:25px;
    color:inherit;
    text-decoration:none;
`;


const NavBar =  () => {
    return(
       <Header position="static">
         <Toolbar>
            <Tabs to='/'>Code</Tabs>
            <Tabs to='/all'>All User</Tabs>
            <Tabs to='/add'> Add User</Tabs>
         </Toolbar>
       </Header>
    )
}
export default NavBar;