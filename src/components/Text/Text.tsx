import { ITextProps, ParagraphProps, TextStyles } from './Text.types';
import { makeStyles } from '@material-ui/core';
import { styles } from './Text.styles';
import React from 'react';
import clsx from 'clsx';

export const createTextStyles = (textStyles: TextStyles): TextStyles => textStyles;

export const Paragraph: React.FunctionComponent<ParagraphProps> = props => <Text component="p" block {...props} />;

export const Text: React.FunctionComponent<ITextProps> = React.memo(({ textStyles, ...restProps }) => {
	const props = { ...textStyles, ...restProps };
	const {
		component,
		componentProps,
		block,
		nowrap,
		fontStretch,
		fontStyle,
		fontVariant,
		fontWeight,
		fontSize,
		lineHeight,
		fontFamily,
		letterSpacing,
		color,
		inheritStyles,
		className,
		children
	} = props;

	const _makeStyles = React.useCallback((inheritStyles: boolean = false) => makeStyles(styles(inheritStyles)), [inheritStyles]);
	const useStyles = _makeStyles();

	const classes = useStyles({
		block,
		nowrap,
		fontStretch,
		fontStyle,
		fontVariant,
		fontWeight,
		fontSize,
		lineHeight,
		fontFamily,
		letterSpacing,
		color
	});
	const TextWrapper = component as string;

	return React.createElement(
		TextWrapper,
		{
			className: clsx(
				classes.text,
				{
					[classes.paragraph]: component === 'p'
				},
				className
			),
			...componentProps
		},
		children
	);
});

Text.defaultProps = {
	component: 'span'
};
