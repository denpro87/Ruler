import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, PasswordInput, Styling } from 'components';
import { IChangePasswordProps, IChangePasswordState } from './ChangePassword.types';
import { styles } from './ChangePassword.styles';
import React from 'react';
import manSvg from '../../images/man.svg';

const useStyles = makeStyles(styles);

export class ChangePassword extends React.Component<IChangePasswordProps, IChangePasswordState> {
	state = {
		oldPassword: '',
		newPassword: '',
		confirmedPassword: '',
		showDialog: false
	};

	handleSaveClick = () => {
		this.setState({ showDialog: true });
	};

	handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		this.setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title="Change Password" titleSize="medium">
						<Box className={classes.innerContent}>
							<PasswordInput
								label="Enter the current password"
								name="oldPassword"
								value={this.state.oldPassword}
								onValueChange={this.handleStateChange}
							/>
							<PasswordInput
								label="Enter the new password"
								name="newPassword"
								value={this.state.newPassword}
								onValueChange={this.handleStateChange}
							/>
							<PasswordInput
								label="Repeat new password"
								name="confirmedPassword"
								value={this.state.confirmedPassword}
								onValueChange={this.handleStateChange}
							/>
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
