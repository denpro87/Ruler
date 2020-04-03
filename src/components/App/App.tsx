import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

export const App: React.FunctionComponent = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route path="/home" exact />
				<Route exact path="/" render={() => <Redirect to="/home" />} />
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);
