import { BlackButton, Dialog, GreenButton, Page } from 'components';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { IPaymentMethodsProps } from './PaymentMethods.types';
import { PaymentMethodItem } from './components';
import { styles } from './PaymentMethods.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

export const PaymentMethods: React.FunctionComponent<IPaymentMethodsProps> = props => {
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [cardData, setCardData] = React.useState<object[]>([]);
	const [deleteCard, setDeleteCard] = React.useState(false);
	const [from, setFrom] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(-1);
	const classes = useStyles();
	React.useEffect(() => {
		const params: any = props.location.state;
		const data = params && params.data ? params.data : null;
		const index = params && params.index > -1 ? params.index : null;
		const from = params && params.from;
		setFrom(from);

		if (data) {
			if (index !== null) {
				const temp = cardData;
				temp.splice(index, 1, data);
				setCardData([...temp]);
			} else {
				setCardData(prevData => [...prevData, data]);
			}
		}
	}, [props.location.state]);

	const handleTrashButtonClick = (index: number) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		setDeleteCard(true);
		setSelectedIndex(index);
	};

	const handleDeleteCard = (): void => {
		const temp = cardData;
		temp.splice(selectedIndex, 1);
		setCardData([...temp]);
		setDeleteCard(false);
	};

	const handleDeleteCardClose = (): void => {
		setDeleteCard(false);
	};

	const handleItemClick = (selectedIndex: number, cardData: any) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		history.push('/payment-methods/add-payment-method/card', { data: cardData, index: selectedIndex });
	};

	const handleLinkClick = (): void => {
		history.push('/wallets', { from: true });
	};

	return (
		<Page
			title={formatMessage({ id: 'payment_methods.title' })}
			titleSize="large"
			headerLink={formatMessage({ id: 'payment_methods.text.wallet' })}
			headerLinkProps={{ onClick: handleLinkClick }}
			mainPage
			from={from}
		>
			<Box className={classes.submitWrapper}>
				{cardData !== undefined &&
					cardData.map(
						(data: any, index: number): JSX.Element => {
							return (
								<PaymentMethodItem
									key={index}
									cardData={data}
									handleShowClick={handleItemClick(index, data)}
									handleRemoveClick={handleTrashButtonClick(index)}
								/>
							);
						}
					)}
				<GreenButton
					iconName="add"
					className={classes.addPaymentMethodButton}
					compact
					onClick={(): void => history.push('/payment-methods/add-payment-method')}
				>
					{formatMessage({ id: 'button.add_payment_method' })}
				</GreenButton>
			</Box>
			<Dialog
				title={formatMessage({ id: 'payment_methods.delete_card_dialog.title' })}
				open={deleteCard}
				hasClose
				illustrationName="question"
				onClose={handleDeleteCardClose}
				aria-labelledby="form-dialog-title"
			>
				<Typography className={classes.dialogContentText}>
					{formatMessage({ id: 'payment_methods.delete_card_dialog.description' })}
				</Typography>
				<BlackButton onClick={handleDeleteCard} className={classes.notRecommendedButton}>
					{formatMessage({ id: 'payment_methods.delete_card_dialog.delete_card' })}
				</BlackButton>
			</Dialog>
		</Page>
	);
};
