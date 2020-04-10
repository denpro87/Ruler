import { Box, Typography, makeStyles } from '@material-ui/core';
import { GreenIcon, Text } from 'components';
import { ILanguageItemProps } from './LanguageItem.types';
import { styles } from './LanguageItem.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const LanguageItem: React.FunctionComponent<ILanguageItemProps> = ({ title, text, selected, onClick, code }) => {
	const classes = useStyles();

	return (
		<Box
			className={classes.provider}
			onClick={(event: React.MouseEvent<HTMLElement>): void => {
				event.preventDefault();
				onClick?.(event, code);
			}}
		>
			<Box className={classes.li}>
				<Text className={classes.langTitle} block>
					{title}
				</Text>
				<Text className={classes.exampleTxt} block>
					{text}
				</Text>
				{selected && <GreenIcon className={classes.selectedIcon} iconName="well-done-checked" />}
			</Box>
		</Box>
	);
};
