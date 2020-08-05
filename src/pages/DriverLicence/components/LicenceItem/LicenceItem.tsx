import { Box, makeStyles } from '@material-ui/core';
import { ILicenceItemProps } from './LicenceItem.types';
import { IconButton, Image } from 'components';
import { AppContext } from 'providers/State';
import { styles } from './LicenceItem.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const LicenceItem: React.FunctionComponent<ILicenceItemProps> = ({ imageSrc, handleRemoveClick }) => {
	const { state } = React.useContext(AppContext);
	const classes = useStyles();

	return (
		<Box className={classes.content}>
			<Image className={classes.image} src={imageSrc} />
			<IconButton iconProps={{ iconName: 'trash', colorType: state.settings.isDarkMode ? 'white' : 'green' }} onClick={handleRemoveClick} />
		</Box>
	);
};
