import { Box, makeStyles } from '@material-ui/core';
import { Page } from 'components';
import { styles } from './Splash.styles';
import React from 'react';

import BottomBackgroundElement from './images/bottom-bg-element.svg';
import Logo from './images/logo.svg';
import TopBackgroundElement from './images/top-bg-element.svg';

const useStyles = makeStyles(styles);

export const Splash: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page className={classes.page} backgroundColor="#000">
			<Box className={classes.logoContainer}>
				<img className={classes.image} src={Logo} alt="logo" />
			</Box>
			<Box className={classes.topBackgroundElementContainer}>
				<img className={classes.image} src={TopBackgroundElement} alt="top background element" />
			</Box>
			<Box className={classes.bottomBackgroundElementContainer}>
				<img className={classes.image} src={BottomBackgroundElement} alt="bottom background element" />
			</Box>
		</Page>
	);
};
