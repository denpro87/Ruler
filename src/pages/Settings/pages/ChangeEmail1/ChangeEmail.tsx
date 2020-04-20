import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, Text, TextField } from 'components';
import { styles } from './ChangeEmail.styles';
import React from 'react';
import clsx from 'clsx';
import manSvg from '../../images/man.svg';

const useStyles = makeStyles(styles);

export const ChangeEmail: React.FunctionComponent = () => {
	const classes = useStyles();
	const [state, setState] = React.useState('current');
	const [email, setEmail] = React.useState('');
	const [showDialog, setShowDialog] = React.useState(false);

	const handleDialogClose = (): void => {
		if (state === 'current') {
			setState('new');
			setEmail('');
		}
		setShowDialog(false);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setEmail(event.target.value);
	};

	const handleButtonClick = () => {
		setShowDialog(true);
	};

	return (
		<Page title="Change email" titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField label={`Enter ${state} email`} name="email" value={email} onValueChange={handleEmailChange} />
				<GreenButton
					compact
					className={classes.saveBtn}
					iconName={state === 'new' ? 'well-done-checked' : 'submit-report'}
					onClick={handleButtonClick}
				>
					{state === 'new' ? 'Save changes' : 'Send'}
				</GreenButton>
				<Text className={classes.smallText}>{state === 'new' ? 'A confirmation email will send to the indicated mail' : ''} </Text>
			</Box>
			<Dialog
				open={showDialog}
				hasClose={true}
				image={manSvg}
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={state === 'new' ? 'Changes saved!' : 'Request has been sent!'}
			>
				<Typography className={clsx(classes.smallText, classes.dialogContentText)}>
					{state === 'new' ? 'Your email has been successfully changed!' : 'A request to change the email was sent to the specified mail!'}
				</Typography>
			</Dialog>
		</Page>
	);
};
