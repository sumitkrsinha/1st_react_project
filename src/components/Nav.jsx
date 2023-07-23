import React from 'react';
import { Link } from "react-router-dom";



const Nav = () => {
  return (
    <nav>
      <h2 className='logo'>1st Project</h2>
      <menu>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </menu>
      <main>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      </main>
    </nav>
  );
}

export default Nav;