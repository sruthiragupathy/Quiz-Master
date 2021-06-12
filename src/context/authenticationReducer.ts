import { AuthActionType, AuthInitialState } from './authenticationContext.type';

export const authenticationReducer = (
	state: AuthInitialState,
	{ type, payload }: AuthActionType,
) => {
	switch (type) {
		case 'SET_USER':
			return { ...state, ...payload };
		default:
			return state;
	}
};
