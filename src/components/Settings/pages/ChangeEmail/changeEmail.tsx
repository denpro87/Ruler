import { Box, TextField, makeStyles } from '@material-ui/core';
import { GreenButton, Page } from 'components';
import { styles } from './changeEmail.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const ChangeEmail: React.FunctionComponent = () => {
	const classes = useStyles();
	const [email, setEmail] = React.useState('');

	const handleSaveChanges = (): void => {
		console.log(email);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setEmail(event.target.value);
	};

	return (
		<Page title="Change email" titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					classes={{ root: classes.textFieldRoot }}
					fullWidth
					id="email"
					label="Enter new email"
					name="email"
					value={email}
					onChange={handleEmailChange}
				/>
				<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={handleSaveChanges}>
					{' '}
					Save changes
				</GreenButton>
			</Box>
		</Page>
	);
};
