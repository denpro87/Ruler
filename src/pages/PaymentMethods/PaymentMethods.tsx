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
	const [data, setData] = React.useState<string[]>([]);
	const [deleteCard, setDeleteCard] = React.useState(false);
	const [isFirstLoading, setFirstLoading] = React.useState(true);
	const classes = useStyles();

	React.useEffect(() => {
		const params: any = props.location.state;
		const urls = params && params.data ? params.data : null;

		if (urls) setData(urls);
		setFirstLoading(false);
	}, [props.location.state]);

	React.useEffect(() => {
		if (!isFirstLoading && data.length === 0) history.push('/payment-methods/add-payment-method');
	}, [data, history, isFirstLoading]);

	const handleRemoveClick = (): void => {
		setDeleteCard(true);
	};

	const handleDeleteCard = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setData([]);
		setDeleteCard(false);
	};

	const handleDeleteCardClose = () => {
		setDeleteCard(false);
	};

	return (
		<Page
			title={formatMessage({ id: 'payment_methods.title' })}
			titleSize="large"
			headerLink={formatMessage({ id: 'payment_methods.text.wallet' })}
			headerLinkProps={{ href: '/wallets' }}
		>
			<Box className={classes.submitWrapper}>
				{data?.map((item: string, index: number) => (
					<PaymentMethodItem key={index} handleRemoveClick={(): void => handleRemoveClick()} />
				))}
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
