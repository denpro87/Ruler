import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, PasswordInput, Styling } from 'components';
import { IChangePasswordProps, IChangePasswordState } from './ChangePassword.types';
import { injectIntl } from 'react-intl';
import { styles } from './ChangePassword.styles';
import React from 'react';

const useStyles = makeStyles(styles);

class ChangePasswordPage extends React.Component<IChangePasswordProps, IChangePasswordState> {
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
		const { intl } = this.props;
		const { formatMessage } = intl;

		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title={formatMessage({ id: 'settings.change_password.title' })} titleSize="medium">
						<Box className={classes.innerContent}>
							<PasswordInput
								label={formatMessage({ id: 'settings.change_password.enter_the_current_password' })}
								name="oldPassword"
								value={this.state.oldPassword}
								onValueChange={this.handleStateChange}
							/>
							<PasswordInput
								label={formatMessage({ id: 'settings.change_password.enter_a_new_password' })}
								name="newPassword"
								value={this.state.newPassword}
								onValueChange={this.handleStateChange}
							/>
							<PasswordInput
								label={formatMessage({ id: 'settings.change_password.repeat_new_password' })}
								name="confirmedPassword"
								value={this.state.confirmedPassword}
								onValueChange={this.handleStateChange}
							/>
							<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={this.handleSaveClick}>
								{formatMessage({ id: 'settings.change_password.save_changes' })}
							</GreenButton>
						</Box>
						<Dialog
							open={this.state.showDialog}
							hasClose={true}
							illustrationName="question"
							onClose={() => this.setState({ showDialog: false })}
							aria-labelledby="form-dialog-title"
							title={formatMessage({ id: 'settings.change_password.dialog.title' })}
						>
							<Typography className={classes.dialogContentText}>
								{formatMessage({ id: 'settings.change_password.dialog.description' })}
							</Typography>
						</Dialog>
					</Page>
				)}
			</Styling>
		);
	}
}

export const ChangePassword = injectIntl(ChangePasswordPage);
