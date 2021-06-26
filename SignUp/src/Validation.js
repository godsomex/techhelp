const Validation = (values) => {

	let errors={};

	if(!values.fullname){
		errors.fullname='Name is required.'
	}
	if(!values.username){
		errors.username='Username is required.'
	}
	if(!values.email){
		errors.email='e-mail is required.'
	} else if(!/\S+@\S+\.\S+/.test(values.email)){
		errors.email='e-mail is invalid.'
	}
	if(!values.password){
		errors.password='Password is required.'
	} else if(values.password.length < 8){
		errors.password='Password must be more than 8 characters.'
	}
	if(!values.phone){
		errors.phone='Phone Number is required.'
	}
	if(!values.git){
		errors.git='Git Account URL is required.'
	}


	return errors;
};

export default Validation;