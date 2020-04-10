import { Box, TextField, makeStyles } from '@material-ui/core';
import { GreenButton, Page, Styling } from 'components';
import { IProfileProps, IProfileState } from './Profile.types';
import { Stack } from '@fluentui/react';
import { styles } from './Profile.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export class Profile extends React.Component<IProfileProps, IProfileState> {
	state = {
		firstName: 'John',
		lastName: 'Doe'
	};

	private handleSaveChanges = (event: React.MouseEvent<HTMLElement>): void => {
		console.log(this.state.firstName, this.state.lastName);
	};

	private handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ firstName: event.target.value });
	};

	private handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ lastName: event.target.value });
	};

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title="Change Password" titleSize="medium">
						<Box className={classes.innerContent}>
							<Stack horizontalAlign="stretch" verticalFill verticalAlign="space-around" tokens={{ childrenGap: 20 }}>
								<Stack.Item>
									<TextField
										fullWidth
										id="your-first-name"
										label="Your first name"
										value={this.state.firstName}
										onChange={this.handleFirstNameChange}
									/>
								</Stack.Item>
								<Stack.Item>
									<TextField
										fullWidth
										id="your-last-name"
										label="Your last name"
										value={this.state.lastName}
										onChange={this.handleLastNameChange}
									/>
								</Stack.Item>
								<Stack.Item>
									<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={this.handleSaveChanges}>
										{' '}
										Save changes
									</GreenButton>
								</Stack.Item>
							</Stack>
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}
