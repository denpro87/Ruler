import { Box, Paper, Typography, makeStyles } from '@material-ui/core';
import { Icon, LightGreenButton, Page } from 'components';
import { styles } from './ContactUs.styles';

import { FormattedMessage, useIntl } from 'react-intl';
import React from 'react';
const useStyles = makeStyles(styles);
const info = {
	phoneNumber: '+123 456 789 00',
	email: 'ruleremail@gmail.com',
	address: 'Na Hrebenkach 2, 150 00 praha 5'
};

export const ContactUs: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();

	return (
		<Page title={formatMessage({ id: 'get-help.contact-us.title' })} titleSize="medium">
			<Paper elevation={0} className={classes.container}>
				<Box className={classes.li}>
					<Icon iconName="support" color="#00b559"></Icon>
					<Typography variant="h6">{info.phoneNumber}</Typography>
				</Box>
				<Box className={classes.li}>
					<Icon iconName="invite" color="#00b559"></Icon>
					<Typography variant="h6">{info.email}</Typography>
				</Box>
				<div>
					<Typography variant="h6" className={classes.content}>
						<FormattedMessage id="get-help.contact-us.email-description" />
					</Typography>
				</div>
				<Box className={classes.li}>
					<Icon iconName="point" color="#00b559"></Icon>
					<Typography variant="h6">{info.address}</Typography>
				</Box>
				<div>
					<Typography variant="h6" className={classes.content}>
						<FormattedMessage id="get-help.contact-us.address-description" />
					</Typography>
				</div>
			</Paper>
			<div className={classes.buttonWrapper}>
				<LightGreenButton className={classes.bigButton} iconName="support" onClick={() => console.log('contact your insureance')}>
					<FormattedMessage id="get-help.contact-us.button.contact-your-insurance" />
				</LightGreenButton>
				<LightGreenButton className={classes.bigButton} iconName="invite" onClick={() => console.log('contact us via email')}>
					<FormattedMessage id="get-help.contact-us.button.contact-us-via-email" />
				</LightGreenButton>
			</div>
		</Page>
	);
};
