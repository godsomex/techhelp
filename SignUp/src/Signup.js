import React, { useState, useEffect } from 'react';
import Validation from './Validation';
import './App.css';

const SignUp = ({ submitForm }) => {

	const [values, setValues] = useState({
		fullname:'', username:'', email:'', password:'', phone:'', github:'',
	});

	const [errors, setErrors] = useState({});
	const [dataIsCorrect, setDataIsCorrect] = useState(false);

	const handleChange =(e) => {
		setValues({
			...values, [e.target.name]: e.target.value,
		});
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		setErrors(Validation(values));
		setDataIsCorrect(true);
	};

	useEffect(() => {
		if(Object.keys(errors).length === 0 && dataIsCorrect){
			submitForm(true);
		}
	}, [errors]);
	return (
		<div className='App'>
      		<div className='logo'></div>
      		<h1 className='title'>TechZone</h1>
      		<h1 className='signup'>SignUp</h1>
      		<input className='text' type='text' placeholder='Full Name' name='fullname' value={values.fullname} onChange={handleChange} />
			{errors.fullname && <p className='error'>{errors.fullname}</p>}
	  		<input className='text' type='text' placeholder='username' name='username' value={values.username} onChange={handleChange} />
			{errors.username && <p className='error'>{errors.username}</p>}
      		<input className='text' type='text' placeholder='email' name='email' value={values.email} onChange={handleChange} />
			{errors.email && <p className='error'>{errors.email}</p>}
      		<input className='text' type='password' name='password' value={values.password} onChange={handleChange} />
			{errors.password && <p className='error'>{errors.password}</p>}
      		<input className='text' type='text' placeholder='Phone Number' name='phone' value={values.phone} onChange={handleChange} />
			{errors.phone && <p className='error'>{errors.phone}</p>}
      		<input className='text' type='text' placeholder='Github' name='git' value={values.git} onChange={handleChange} />
			{errors.git && <p className='error'>{errors.git}</p>}
      		<input className='btn' type="button" name="" onClick={handleFormSubmit} value="Sign Up" />
    	</div>
	)
}

export default SignUp;


	