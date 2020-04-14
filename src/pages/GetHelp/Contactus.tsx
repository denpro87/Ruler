import { Button, makeStyles, Box, Typography } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { Page, GreenIcon } from 'components';
import { styles } from './GetHelp.styles';

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
		<>
			<Page title="Contact us" titleSize="medium">
				<Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
					<Stack.Item>
						<Box className={classes.li} style={{ marginTop: 17 }}>
							<GreenIcon iconName="support"></GreenIcon>
							<Typography variant="h6">{info.phoneNumber}</Typography>
						</Box>
					</Stack.Item>
					<Stack.Item>
						<Box className={classes.li}>
							<GreenIcon iconName="invite"></GreenIcon>
							<Typography variant="h6">{info.email}</Typography>
						</Box>
					</Stack.Item>
					<Stack.Item>
						<Box className={classes.li}>
							<GreenIcon iconName="point"></GreenIcon>
							<Typography variant="h6">{info.address}</Typography>
						</Box>
					</Stack.Item>
					<Stack.Item>
						<div style={{ paddingLeft: 40 }}>
							<Typography variant="h6" className={classes.content}>
								We have our head-office located in City, Country and our regional offices across all cities of our operations. Our team
								consists of over 30 dedicated members who are actively working to ensure a seamless, secure and hassle-free mobility
								experience for our consumers.
							</Typography>
						</div>
					</Stack.Item>
				</Stack>
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
		</>
	);
};
