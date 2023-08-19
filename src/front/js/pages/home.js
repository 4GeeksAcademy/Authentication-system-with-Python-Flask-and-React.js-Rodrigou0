import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const [msg, setMsg] = useState('Loading message from the backend (make sure your python backend is running)...')

	const getTasks = () =>{
		const token = localStorage.getItem('jwt-token');
		if(token){
			fetch(`https://rodrigou0-redesigned-lamp-44xxpxgrgq6fj9g-3001.app.github.dev/api/tasks`,
			{ 
				method: "GET",
				headers: { "Content-Type": "application/json",
							"Authorization": "Bearer " + token
			},
     		}).then((res)=> res.json())
			.then((result)=>{
				console.log('Response is here =====>', result);
				setMsg(result.email)
			}).catch((err)=> {
				console.log(err);
			})
		} else{
			alert('You are not logged in')
		}
	}

	const logOut =()=>{
		localStorage.removeItem('jwt-token')
		alert('You are logged out!')
		navigate('/')
	}
	const secret =()=>{
		navigate('/loggedin')
	}

	return (
		<div className="text-center mt-5 container-fluid">
			<h1>Welcome to the Home Page!!</h1>
			<div className="images">
				<div className="image-container">
					<figure className="image-figure">
						<img className="image mt-2 me-2" src={"https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="} />	
						<figcaption>Caption for Image 1... just something to make it look better</figcaption>
					</figure>
				</div>
				<div className="image-container">
					<figure className="image-figure">
						<img className="image mt-2 me-2" src={"https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="} />	
						<figcaption>Caption for Image 2... just something to make it look better</figcaption>
					</figure>
				</div>
				<div className="image-container">
					<figure className="image-figure">
						<img className="image mt-2 me-2" src={"https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="} />	
						<figcaption>Caption for Image 3... just something to make it look better</figcaption>
					</figure>
				</div>	
				<div className="images2">		
					<div className="image-container">
						<figure className="image-figure">
							<img className="image mt-2 me-2" src={"https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="} />	
							<figcaption>Caption for Image 4... just something to make it look better</figcaption>
						</figure>
					</div>				
					<div className="image-container">
						<figure className="image-figure">
							<img className="image mt-2 me-2" src={"https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="} />	
							<figcaption>Caption for Image 5... just something to make it look better</figcaption>
						</figure>
					</div>				
					<div className="image-container">
						<figure className="image-figure">
							<img className="image mt-2 me-2" src={"https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="} />	
							<figcaption>Caption for Image 6... just something to make it look better</figcaption>
						</figure>
					</div>	
				</div>
			</div>	
			<div className="alert alert-info">
				{msg}
			</div>
			<button className="btn me-2" type="button" onClick={getTasks}>Get Tasks</button>
			<button className="btn me-2" type="button" onClick={logOut}>Log Out</button>
			<button className="btn me-2" type="button" onClick={secret}>Secret Page</button>
		</div>
	);
};
