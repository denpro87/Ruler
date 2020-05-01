import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import { Dialog, GreenButton, IconButton, Page, Text, TextField } from 'components';
import { IReceiveProps } from './Receive.types';
import { styles } from './Receive.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const QRCode = require('qrcode-react');

const useStyles = makeStyles(styles);

export const Receive: React.FunctionComponent<IReceiveProps> = props => {
	const classes = useStyles();
	const params: any = props.location.state;
	const walletAddress = params?.walletAddress ? params.walletAddress : '';
	const { formatMessage } = useIntl();
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	const [from, setFrom] = React.useState<string>('');
	const [amount, setAmount] = React.useState<string>('');

	const handleShareClick = (): void => {};

	const handleReceiveClick = (): void => {
		setShowDialog(true);
	};

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => setAmount(event.target.value);

	const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>): void => setFrom(event.target.value);

	const handleQrClick = (): void => {};

	const handleDialogClose = () => {
		setShowDialog(false);
	};

	return (
		<Page title={formatMessage({ id: 'wallets.qr_code.title' })} titleSize="medium">
			<Box className={classes.formWrapper}>
				<TextField
					name="from"
					className={classes.textField}
					label={formatMessage({ id: 'wallets.receive.receive_from' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconName="qr" onClick={handleQrClick} />
							</InputAdornment>
						)
					}}
					value={from}
					onValueChange={handleFromChange}
				/>
				<TextField
					name="amount"
					className={classes.textField}
					label={formatMessage({ id: 'wallets.receive.request_amount' })}
					inputProps={{
						startAdornment: <InputAdornment position="start">€</InputAdornment>
					}}
					value={amount}
					onValueChange={handleAmountChange}
				/>
				<GreenButton iconName="receive" compact disabled={!from || !amount} onClick={handleReceiveClick}>
					{formatMessage({ id: 'button.receive' })}
				</GreenButton>
			</Box>
			<Box className={classes.footer}>
				<Text className={classes.qrText}>{formatMessage({ id: 'wallets.receive.share_qr_code' })}</Text>
				<QRCode value={walletAddress} size={150} />
				<GreenButton iconName="share" compact onClick={handleShareClick}>
					{formatMessage({ id: 'button.share' })}
				</GreenButton>
			</Box>
			<Dialog
				open={showDialog}
				hasClose={true}
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.receive.dialog.title' })}
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'wallets.receive.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
