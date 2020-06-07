import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import React from 'react';

interface IPrivateRouteProps {
	component: React.FC<RouteComponentProps>;
	path: string;
	exact?: boolean;
}
export const PrivateRoute = ({ component, ...restProps }: any) => (
	<Route
		{...restProps}
		render={(props: any) =>
			localStorage.getItem('authToken') ? (
				React.createElement(component, props)
			) : (
				// <Redirect to={{ pathname: '/', state: { from: props.location } }} />
				<Redirect to="/welcome" />
			)
		}
	/>
);
