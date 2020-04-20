import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, TextField } from 'components';
import { styles } from './Profile.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const Profile: React.FunctionComponent = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		firstName: '',
		lastName: ''
	});

	const handleSaveClick = (): void => {
		console.log(state.firstName, state.lastName);
	};

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	return (
		<Page title="Profile" titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField label="First name" name="firstName" value={state.firstName} onValueChange={handleStateChange} />
				<TextField label="Second name" name="lastName" value={state.lastName} onValueChange={handleStateChange} />
				<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={handleSaveClick}>
					{' '}
					Save changes
				</GreenButton>
			</Box>
		</Page>
	);
};
