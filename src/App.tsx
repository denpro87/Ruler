import * as DriverLicence from 'pages/DriverLicence';
import * as GetHelp from 'pages/GetHelp';
import * as News from 'pages/News';
import * as Settings from 'pages/Settings';
import * as Wallets from 'pages/Wallets';
import { Home, ServiceProviders, Splash, Welcome } from 'pages';

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
						<Route path="/settings" component={Settings.Settings} exact />
						<Route path="/service-providers/:provider?" component={ServiceProviders} exact />
						<Route path="/welcome" component={Welcome} exact />
						<Route path="/news" component={News.News} exact />
						<Route path="/news/:social?" component={News.NewsDetail} exact />
						<Route path="/settings/change-password" component={Settings.ChangePassword} exact />
						<Route path="/driver-licence" component={DriverLicence.DriverLicence} exact />
						<Route path="/driver-licence/add" component={DriverLicence.AddDriveLicence} exact />
						<Route path="/settings/change-password" component={Settings.ChangePassword} exact />
						<Route path="/settings/notifications" component={Settings.Notifications} exact />
						<Route path="/settings/languages" component={Settings.Languages} exact />
						<Route path="/settings/profile" component={Settings.Profile} exact />
						<Route path="/settings/change-email" component={Settings.ChangeEmail} exact />
						<Route path="/settings/dark-mode" component={Settings.DarkMode} exact />
						<Route path="/get-help" component={GetHelp.GetHelp} exact />
						<Route path="/get-help/faq" component={GetHelp.Faq} exact />
						<Route path="/get-help/faq-unlock" component={GetHelp.FaqUnlock} exact />
						<Route path="/get-help/faq-start" component={GetHelp.FaqStart} exact />
						<Route path="/get-help/faq-pause" component={GetHelp.FaqPause} exact />
						<Route path="/get-help/faq-lock" component={GetHelp.FaqLock} exact />
						<Route path="/get-help/faq-finding" component={GetHelp.FaqFinding} exact />
						<Route path="/get-help/faq-park" component={GetHelp.FaqPark} exact />
						<Route path="/get-help/faq-zones" component={GetHelp.FaqZones} exact />
						<Route path="/get-help/privacy-policy" component={GetHelp.Privacy} exact />
						<Route path="/get-help/contact-us" component={GetHelp.ContactUs} exact />
						<Route path="/get-help/regulations" component={GetHelp.SafetyRegulations} exact />
						<Route path="/get-help/regulations-scooter" component={GetHelp.SafetyScooter} exact />
						<Route path="/get-help/my-reports" component={GetHelp.MyReports} exact />
						<Route path="/get-help/how-to-ride" component={GetHelp.HowToRide} exact />
						<Route path="/wallets" component={Wallets.Wallets} exact />
						<Route path="/wallets/create-wallet" component={Wallets.CreateWallet} exact />
						<Route path="/wallets/create-wallet-description" component={Wallets.CreateWalletDescription} exact />
						<Route path="/wallets/create-wallet-store" component={Wallets.CreateWalletStore} exact />
						<Route path="/wallets/create-wallet-place" component={Wallets.CreateWalletPlace} exact />
						<Route path="/wallets/add-funds" component={Wallets.AddFunds} exact />
						<Route path="/wallets/add-funds/add-credit-card" component={Wallets.AddCreditCard} exact />
						<Route path="/wallets/template" component={Wallets.Template} exact />
						<Route path="/wallets/transfer" component={Wallets.Transfer} exact />
						<Route exact path="/" render={() => <Redirect to="/splash" />} />
					</IonRouterOutlet>
				</IonReactRouter>
			</IonApp>
		</Theming>
	</IntlProvider>
);
