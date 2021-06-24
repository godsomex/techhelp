import React, { useState } from 'react';
import SignUp from './Signup';
import Success from './Success';

const Form = () => {
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	
	const submitForm = () => {
		setFormIsSubmitted(true);
	}

	return (
		<div>
			{ !formIsSubmitted ? <SignUp submitForm={submitForm} /> : <Success /> }
		</div>
	);
};

export default Form;