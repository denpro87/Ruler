import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, PasswordInput, TextField } from 'components';
import { styles } from './Login.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

export const Login: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [state, setState] = React.useState({
		emailAddress: '',
		password: ''
	});

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	return (
		<Page
			title={formatMessage({ id: 'welcome.login.title' })}
			titleSize="medium"
			headerLink={formatMessage({ id: 'welcome.login.text.forgot_password' })}
			headerLinkProps={{ href: '/welcome/forgot-password' }}
		>
			<Box className={classes.innerContent}>
				<TextField
					label={formatMessage({ id: 'welcome.login.email_address' })}
					name="emailAddress"
					value={state.emailAddress}
					onValueChange={handleStateChange}
				/>
				<PasswordInput
					label={formatMessage({ id: 'welcome.login.password' })}
					name="password"
					value={state.password}
					onValueChange={handleStateChange}
				/>
				<GreenButton
					compact
					className={classes.logInBtn}
					iconName="log-in"
					disabled={!state.emailAddress || !state.password}
					onClick={(): void => history.push('/home')}
				>
					{formatMessage({ id: 'button.login' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
