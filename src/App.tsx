import './App.styles';
import { CssBaseline } from '@material-ui/core';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Theming } from 'components';
import { Welcome } from 'pages';
import React from 'react';

export const App: React.FunctionComponent = () => (
	<Theming>
		<CssBaseline />
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/splash" exact component={Welcome} />
					<Route path="/welcome" exact component={Welcome} />
					<Redirect from="/" to="/splash" exact />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	</Theming>
);
