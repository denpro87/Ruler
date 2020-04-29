import { Box, TextField, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page } from 'components';
import { styles } from './ChangeEmail.styles';
import { useIntl } from 'react-intl';
import React from 'react';
const useStyles = makeStyles(styles);

export const ChangeEmail: React.FunctionComponent = () => {
	const classes = useStyles();
	const [email, setEmail] = React.useState('');
	const [showDialog, setShowDialog] = React.useState(false);
	const { formatMessage } = useIntl();

	const handleSaveClick = (): void => {
		console.log(email);
		setShowDialog(true);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setEmail(event.target.value);
	};

	return (
		<Page title={formatMessage({ id: 'settings.change_email.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					classes={{ root: classes.textFieldRoot }}
					fullWidth
					id="email"
					label={formatMessage({ id: 'settings.change_email.enter_new_email' })}
					name="email"
					value={email}
					onChange={handleEmailChange}
				/>
				<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={handleSaveClick}>
					{formatMessage({ id: 'button.save_changes' })}
				</GreenButton>
			</Box>
			<Dialog
				open={showDialog}
				hasClose={true}
				illustrationName="question"
				onClose={() => setShowDialog(false)}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'settings.change_email.dialog.title' })}
			>
				<Typography className={classes.dialogContentText}>{formatMessage({ id: 'settings.change_email.dialog.description' })}</Typography>
			</Dialog>
		</Page>
	);
};
