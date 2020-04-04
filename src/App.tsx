import './App.styles';
import { CssBaseline } from '@material-ui/core';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Splash } from 'pages';
import { Theming } from 'components';
import React from 'react';

export const App: React.FunctionComponent = () => (
	<Theming>
		<CssBaseline />
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/splash" component={Splash} />
					<Redirect exact from="/" to="/splash" />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	</Theming>
);
