import { Location } from 'history';
import { Navigate, Route } from 'react-router';

interface Props extends Location {
	state: { key: string };
}
export const PrivateRoutes = ({
	path,
	element,
}: {
	path: string;
	element: JSX.Element;
}) => {
	const isLoggedIn = false;
	return isLoggedIn ? (
		<Route path={path} />
	) : (
		<Navigate state={{ from: path }} replace to='/login' />
	);
};
