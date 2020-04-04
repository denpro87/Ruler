import { DEFAULT_ICON_SIZE, getColorFromColorType, styles } from './Icon.styles';
import { IIconProps } from './Icon.types';
import { ReactSVG } from 'react-svg';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(styles);

export const Icon: React.FC<IIconProps> = ({
	iconName,
	colorType,
	size,
	width = size,
	height = size,
	color,
	fillColor,
	strokeColor,
	primaryColor = getColorFromColorType(colorType!, 'primary'),
	primaryFillColor,
	primaryStrokeColor,
	secondaryColor = getColorFromColorType(colorType!, 'secondary'),
	secondaryFillColor,
	secondaryStrokeColor
}) => {
	const classes = useStyles({
		width,
		height,
		color,
		fillColor,
		strokeColor,
		primaryColor,
		primaryFillColor,
		primaryStrokeColor,
		secondaryColor,
		secondaryFillColor,
		secondaryStrokeColor
	});
	const [iconPath, setIconPath] = React.useState<string>('');

	import(`./icons/${iconName.trim().toLowerCase()}-icon.svg`).then(({ default: iconPath }) => setIconPath(iconPath));

	return <ReactSVG wrapper="div" className={classes.icon} src={iconPath} />;
};

Icon.defaultProps = {
	size: DEFAULT_ICON_SIZE,
	colorType: 'default'
};
