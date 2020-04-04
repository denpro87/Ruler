import './App.styles';
import { CssBaseline } from '@material-ui/core';
import { IonApp } from '@ionic/react';
import { Theming } from 'components';
import React from 'react';

export const App: React.FunctionComponent = () => (
	<Theming>
		<CssBaseline />
		<IonApp></IonApp>
	</Theming>
);
