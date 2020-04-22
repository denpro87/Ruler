import { Box, makeStyles } from '@material-ui/core';
import { ILicenseItemProps } from './LicenseItem.types';
import { IconButton, Image } from 'components';
import { styles } from './LicenseItem.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const LicenseItem: React.FunctionComponent<ILicenseItemProps> = ({ imageSrc, handleRemoveClick }) => {
	const classes = useStyles();

	return (
		<Box className={classes.content}>
			<Image className={classes.image} src={imageSrc} />
			<IconButton className={classes.iconButton} iconProps={{ iconName: 'trash', colorType: 'green' }} onClick={handleRemoveClick} />
		</Box>
	);
};
