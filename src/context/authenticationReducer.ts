import { AuthActionType, AuthInitialState } from './authenticationContext.type';

export const authenticationReducer = (
	state: AuthInitialState,
	{ type, payload }: AuthActionType,
) => {
	console.log('in reducer');
	console.log({ payload });
	switch (type) {
		case 'SET_USER':
			return { ...state, ...payload };
		default:
			return state;
	}
};
