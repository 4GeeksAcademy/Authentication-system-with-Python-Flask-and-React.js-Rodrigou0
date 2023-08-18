import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

const Login = () => {
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
			fetch(`https://rodrigou0-redesigned-lamp-44xxpxgrgq6fj9g-3001.app.github.dev/api/login`,
			{ 
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }) 
     		}).then((res)=> res.json())
			.then((result)=>{
				console.log('token is here =====>', result);
				localStorage.setItem("jwt-token", result.token);
				alert('You are logged in!')
				navigate('/home')
			}).catch((err)=> {
				console.log(err);
			})
		}
	}

	return (
		<div className="container-login">
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input 
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={email}
						onChange={(e)=> setEmail(e.target.value)}
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
				<div>
					<button type="submit" class="btn btn-primary" onClick={onSubmit}>Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login