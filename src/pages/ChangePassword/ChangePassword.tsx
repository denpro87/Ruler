import { Box, Typography, makeStyles } from '@material-ui/core';
import { IChangePasswordProps, IChangePasswordState } from './ChangePassword.types';
import { Page, PasswordInput, Styling } from 'components';
import { styles } from './ChangePassword.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export class ChangePassword extends React.Component<IChangePasswordProps, IChangePasswordState> {
	state = {
		oldPassword: 'true',
		newPassword: 'true',
		confirmedPassword: 'true'
	};

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page>
						<Box className={classes.innerContent}>
							<Typography variant="h2">Change Password</Typography>
							<PasswordInput placeholder="Enter the current password" />
							<PasswordInput placeholder="Enter a new password" />
							<PasswordInput placeholder="Repeat new password" />
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}
