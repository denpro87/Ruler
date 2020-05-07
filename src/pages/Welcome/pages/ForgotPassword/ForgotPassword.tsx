import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, Text, TextField } from 'components';
import { styles } from './ForgotPassword.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

export const ForgotPassword: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [emailAddress, setEmailAddress] = React.useState('');

	const handleEmailAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => setEmailAddress(event.target.value);

	return (
		<Page title={formatMessage({ id: 'welcome.forgot_password.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					label={formatMessage({ id: 'welcome.login.email_address' })}
					name="emailAddress"
					value={emailAddress}
					onValueChange={handleEmailAddressChange}
				/>
				<Box className={classes.footer}>
					<GreenButton compact iconName="submit-report" disabled={!emailAddress}>
						{formatMessage({ id: 'button.send' })}
					</GreenButton>
					<Text className={classes.forgotPasswordText}>{formatMessage({ id: 'welcome.forgot_password.text' })}</Text>
				</Box>
			</Box>
		</Page>
	);
};
