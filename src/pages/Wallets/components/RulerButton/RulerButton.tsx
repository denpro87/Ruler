import { Button, Text } from 'components';
import { IRulerButtonProps } from './RulerButton.types';
import { makeStyles } from '@material-ui/core';
import { styles } from './RulerButton.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const RulerButton: React.FunctionComponent<IRulerButtonProps> = props => {
	const classes = useStyles({ active: props.active });

	return (
		<Button className={classes.button} onClick={() => props.onRulerButtonClick(props.price)}>
			<Text className={classes.priceText}>{props.price}</Text>
			<Text className={classes.percentText}>{props.bonus}</Text>
		</Button>
	);
};
