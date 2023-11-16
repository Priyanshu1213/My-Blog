
import React from 'react';
import './App.css';
import Blogpost from './blog/blogpost/Blogpost';
import Button from './blog/button/button';
import Navbar from './blog/navbar/navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Postdetails from './blog/postdetails/postdetails';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Button/>
      <Routes>
      
        <Route path="/" element={<Blogpost/>} />
        <Route path='/postdetails' element={<Postdetails/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
      </Routes>
      </BrowserRouter>
      
    
    </>
    
  );
}

export default App;
