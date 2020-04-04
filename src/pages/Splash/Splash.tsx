import { Box, makeStyles } from '@material-ui/core';
import { Page } from 'components';
import { styles } from './Splash.styles';
import React from 'react';
import footerImg from './images/bg-element-1.png';
import footerImg2x from './images/bg-element-1@2x.png';
import footerImg3x from './images/bg-element-1@3x.png';
import headerImg from './images/bg-element-2.png';
import headerImg2x from './images/bg-element-2@2x.png';
import headerImg3x from './images/bg-element-2@3x.png';
import logo from './images/logo.png';
import logo2x from './images/logo@2x.png';
import logo3x from './images/logo@3x.png';

const useStyles = makeStyles(styles);

export const Splash: React.FC = () => {
	const classes = useStyles();

	return (
		<Page>
			<Box className={classes.wrapper}>
				<Box className={classes.wrapper1}>
					<img className={classes.headerImage} src={headerImg} srcSet={`${headerImg2x} 2x, ${headerImg3x} 3x`} alt="Ruler App Header" />
					<img className={classes.logo} src={logo} srcSet={`${logo2x} 2x, ${logo3x} 3x`} alt="Ruler App Logo" />
					<img className={classes.footerImage} src={footerImg} srcSet={`${footerImg2x} 2x, ${footerImg3x} 3x`} alt="Ruler App Footer" />
				</Box>
			</Box>
		</Page>
	);
};
