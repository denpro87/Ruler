import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, PasswordInput, Styling } from 'components';
import { IChangePasswordProps, IChangePasswordState } from './ChangePassword.types';
import { styles } from './ChangePassword.styles';
import React from 'react';
import manSvg from '../../images/man.svg';

const useStyles = makeStyles(styles);

export class ChangePassword extends React.Component<IChangePasswordProps, IChangePasswordState> {
	state = {
		oldPassword: 'true',
		newPassword: 'true',
		confirmedPassword: 'true',
		showDialog: false
	};

	handleSaveClick = () => {
		this.setState({ showDialog: true });
	};

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title="Change Password" titleSize="medium">
						<Box className={classes.innerContent}>
							<PasswordInput placeholder="Enter the current password" />
							<PasswordInput placeholder="Enter a new password" />
							<PasswordInput placeholder="Repeat new password" />
							<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={this.handleSaveClick}>
								{' '}
								Save changes
							</GreenButton>
						</Box>
						<Dialog
							open={this.state.showDialog}
							hasClose={true}
							image={manSvg}
							onClose={() => this.setState({ showDialog: false })}
							aria-labelledby="form-dialog-title"
							title="Changes saved!"
						>
							<Typography className={classes.dialogContentText}>Your password has been successfully changed!</Typography>
						</Dialog>
					</Page>
				)}
			</Styling>
		);
	}
}
