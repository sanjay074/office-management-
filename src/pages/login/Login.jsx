import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "../config.js/baseUrl";
const Login = () => {
    let navigate = useNavigate();
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	async function login(e) {
	  e.preventDefault();
	  let item = { email, password };
	  let result = await axios.post( baseUrl+"/adminlogin", item);
	  if (!result.data.token) {
		alert('login failed');
	  } else {
		localStorage.setItem('token', result.data.token);
		navigate("/dashboard")
	  }
	}
  return(
    <section className="sec">
		<div className="imagebox">
			<img src={"../images/19197296.png"} alt="" />
		
		</div>
		<div className="contentbox">
         
			<img src={"../images/insta cash Logo.png"}   className="logo"/>
		 
		 <h2>Welcome to Insta Cash</h2>
		 <div className="formBx">
		 <form onSubmit={login}>
			<div className="inputBx">
				<span>Email</span>
				<input type="text" name="email" value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}/>
			</div>
			<div className="inputBx">
				<span>Password</span>
				<input type="password" name="password"  value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}/>
			</div>
			<div className="remember">
				<label htmlFor=""><input type="checkbox" />Remember Me</label>
				<span>Forgot password?</span>
			</div>
           <div className="inputBx">
			<input type="submit" value="Login"/>
		   </div>
		 </form>
		 </div>
		</div>
	</section>
  );
};

export default Login ;