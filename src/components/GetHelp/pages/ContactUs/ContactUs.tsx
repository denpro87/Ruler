import { Button, makeStyles, Box, Typography, Paper } from '@material-ui/core';
import { Page, GreenIcon } from 'components';
import { styles } from './ContactUs.styles';

import React from 'react';

const useStyles = makeStyles(styles);
const info = {
	phoneNumber: '+123 456 789 00',
	email: 'ruleremail@gmail.com',
	address: 'Na Hrebenkach 2, 150 00 praha 5'
};

export const ContactUs: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="Contact us" titleSize="medium">
			<Paper elevation={0} className={classes.container}>
				<Box className={classes.li}>
					<GreenIcon iconName="support"></GreenIcon>
					<Typography variant="h6">{info.phoneNumber}</Typography>
				</Box>
				<Box className={classes.li}>
					<GreenIcon iconName="invite"></GreenIcon>
					<Typography variant="h6">{info.email}</Typography>
				</Box>
				<Box className={classes.li}>
					<GreenIcon iconName="point"></GreenIcon>
					<Typography variant="h6">{info.address}</Typography>
				</Box>
				<div>
					<Typography variant="h6" className={classes.content}>
						We have our head-office located in City, Country and our regional offices across all cities of our operations. Our team consists
						of over 30 dedicated members who are actively working to ensure a seamless, secure and hassle-free mobility experience for our
						consumers.
					</Typography>
				</div>
			</Paper>
			<div className={classes.buttonWrapper}>
				<Button className={classes.bigButton} onClick={() => console.log('contact your insureance')}>
					<GreenIcon className={classes.buttonIcon} iconName="support" />
					Contact your insurance
				</Button>
				<Button className={classes.bigButton} onClick={() => console.log('contact us via email')}>
					<GreenIcon className={classes.buttonIcon} iconName="invite" />
					Contact us via email
				</Button>
			</div>
		</Page>
	);
};
