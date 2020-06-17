import { Box, makeStyles } from '@material-ui/core';
import { IPaymentMethodItemProps } from './PaymentMethodItem.types';
import { IconButton, Link, Text } from 'components';
import { styles } from './PaymentMethodItem.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const PaymentMethodItem: React.FunctionComponent<IPaymentMethodItemProps> = ({ handleShowClick, handleRemoveClick, cardData }) => {
	const classes = useStyles();

	return (
		<Box className={classes.paymentMethodItemContainer}>
			<Box className={classes.paymentMethodItem}>
				<IconButton iconProps={{ iconName: 'white-trash', color: '#ffffff' }} className={classes.trashIcon} onClick={handleRemoveClick} />
				<Link className={classes.cardTypeText} onClick={handleShowClick}>
					MasterCard
				</Link>
				<Text className={classes.cardNumberText}>{cardData.cardNumber}</Text>
			</Box>
		</Box>
	);
};
