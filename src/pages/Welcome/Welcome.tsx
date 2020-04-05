import { Box, Button, Link, Typography, makeStyles } from '@material-ui/core';

import { Icon, LogInSocialButton, Menu } from 'components';
import { IonPage } from '@ionic/react';
import { styles } from './Welcome.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const Welcome: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<IonPage>
			<Box className={classes.heading}>
				<Typography variant="h1">Welcome to Ruler!</Typography>
				<Button color="primary" variant="contained" disableElevation className={classes.createAccountButton}>
					<Icon iconName={IconName.CreateAccount} />
					<Typography variant="button">Create account</Typography>
				</Button>
			</Box>
			<Box className={classes.btnSection}>
				<Typography variant="body1" className={classes.subtitle}>
					Sign in with socials
				</Typography>

				<LogInSocialButton>
					<Icon iconName={IconName.Facebook} />
				</LogInSocialButton>

				<LogInSocialButton>
					<Icon iconName={IconName.Twitter} />
				</LogInSocialButton>

				<LogInSocialButton>
					<Icon iconName={IconName.Google} />
				</LogInSocialButton>

				<LogInSocialButton>
					<Icon iconName={IconName.Apple} />
				</LogInSocialButton>

				<Box className={classes.footer}>
					<Typography variant="body1" component="span">
						Already have an account?
					</Typography>

					<Typography variant="body2" className={classes.loginButton} component="span">
						<Link href="/service-providers" color="textSecondary">
							Log in
						</Link>
					</Typography>
				</Box>
			</Box>
			<Menu />
		</IonPage>
	);
};
