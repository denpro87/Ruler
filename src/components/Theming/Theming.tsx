import React from 'react';

export const Theming: React.FunctionComponent = ({ children }) => {
	require('./variables.css');

	return <>{children}</>;
};
