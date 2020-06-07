import { Redirect, Route } from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({ component, ...restProps }: any) => (
	<Route
		{...restProps}
		render={(props: any) =>
			localStorage.getItem('authToken') ? (
				React.createElement(component, props)
			) : (
				// <Redirect to={{ pathname: '/welcome', state: { from: props.location } }} />
				<Redirect to="/welcome" />
			)
		}
	/>
);
