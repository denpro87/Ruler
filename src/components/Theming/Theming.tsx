import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theming.styles';
import React from 'react';

const useStyles = (): void => require('./variables.css');

export const Theming: React.FunctionComponent = ({ children }) => {
	useStyles();

	if (document.fonts?.onloadingdone) {
		document.fonts.onloadingdone = () => console.log('Fonts are initialized.');
	}
	document.body.setAttribute('data-theme', 'light');
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
