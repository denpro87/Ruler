import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theming.styles';
import React from 'react';

export const Theming: React.FunctionComponent = ({ children }) => {
	(window.document as any).fonts.onloadingdone = () => console.log('Fonts are initialized.');

	require('./variables.css');

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
