import { Box, Button, makeStyles } from '@material-ui/core';
import { IDriverLicenceProps } from './DriverLicence.types';
import { Icon, Page } from 'components';
import { LicenceItem } from './components';
import { styles } from './DriverLicence.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React, { useEffect } from 'react';

const useStyles = makeStyles(styles);

export const DriverLicence: React.FunctionComponent<IDriverLicenceProps> = ({ data, isSubmitSuccess }) => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();

	useEffect(() => {
		if (!data) history.push('/driver-licence/add');
	}, [data, history]);

	const handleRemoveClick = (index: number) => {
		console.log(index);
	};

	return (
		<Page title={formatMessage({ id: 'driver-licence.title' })} titleSize="large">
			{isSubmitSuccess && <Box className={classes.validBox} />}
			{data?.map((item, index) => (
				<LicenceItem key={index} imageSrc={item} handleRemoveClick={() => handleRemoveClick(index)} />
			))}
			<Button className={classes.addButton} href="/driver-licence/add">
				<Icon className={classes.buttonIcon} iconName="add"></Icon>
				{formatMessage({ id: 'driver-licence.add' })}
			</Button>
		</Page>
	);
};
