import { Box, Typography, makeStyles } from '@material-ui/core';
import { ICON_BLACK_COLOR_TYPE_SECONDARY_COLOR, Icon } from 'components';
import { IFooterProps } from './Footer.types';
import { styles } from './Footer.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export const Footer: React.FunctionComponent<IFooterProps> = ({ leftIcon, leftText, rightIcon, rightText, leftColor, rightColor }) => {
	const classes = useStyles();

	return (
		<div className={classes.faqFooter}>
			<Box className={classes.li}>
				<Icon
					iconName={leftIcon}
					{...(leftColor && { primaryColor: leftColor })}
					secondaryColor={ICON_BLACK_COLOR_TYPE_SECONDARY_COLOR}
				></Icon>
				<Typography variant="h6">{leftText}</Typography>
			</Box>
			<Box className={classes.li}>
				<Icon
					iconName={rightIcon}
					{...(rightColor && { primaryColor: rightColor })}
					secondaryColor={ICON_BLACK_COLOR_TYPE_SECONDARY_COLOR}
				></Icon>
				<Typography variant="h6">{rightText}</Typography>
			</Box>
		</div>
	);
};
