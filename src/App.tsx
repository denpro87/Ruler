import * as getHelp from 'pages/GetHelp';
import * as settings from 'pages/Settings';
import { DriveLicence, Home, News, ServiceProviders, Splash, Welcome } from 'pages';

import { CssBaseline } from '@material-ui/core';
import { GlobalCss } from './App.styles';
import { IntlProvider, Theming } from 'components';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';

export const App: React.FunctionComponent = () => (
	<IntlProvider>
		<Theming>
			<CssBaseline />
			<GlobalCss />
			<IonApp>
				<IonReactRouter>
					<IonRouterOutlet>
						<Route path="/home" component={Home} exact />
						<Route path="/splash" component={Splash} exact />
						<Route path="/settings" component={settings.Settings} exact />
						<Route path="/service-providers/:provider?" component={ServiceProviders} exact />
						<Route path="/welcome" component={Welcome} exact />
						<Route path="/news" component={News} exact />
						<Route path="/settings/change-password" component={settings.ChangePassword} exact />
						<Route path="/drive-license" component={DriveLicence} exact />
						<Route path="/settings/notifications" component={settings.Notifications} exact />
						<Route path="/settings/languages" component={settings.Languages} exact />
						<Route path="/settings/profile" component={settings.Profile} exact />
						<Route path="/settings/change-email" component={settings.ChangeEmail} exact />
						<Route path="/settings/dark-mode" component={settings.DarkMode} exact />

						<Route path="/get-help" component={getHelp.GetHelp} exact />
						<Route path="/get-help/faq" component={getHelp.Faq} exact />
						<Route path="/get-help/faq-unlock" component={getHelp.FaqUnlock} exact />
						<Route path="/get-help/faq-start" component={getHelp.FaqStart} exact />
						<Route path="/get-help/faq-pause" component={getHelp.FaqPause} exact />
						<Route path="/get-help/faq-lock" component={getHelp.FaqLock} exact />
						<Route path="/get-help/faq-finding" component={getHelp.FaqFinding} exact />
						<Route path="/get-help/faq-park" component={getHelp.FaqPark} exact />
						<Route path="/get-help/faq-zones" component={getHelp.FaqZones} exact />
						<Route path="/get-help/privacy-policy" component={getHelp.Privacy} exact />
						<Route path="/get-help/contact-us" component={getHelp.ContactUs} exact />
						<Route path="/get-help/regulations" component={getHelp.SafetyRegulations} exact />
						<Route path="/get-help/regulations-scooter" component={getHelp.SafetyScooter} exact />
						<Route path="/get-help/my-reports" component={getHelp.MyReports} exact />
						<Route path="/get-help/how-to-ride" component={getHelp.HowToRide} exact />
						<Route exact path="/" render={() => <Redirect to="/splash" />} />
					</IonRouterOutlet>
				</IonReactRouter>
			</IonApp>
		</Theming>
	</IntlProvider>
);
