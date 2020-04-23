import { Box, makeStyles } from '@material-ui/core';
import { ILicenceItemProps } from './LicenceItem.types';
import { IconButton, Image } from 'components';
import { styles } from './LicenceItem.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const LicenceItem: React.FunctionComponent<ILicenceItemProps> = ({ imageSrc, handleRemoveClick }) => {
	const classes = useStyles();

	return (
		<Box className={classes.content}>
			<Image className={classes.image} src={imageSrc} />
			<IconButton className={classes.iconButton} iconProps={{ iconName: 'trash', colorType: 'green' }} onClick={handleRemoveClick} />
		</Box>
	);
};
