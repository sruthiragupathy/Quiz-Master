export type AuthInitialState = {
	username: string;
	token: string;
	firstName: string;
	userId: string;
};

export type AuthContext = {
	authState: AuthInitialState;
	authDispatch: React.Dispatch<any>;
	loginUserWithCredentials: ({
		email,
		password,
		pathTo,
	}: LoginUserDetails) => Promise<string>;
	logoutUser: () => void;
	signUpNewUser: ({
		email,
		password,
		firstName,
		lastName,
		userName,
	}: SignUpUserDetails) => Promise<any>;
};

export type LoginUserDetails = {
	email: string;
	password: string;
	pathTo: string;
};

export type SignUpUserDetails = {
	email: string;
	password: string;
	userName: string;
	firstName: string;
	lastName: string;
};

export type AuthActionType =
	| {
			type: 'SET_USER';
			payload: AuthInitialState;
	  }
	| {
			type: 'SET_USER';
			payload: AuthInitialState;
	  };
