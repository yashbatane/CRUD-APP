import logo from './logo.svg';
import './App.css';

//importing all the components here 
import NavBar from './components/NavBar';
import Code from './components/Code';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/Edit';

import {BrowserRouter,Routes,Route} from 'react-router-dom';  
//for routing like on browser if we click on the addUser so it will display hello form addUSer {Here we user browerrouter --> routing on browser or url, Routes --> It checks the where we have to give routing , Route --> It is used for give the path}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<Code/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/all' element={<AllUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
