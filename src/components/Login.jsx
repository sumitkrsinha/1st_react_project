import React from 'react'
import Nav from "./Nav";



import "../styles/nav.css";
import "../styles/login.css";

const Login = () => {
  return (
    <>
        <Nav />
        <div className="login_page">
            <div className="login_bgimage"></div>
            <div className="login_section">
                <h2 className="login_heading">Login</h2>  
                <input type="email" class="email_input" placeholder="Email Id" required autocomplete="off" name='random'></input>
                <input type="Password" class="Password_input" placeholder="Password" required autocomplete="off" name='random'></input>
                <div className="forget_password">
                <p className="forget_password"><a href="/">Forget Password?</a></p>
                </div>
                <input type="submit" name="" value="Login" class="login-btn" />                                      
            </div>
        </div>
    </>    

  )
}

export default Login;