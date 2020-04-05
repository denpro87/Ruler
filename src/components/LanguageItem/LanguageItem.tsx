import { Box, Typography, makeStyles } from '@material-ui/core';
import { ILanguageItemProps } from './LanguageItem.types';
import { Icon, IconName } from 'components';
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
				<Typography variant="h6">{title}</Typography>
				<Typography variant="caption">{text}</Typography>
				{selected && <Icon iconName={IconName.WellDone} />}
			</Box>
		</Box>
	);
};
