import { Box, Typography, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, Page, TextField } from 'components';
import { FormattedMessage, useIntl } from 'react-intl';
import { styles } from './Profile.styles';
import React from 'react';
import manSvg from '../../images/man.svg';
const useStyles = makeStyles(styles);

export const Profile: React.FunctionComponent = () => {
	const classes = useStyles();
	const [showDialog, setShowDialog] = React.useState(false);
	const [state, setState] = React.useState({
		firstName: '',
		lastName: ''
	});
	const { formatMessage } = useIntl();

	const handleSaveClick = (): void => {
		setShowDialog(true);
	};

	const handleDialogClose = (): void => {
		setShowDialog(false);
	};

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	return (
		<Page title={formatMessage({ id: 'settings.profile.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					label={formatMessage({ id: 'settings.profile.first_name' })}
					name="firstName"
					value={state.firstName}
					onValueChange={handleStateChange}
				/>
				<TextField
					label={formatMessage({ id: 'settings.profile.second_name' })}
					name="lastName"
					value={state.lastName}
					onValueChange={handleStateChange}
				/>
				<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={handleSaveClick}>
					<FormattedMessage id={'settings.profile.save_changes'} />
				</GreenButton>
			</Box>
			<Dialog
				open={showDialog}
				hasClose={true}
				image={manSvg}
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'settings.profile.dialog.title' })}
			>
				<Typography className={classes.smallText}>{formatMessage({ id: 'settings.profile.dialog.description' })}</Typography>
			</Dialog>
		</Page>
	);
};
