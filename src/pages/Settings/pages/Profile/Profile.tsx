import { Box, TextField, makeStyles } from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';
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
	const { formatMessage } = useIntl();

	const handleSaveClick = (): void => {
		console.log(state.firstName, state.lastName);
	};

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	return (
		<Page title={formatMessage({ id: 'menu.settings.profile.title' })} titleSize="medium">
			<Box className={classes.innerContent}>
				<TextField
					classes={{ root: classes.textFieldRoot }}
					fullWidth
					id="your-first-name"
					label={formatMessage({ id: 'menu.settings.profile.first_name' })}
					name="firstName"
					value={state.firstName}
					onChange={handleStateChange}
				/>
				<TextField
					classes={{ root: classes.textFieldRoot }}
					fullWidth
					id="your-last-name"
					label={formatMessage({ id: 'menu.settings.profile.second_name' })}
					name="lastName"
					value={state.lastName}
					onChange={handleStateChange}
				/>
				<GreenButton compact className={classes.saveBtn} iconName="well-done-checked" onClick={handleSaveClick}>
					<FormattedMessage id={'menu.settings.profile.save_changes'} />
				</GreenButton>
			</Box>
		</Page>
	);
};
