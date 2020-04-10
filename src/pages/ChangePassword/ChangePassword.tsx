import { Box, makeStyles } from '@material-ui/core';
import { IChangePasswordProps, IChangePasswordState } from './ChangePassword.types';
import { Page, PasswordInput, Styling } from 'components';
import { Stack } from '@fluentui/react';
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
					<Page title="Change Password" titleSize="medium">
						<Box className={classes.innerContent}>
							<Stack horizontalAlign="stretch" verticalFill tokens={{ childrenGap: 30 }}>
								<Stack.Item>
									<PasswordInput placeholder="Enter the current password" />
								</Stack.Item>
								<Stack.Item>
									<PasswordInput placeholder="Enter a new password" />
								</Stack.Item>
								<Stack.Item>
									<PasswordInput placeholder="Repeat new password" />
								</Stack.Item>
							</Stack>
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}
