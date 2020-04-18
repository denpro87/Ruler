import { Box, TextField, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page } from 'components';
import { styles } from './ChangeEmail.styles';
import React from 'react';
import manSvg from '../../images/man.svg';

const useStyles = makeStyles(styles);

export const ChangeEmail: React.FunctionComponent = () => {
	const classes = useStyles();
	const [email, setEmail] = React.useState('');
	const [showDialog, setShowDialog] = React.useState(false);

	const handleSaveChanges = (): void => {
		console.log(email);
		setShowDialog(true);
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
			<Dialog
				open={showDialog}
				hasClose={true}
				image={manSvg}
				onClose={() => setShowDialog(false)}
				aria-labelledby="form-dialog-title"
				title="Changes saved!"
			>
				<Typography className={classes.dialogContentText}>Your email has been successfully changed!</Typography>
			</Dialog>
		</Page>
	);
};
