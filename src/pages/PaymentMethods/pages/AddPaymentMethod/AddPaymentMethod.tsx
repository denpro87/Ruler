import { GreenButton, Icon, Page } from 'components';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { paymentMethodTypes } from '../../PaymentMethods.data';
import { styles } from './AddPaymentMethod.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const AddPaymentMethod: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [selectedTypeIndex, setSelectedTypeIndex] = React.useState(-1);
	const history = useHistory();

	return (
		<Page title={formatMessage({ id: 'payment_methods.add_payment_method.title' })} titleSize="medium">
			<List className={classes.paymentMethodItemList}>
				{paymentMethodTypes.map((paymentMethodType, index) => (
					<ListItem
						key={index}
						className={clsx({ [classes.listItem]: true }, { [classes.activeListItem]: index === selectedTypeIndex })}
						button
						onClick={() => setSelectedTypeIndex(index)}
					>
						<ListItemIcon>
							<Icon iconName={paymentMethodType.iconName} color="#181c19" colorType="black" />
						</ListItemIcon>
						<ListItemText primary={formatMessage({ id: paymentMethodType.buttonText })} />
					</ListItem>
				))}
			</List>
			<GreenButton
				className={classes.addPaymentMethodButton}
				disabled={selectedTypeIndex < 0}
				onClick={(): void => {
					selectedTypeIndex === 0 && history.push('/payment-methods/add-payment-method/card');
				}}
			>
				{formatMessage({ id: 'button.next' })}
			</GreenButton>
		</Page>
	);
};
