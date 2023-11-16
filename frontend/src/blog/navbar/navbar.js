
import React from 'react';
import './navbar.css';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  
  const {query,searchpost}=useGlobalContext();
  
  const Navigate= new useNavigate()
  function kl(){
    Navigate('/')
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo' onClick={kl} >
        My Blog
      </div>
      <input className='search' type="search" id="searchBox" placeholder="Search post..." 
       value={query}
       onChange={(e) => searchpost(e.target.value)} 
       ></input>
      <ul className='navbar-links'>
        <li>Home</li>
        <li onClick={kl}>All Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;
