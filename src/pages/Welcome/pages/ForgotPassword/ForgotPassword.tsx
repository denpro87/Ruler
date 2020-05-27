import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, Text, TextField } from 'components';
import { styles } from './ForgotPassword.styles';
import { useIntl } from 'react-intl';
import { validateEmail } from 'utils';
import React from 'react';
const useStyles = makeStyles(styles);

export const ForgotPassword: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [email, setEmail] = React.useState('');
	const [emailValid, setEmailValid] = React.useState(true);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(event.target.value);
		setEmailValid(validateEmail(event.target.value));
	};

	return (
		<Page title={formatMessage({ id: 'welcome.forgot_password.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					label={formatMessage({ id: 'welcome.login.email_address' })}
					name="email"
					error={!emailValid}
					helperText={!emailValid ? formatMessage({ id: 'welcome.create_account.email_helper_text' }) : ''}
					value={email}
					onValueChange={handleEmailChange}
				/>
				<Box className={classes.footer}>
					<GreenButton compact iconName="submit-report" disabled={!email || !emailValid}>
						{formatMessage({ id: 'button.send' })}
					</GreenButton>
					<Text className={classes.forgotPasswordText}>{formatMessage({ id: 'welcome.forgot_password.text' })}</Text>
				</Box>
			</Box>
		</Page>
	);
};
