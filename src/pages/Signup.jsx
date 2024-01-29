import React,{useState} from "react";
import "./Signup.css";
import image1 from '../assets/images/image 1174.png'
// import Header from "../component/Header";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
import axios from 'axios';

import {Link,useNavigate} from 'react-router-dom'
import Layout from "../component/Layout";
const Signup = () => {
  const navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = async(e) => {
      e.preventDefault();
  
      const newUser = {name,email,password};
      try {
       const response = await axios.post("http://localhost:8080/api/users/signup", newUser);
       navigate('/login');
        console.log(response)
      } catch (error) {
        console.log("dkfjksdf", error)
        
      }
     
    };
  return (
    <Layout>
      <div>
      </div>
      <div className="main">
        <div className="signupBox">
          
    
          <div className="main-heading">
            <h3>Sign Up</h3>
            <p>Please login using account detail bellow.</p>
          </div>
            <div className="inputBox">
              <input type="text" className="form-control" name="name" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
              <input type="email" className="form-control" name="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value) }/>
              <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="SignIn">
        <button onClick={handleSubmit} className="sign-in" >Create Account</button>
        </div>
        <Link className='already' to='/login'>Already user</Link>
          
          
        </div>
      </div>
      <div className="companies2">
      <img src={image1} alt="imagedown"></img>
        
      </div>
    </Layout>
  );
};

export default Signup;
