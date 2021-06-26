type LoginUser = {
	email: string;
	password: string;
};

type SignUpUser = {
	email: string;
	password: string;
	userName: string;
	firstName: string;
	lastName: string;
};

type UserDetails = {
	user: LoginUser;
	setFormError: React.Dispatch<React.SetStateAction<LoginUser>>;
};

type SignUpUserDetails = {
	user: SignUpUser;
	setFormError: React.Dispatch<React.SetStateAction<SignUpUser>>;
};

export const formValidation = ({
	user,
	setFormError,
}: UserDetails): boolean => {
	setFormError({ email: '', password: '' });
	let validationSuccess = true;
	if (!user.email) {
		setFormError((error) => ({ ...error, email: 'Please enter valid email' }));
		validationSuccess = false;
	}
	if (!user.password) {
		setFormError((error) => ({
			...error,
			password: 'Please enter valid password',
		}));
		validationSuccess = false;
	}
	return validationSuccess;
};

const isValidEmail = (email: string): boolean => {
	const emailRegex = new RegExp('[a-z][0-9]*@gmail.com');
	return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
	const passwordRegex = new RegExp('[0-9]+');
	return password.length > 6 && passwordRegex.test(password);
	// return false
};

export const signupFormValidation = ({
	user,
	setFormError,
}: SignUpUserDetails): boolean => {
	const { firstName, lastName, userName, email, password } = user;
	setFormError({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
	});
	let validationSuccess = true;
	if (!email || !isValidEmail(email)) {
		setFormError((error) => ({ ...error, email: 'Please enter valid email' }));
		validationSuccess = false;
	}
	if (!password || !isValidPassword(password)) {
		setFormError((error) => ({
			...error,
			password: 'Please enter valid password',
		}));
		validationSuccess = false;
	}
	if (!userName) {
		setFormError((error) => ({
			...error,
			userName: 'Please enter valid userName',
		}));
		validationSuccess = false;
	}
	if (!firstName) {
		setFormError((error) => ({
			...error,
			firstName: 'Please enter valid firstName',
		}));
		validationSuccess = false;
	}
	if (!lastName) {
		setFormError((error) => ({
			...error,
			lastName: 'Please enter valid lastName',
		}));
		validationSuccess = false;
	}
	return validationSuccess;
};
