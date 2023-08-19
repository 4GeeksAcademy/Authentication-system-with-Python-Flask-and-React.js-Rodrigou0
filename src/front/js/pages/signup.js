import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

const SignUp = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const navigate = useNavigate();

	const onSubmit =(e)=>{
		e.preventDefault()
		if(email === ''){
			alert('email not found')
		}else if(password === ''){
			alert('password is empty')
		}else{
			console.log("inside fetch");
			fetch(`https://rodrigou0-redesigned-lamp-44xxpxgrgq6fj9g-3001.app.github.dev/api/signup`,
			{ 
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email:email, password:password }) 
     		}).then((res)=> res.json())
			.then((result)=>{
				console.log('token is here =====>', result);
				localStorage.setItem("jwt-token", result.token);
				alert('You are signed up!')
				navigate('/home')
			}).catch((err)=> {
				console.log(err);
			})
		}
	}

	

	return (
		<div className="container-login">
			<form>
			<h3 className="d-flex justify-content-center">
				Sign Up
				</h3>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input 
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
					/>
					<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input 
						type="password" 
						class="form-control" 
						id="exampleInputPassword1"
						value={password}
						onChange={(e)=> setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" class="btn btn-primary me-2" onClick={onSubmit}>Sign Up</button>
				or
				<Link to={'/'}>
					<button type="submit" class="btn btn-primary ms-2">Back to Login</button>
					</Link>
			</form>
		</div>
	);
};

export default SignUp