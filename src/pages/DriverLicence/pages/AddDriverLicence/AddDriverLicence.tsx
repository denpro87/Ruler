import { AddDriverLicencePhoto } from '../../components/AddDriverLicencePhoto';
import { Page, Text } from 'components';
import { makeStyles } from '@material-ui/core';
import { styles } from './AddDriverLicence.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

export const AddDriverLicence: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();

	return (
		<Page title={formatMessage({ id: 'driver_licence.title' })} titleSize="large">
			<Text className={classes.description}>{formatMessage({ id: 'driver_licence.description' })}</Text>
			<AddDriverLicencePhoto />
		</Page>
	);
};
