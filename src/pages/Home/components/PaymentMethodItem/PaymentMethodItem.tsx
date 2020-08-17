import { AppContext } from 'providers/State';
import { Box, makeStyles } from '@material-ui/core';
import { IPaymentMethodItemProps } from './PaymentMethodItem.types';
import { IconButton, Link, Text } from 'components';
import { styles } from './PaymentMethodItem.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const PaymentMethodItem: React.FunctionComponent<IPaymentMethodItemProps> = ({ handleShowClick, handleRemoveClick, cardData }) => {
	const {
		state: {
			settings: { isDarkMode }
		}
	} = React.useContext(AppContext);
	const classes = useStyles({ isDarkMode: isDarkMode });

	return (
		<Box className={classes.paymentMethodItemContainer}>
			<Box className={classes.paymentMethodItem}>
				<IconButton
					iconProps={{ iconName: 'white-trash', primaryColor: isDarkMode ? '#181c19' : '#fff' }}
					className={classes.trashIcon}
					onClick={handleRemoveClick}
				/>
				<Link className={classes.cardTypeText} onClick={handleShowClick}>
					MasterCard
				</Link>
				<Text className={classes.cardNumberText}>{cardData.cardNumber}</Text>
			</Box>
		</Box>
	);
};
