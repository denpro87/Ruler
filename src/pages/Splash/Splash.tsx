import { Box, makeStyles } from '@material-ui/core';
import { FullPage } from 'components';
import { styles } from './Splash.styles';
import { useHistory } from 'react-router-dom';
import React from 'react';

import BottomBackgroundElement from './images/bottom-bg-element.svg';
import Logo from './images/logo.svg';
import TopBackgroundElement from './images/top-bg-element.svg';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Splash: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();

	const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		e.preventDefault();
		history.push('/welcome');
	};

	const handleRenderBackground = () => (
		<>
			<Box className={classes.logoContainer}>
				<img className={classes.image} src={Logo} alt="logo" />
			</Box>
			<Box className={clsx(classes.backgroundElementContainer, classes.topBackgroundElementContainer)}>
				<img className={clsx(classes.topBackgroundElement, classes.image)} src={TopBackgroundElement} alt="top background element" />
			</Box>
			<Box className={clsx(classes.backgroundElementContainer, classes.bottomBackgroundElementContainer)}>
				<img
					className={clsx(classes.bottomBackgroundElement, classes.image)}
					src={BottomBackgroundElement}
					alt="bottom background element"
				/>
			</Box>
		</>
	);

	return <FullPage backgroundColor="#000" onRenderBackground={handleRenderBackground} onClick={handleOnClick} />;
};
