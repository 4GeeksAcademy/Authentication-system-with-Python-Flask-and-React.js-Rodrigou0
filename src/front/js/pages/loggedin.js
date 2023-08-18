import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
		<div className="container">
		Page for logged in users
		</div>
	);
};

export default Login