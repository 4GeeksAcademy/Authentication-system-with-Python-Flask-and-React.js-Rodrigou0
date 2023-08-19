import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./login";

import { Context } from "../store/appContext";

const Loggedin = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

    useEffect(()=>{
		const token = localStorage.getItem('jwt-token');
        console.log('token is showing here',token);
        if(!token){
            navigate('/')
        }
    },[])

	
	

	return (
		<div>
			<div className="d-flex justify-content-center">
				<h3 className="mt-5">This is the page for logged in users</h3>
			</div>
			<div className="container-fluid d-flex justify-content-center">
				<div className="loggedin me-3 d-flex justify-content-center">
					And this is the content for logged in users
				</div>
				<div className="loggedin me-3 d-flex justify-content-center">
					More content for logged in users
				</div>
				<div className="loggedin me-3 d-flex justify-content-center">
					More content for logged in users
				</div>
				<div className="loggedin me-3 d-flex justify-content-center">
					More content for logged in users
				</div>
			</div>
			<Link to={'/home'}>
					<button type="submit" class="btn ms-5 mt-3">Back to Home</button>
					</Link>
		</div>
	);
};

export default Loggedin