import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, PasswordInput, Styling } from 'components';
import { IChangePasswordProps, IChangePasswordState } from './ChangePassword.types';
import { injectIntl } from 'react-intl';
import { styles } from './ChangePassword.styles';
import React from 'react';
import manSvg from '../../images/man.svg';

const useStyles = makeStyles(styles);

class ChangePasswordPage extends React.Component<IChangePasswordProps, IChangePasswordState> {
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
		const { intl } = this.props;
		const { formatMessage } = intl;

		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title={formatMessage({ id: 'menu.settings.change_password.title' })} titleSize="medium">
						<Box className={classes.innerContent}>
							<PasswordInput placeholder={formatMessage({ id: 'menu.settings.change_password.enter_the_current_password' })} />
							<PasswordInput placeholder={formatMessage({ id: 'menu.settings.change_password.enter_a_new_password' })} />
							<PasswordInput placeholder={formatMessage({ id: 'menu.settings.change_password.repeat_new_password' })} />
							<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={this.handleSaveClick}>
								{formatMessage({ id: 'menu.settings.change_password.save_changes' })}
							</GreenButton>
						</Box>
						<Dialog
							open={this.state.showDialog}
							hasClose={true}
							image={manSvg}
							onClose={() => this.setState({ showDialog: false })}
							aria-labelledby="form-dialog-title"
							title={formatMessage({ id: 'menu.settings.change_password.dialog.title' })}
						>
							<Typography className={classes.dialogContentText}>
								{formatMessage({ id: 'menu.settings.change_password.dialog.description' })}
							</Typography>
						</Dialog>
					</Page>
				)}
			</Styling>
		);
	}
}

export const ChangePassword = injectIntl(ChangePasswordPage);
