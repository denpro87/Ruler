import { AppContext } from 'providers/State';
import { ColoredButtonProps, IButtonProps } from './Button.types';
import { IIconProps, Icon } from 'components';
import { Button as MuiButton } from '@material-ui/core';
import { getColorFromColorType } from './getColorFromColorType';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Button.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export const Button: React.FunctionComponent<IButtonProps> = ({
	colorType,
	textColor,
	backgroundColor,
	hoveredTextColor,
	hoveredBackgroundColor,
	pressedTextColor,
	pressedBackgroundColor,
	disabledTextColor = textColor,
	disabledBackgroundColor,
	href,
	iconPosition,
	iconName,
	iconProps = {},
	compact,
	children,
	className,
	...restProps
}) => {
	iconProps = Object.assign({}, iconProps, { iconName }) as IIconProps;
	const hasIcon = iconProps?.iconName;
	const { state } = React.useContext(AppContext);
	const tempTextColor = textColor ?? getColorFromColorType(colorType!, 'text', state.settings.isDarkMode);
	const tempBackgroundColor = backgroundColor ?? getColorFromColorType(colorType!, 'background', state.settings.isDarkMode);
	const tempHoveredBackgroundColor =
		hoveredBackgroundColor ?? (getColorFromColorType(colorType!, 'hoveredBackground', state.settings.isDarkMode) || tempBackgroundColor);

	const classes = useStyles({
		hasIcon,
		compact,
		textColor: tempTextColor,
		backgroundColor: tempBackgroundColor,
		hoveredTextColor: hoveredTextColor ?? getColorFromColorType(colorType!, 'text', state.settings.isDarkMode),
		hoveredBackgroundColor: tempHoveredBackgroundColor,
		pressedTextColor: pressedTextColor ?? getColorFromColorType(colorType!, 'text', state.settings.isDarkMode),
		pressedBackgroundColor:
			pressedBackgroundColor ??
			(getColorFromColorType(colorType!, 'hoveredBackground', state.settings.isDarkMode) || tempHoveredBackgroundColor),
		disabledTextColor: disabledTextColor ?? tempTextColor,
		disabledBackgroundColor:
			disabledBackgroundColor ??
			(getColorFromColorType(colorType!, 'disabledBackground', state.settings.isDarkMode) || tempBackgroundColor),
		isDarkMode: state.settings.isDarkMode
	});

	return (
		<MuiButton
			classes={{ root: classes.button, label: classes.buttonLabel }}
			className={className}
			disableElevation
			size="medium"
			variant="contained"
			href={href}
			{...restProps}
		>
			{hasIcon && iconPosition !== 'right' && <Icon {...iconProps} />}
			<span className={classes.buttonText}>{children}</span>
			{hasIcon && iconPosition === 'right' && <Icon {...iconProps} />}
		</MuiButton>
	);
};

Button.defaultProps = {
	colorType: 'default',
	fullWidth: true
};

export const BlackButton: React.FunctionComponent<ColoredButtonProps> = props => <Button colorType="black" {...props} />;

export const GreenButton: React.FunctionComponent<ColoredButtonProps> = props => <Button colorType="green" {...props} />;

export const LightGreenButton: React.FunctionComponent<ColoredButtonProps> = props => <Button colorType="lightGreen" {...props} />;
