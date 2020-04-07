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
	textColor = getColorFromColorType(colorType!, 'text'),
	backgroundColor = getColorFromColorType(colorType!, 'background'),
	hoveredTextColor = textColor,
	hoveredBackgroundColor = getColorFromColorType(colorType!, 'hoveredBackground') || backgroundColor,
	pressedTextColor = hoveredTextColor,
	pressedBackgroundColor = hoveredBackgroundColor,
	disabledTextColor = textColor,
	disabledBackgroundColor = getColorFromColorType(colorType!, 'disabledBackground') || backgroundColor,
	href,
	iconName,
	iconProps = {},
	compact,
	children,
	className,
	...restProps
}) => {
	iconProps = Object.assign({}, iconProps, { iconName }) as IIconProps;
	const hasIcon = iconProps?.iconName;

	const classes = useStyles({
		hasIcon,
		compact,
		textColor,
		backgroundColor,
		hoveredTextColor,
		hoveredBackgroundColor,
		pressedTextColor,
		pressedBackgroundColor,
		disabledTextColor,
		disabledBackgroundColor
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
			{hasIcon && <Icon {...iconProps} />}
			<span className={classes.buttonText}>{children}</span>
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
