export type UserDetails = {
	email: string;
	password: string;
};

export type AuthenticationResponse = {
	token: string;
	userName: string;
	userId: string;
	firstName: string;
};

export type ErrorResponse = {
	error: string;
};
