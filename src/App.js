import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      {/* /<Login/> */}
      <BrowserRouter>

      <Navbar/>
      <br></br>
      
      <br></br>
      
      <br></br>
      <Routes>
        <Route path='/'element={<Login/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup'  element={<Signup/>}></Route> 
   
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
