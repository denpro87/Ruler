import { Box, InputAdornment, MenuItem, makeStyles } from '@material-ui/core';
import { Button, GreenButton, IconButton, Page, Select, Text, TextField } from 'components';
import { ITemplateDataProps } from '../Template/Template.types';
import { RulerButton } from '../../components';
import { rulerPriceBonusData, templateData, walletTypes } from '../../Wallet.data';
import { styles } from './Transfer.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Transfer: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [walletType, setWalletType] = React.useState<string>('');
	const [amount, setAmount] = React.useState<string>('');
	const [walletAddress, setWalletAddress] = React.useState<string>('');
	const [templateName, setTemplateName] = React.useState<string>('');

	const handleWalletTypeChange = (event: React.ChangeEvent<{ name?: string | undefined; value: string }>): void => {
		setWalletType(event.target.value);
	};

	const handleRulerButtonClick = (amount: string): void => setAmount(amount);

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => setAmount(event.target.value);

	const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => setWalletAddress(event.target.value);

	const handleQrClick = (): void => {};

	const handleNextClick = (): void => {
		history.push('/wallets/add-funds/add-credit-card');
	};

	const handleTemplateClick = (template: ITemplateDataProps): void => {
		setTemplateName(template.templateName);
		setWalletType(template.walletType);
		setAmount(template.amount);
		setWalletAddress(template.walletAddress);
	};

	return (
		<Page title={formatMessage({ id: 'wallets.transfer.title' })} titleSize="medium">
			<Box className={classes.addFundsWrapper}>
				<Text className={classes.helperText}>{formatMessage({ id: 'wallets.payment_templates' })}</Text>
				<Box className={classes.TemplateButtonsWrapper}>
					{templateData.map((template, index) => (
						<Button
							className={clsx({ active: template.templateName === templateName })}
							key={index}
							onClick={() => handleTemplateClick(template)}
						>
							{formatMessage({ id: template.templateName })}
						</Button>
					))}
				</Box>
				<Select
					name="rulerToken"
					className={classes.walletType}
					label={formatMessage({ id: 'wallets.transfer.helper_text.wallet' })}
					value={walletType}
					onValueChange={handleWalletTypeChange}
				>
					{walletTypes.map(type => (
						<MenuItem key={type.value} className={classes.selectItem} value={type.value}>
							{formatMessage({ id: type.label })}
						</MenuItem>
					))}
				</Select>
				<Text className={clsx(classes.helperText, classes.textCenter)}>
					{formatMessage({ id: 'wallets.add_funds.helper_text.ruler_bonus' })}
				</Text>
				<Box className={classes.rulerPriceBonusButtonGroup}>
					{rulerPriceBonusData.map((data, index) => (
						<RulerButton
							key={index}
							price={data.rulerPrice}
							bonus={data.rulerBonus}
							active={data.rulerPrice === amount}
							onRulerButtonClick={handleRulerButtonClick}
						/>
					))}
				</Box>
				<TextField
					name="insertAmount"
					className={classes.insertAmount}
					label={formatMessage({ id: 'wallets.add_funds.helper_text.amount_description' })}
					inputProps={{
						startAdornment: <InputAdornment position="start">€</InputAdornment>
					}}
					value={amount}
					onValueChange={handleAmountChange}
				/>
				<TextField
					name="walletAddress"
					label={formatMessage({ id: 'wallets.transfer.wallet_address_description' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconProps={{ iconName: 'qr', secondaryColor: '#f8ca06' }} onClick={handleQrClick} />
							</InputAdornment>
						)
					}}
					value={walletAddress}
					onValueChange={handleWalletAddressChange}
				/>
			</Box>
			<GreenButton onClick={handleNextClick}>{formatMessage({ id: 'button.next' })}</GreenButton>
		</Page>
	);
};
