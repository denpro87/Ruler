import { BlackButton, FullPage, Link, SocialIconButton, Text } from 'components';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { styles } from './Welcome.styles';
import React from 'react';
import clsx from 'clsx';

import Background from './images/bg.svg';

const useStyles = makeStyles(styles);

export const Welcome: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<FullPage canGoBack className={classes.page} goBackIconButtonProps={{ noShadow: false }}>
			<Box className={classes.backgroundContainer}>
				<img className={clsx(classes.background, classes.image)} src={Background} alt="background" />
			</Box>
			<Box className={classes.content}>
				<Stack horizontalAlign="stretch" verticalAlign="space-between" verticalFill>
					<Stack.Item>
						<Text className={classes.welcomeText} block>
							Welcome to Ruler!
						</Text>
						<BlackButton iconName="create-account" compact>
							Create account
						</BlackButton>
					</Stack.Item>
					<Stack.Item>
						<Text className={classes.signInWithSocialsText} block>
							Sign in with socials
						</Text>
						<Grid container>
							<Grid item xs={3}>
								<SocialIconButton iconProps={{} as any} iconName="apple" />
							</Grid>
							<Grid item xs={3}>
								<SocialIconButton iconProps={{} as any} iconName="twitter" />
							</Grid>
							<Grid item xs={3}>
								<SocialIconButton iconProps={{} as any} iconName="google" />
							</Grid>
							<Grid item xs={3}>
								<SocialIconButton iconProps={{} as any} iconName="facebook" />
							</Grid>
						</Grid>
					</Stack.Item>

					<Stack.Item>
						<Text className={classes.alreadyHaveAnAccountText} block>
							Already have an account? <Link>Log in</Link>
						</Text>
					</Stack.Item>
				</Stack>
			</Box>
		</FullPage>
	);
};
