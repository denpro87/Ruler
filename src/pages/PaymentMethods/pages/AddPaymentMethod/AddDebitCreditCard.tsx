import { Box, makeStyles } from '@material-ui/core';
import { Checkbox, GreenButton, Page, TextField } from 'components';
import { IAddPaymentMethodProps, ICreditCardProps } from './AddPaymentMethod.types';
import { styles } from './AddPaymentMethod.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { validateNumber } from 'utils';
import React from 'react';

const useStyles = makeStyles(styles);
const initialCardState: ICreditCardProps = {
	name: '',
	cardNumber: '',
	expireDate: '',
	cvc: '',
	cardCountry: '',
	zipCode: '',
	cardNumberValid: true,
	zipCodeValid: true
};

export const AddDebitCreditCard: React.FunctionComponent<IAddPaymentMethodProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [cardState, setCardState] = React.useState<ICreditCardProps>(initialCardState);
	const [checked, setChecked] = React.useState<boolean>(false);
	const [pageName, setPageName] = React.useState('');
	const [selectedIndex, setSelectedIndex] = React.useState(-1);

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();

		if (event.target.name === 'cardNumber') {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
				cardNumberValid: validateNumber(event.target.value)
			}));
		} else if (event.target.name === 'zipCode') {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
				zipCodeValid: validateNumber(event.target.value)
			}));
		} else {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value
			}));
		}
	};

	const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setChecked(event.target.checked);
	};

	const handleNextClick = (): void => {
		setCardState(initialCardState);

		if (pageName) {
			// history.push('/home', { showVehicleRide: true, data: cardState, index: selectedIndex });
			history.push('/home', { data: cardState, index: selectedIndex });
		} else {
			history.push('/payment-methods', { data: cardState, index: selectedIndex });
		}
	};
	React.useEffect(() => {
		const params: any = props.location.state;
		const pageName = params && params.pageName ? params.pageName : null;
		const data = params && params.data ? params.data : null;
		const index = params && params.index > -1 ? params.index : null;

		if (pageName) setPageName(pageName);

		if (data !== null) {
			setCardState(data);
		} else {
			setCardState(initialCardState);
		}

		if (index !== null) {
			setSelectedIndex(index);
		} else {
			setSelectedIndex(-1);
		}
	}, [props.location.state]);

	return (
		<Page title={formatMessage({ id: 'payment_methods.add_payment_method.card' })} titleSize="medium">
			<Box className={classes.cardInputWrapper}>
				<TextField
					name="name"
					label={formatMessage({ id: 'wallets.add_credit_card.card_owner_name' })}
					value={cardState.name}
					onValueChange={handleStateChange}
				/>
				<TextField
					name="cardNumber"
					error={!cardState.cardNumberValid}
					helperText={!cardState.cardNumberValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
					label={formatMessage({ id: 'wallets.add_credit_card.card_number' })}
					value={cardState.cardNumber}
					onValueChange={handleStateChange}
				/>
				<Box className={classes.cardCredentialWrapper}>
					<TextField name="expireDate" label="MM / YY" value={cardState.expireDate} onValueChange={handleStateChange} />
					<TextField
						name="cvc"
						label={formatMessage({ id: 'wallets.add_credit_card.cvc' })}
						value={cardState.cvc}
						onValueChange={handleStateChange}
					/>
				</Box>
				<TextField
					name="cardCountry"
					label={formatMessage({ id: 'wallets.add_credit_card.card_country' })}
					value={cardState.cardCountry}
					onValueChange={handleStateChange}
				/>
				<TextField
					name="zipCode"
					error={!cardState.zipCodeValid}
					helperText={!cardState.zipCodeValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
					label={formatMessage({ id: 'wallets.add_credit_card.zip_code' })}
					value={cardState.zipCode}
					onValueChange={handleStateChange}
				/>
			</Box>
			<Box className={classes.footer}>
				<Checkbox
					checked={checked}
					label={formatMessage({ id: 'wallets.add_credit_card.save_payment_method' })}
					onValueChange={handleCheckChange}
				/>
				<GreenButton
					iconName="add"
					compact
					onClick={handleNextClick}
					disabled={
						!cardState.name ||
						!cardState.cardNumber ||
						!cardState.expireDate ||
						!cardState.cvc ||
						!cardState.cardCountry ||
						!cardState.zipCode ||
						!cardState.cardNumberValid ||
						!cardState.zipCodeValid
					}
				>
					{formatMessage({ id: 'button.add_payment_method' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
