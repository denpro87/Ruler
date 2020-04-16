import { Box, TextField, makeStyles } from '@material-ui/core';
import { GreenButton, Page } from 'components';
import { styles } from './Profile.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const Profile: React.FunctionComponent = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		firstName: '',
		lastName: ''
	});

	const handleSaveChanges = (): void => {
		console.log(state.firstName, state.lastName);
	};

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	return (
		<Page title="Profile" titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					classes={{ root: classes.textFieldRoot }}
					fullWidth
					id="your-first-name"
					label="First name"
					name="firstName"
					value={state.firstName}
					onChange={handleStateChange}
				/>
				<TextField
					classes={{ root: classes.textFieldRoot }}
					fullWidth
					id="your-last-name"
					label="Second name"
					name="lastName"
					value={state.lastName}
					onChange={handleStateChange}
				/>
				<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={handleSaveChanges}>
					{' '}
					Save changes
				</GreenButton>
			</Box>
		</Page>
	);
};
