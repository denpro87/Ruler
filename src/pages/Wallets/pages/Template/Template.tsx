import { Box, InputAdornment, MenuItem, makeStyles } from '@material-ui/core';
import { GreenButton, IconButton, Page, Select, TextField } from 'components';
import { ITemplateProps } from './Template.types';
import { paymentMethodTypes, walletTypes } from '../../Wallets.data';
import { styles } from './Template.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
const useStyles = makeStyles(styles);

export const Template: React.FunctionComponent<ITemplateProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const params: any = props.location.state;
	const [walletType, setWalletType] = React.useState<string>(params?.data?.walletType ? params.data.walletType : '');
	const [paymentMethodType, setPaymentMethodType] = React.useState<string>(params?.data?.paymentType ? params.data.paymentType : '');
	const [amount, setAmount] = React.useState<string>(params?.data?.amount ? params.data.amount : '');
	const [templateName, setTemplateName] = React.useState<string>(
		params?.data?.templateName ? formatMessage({ id: params.data.templateName }) : ''
	);

	const handleWalletTypeChange = (event: React.ChangeEvent<{ name?: string | undefined; value: string }>): void =>
		setWalletType(event.target.value);

	const handlePaymentMethodTypeChange = (event: React.ChangeEvent<{ name?: string | undefined; value: string }>): void =>
		setPaymentMethodType(event.target.value);

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => setAmount(event.target.value);

	const handleTemplateChange = (event: React.ChangeEvent<HTMLInputElement>): void => setTemplateName(event.target.value);

	const handleTrashClick = (): void => {
		console.log('remove');
	};

	const handleSaveClick = (): void => history.push('/wallets');

	return (
		<Page
			title={formatMessage({ id: 'wallets.template.title' })}
			headerLink={
				<IconButton className={classes.trashIcon} iconProps={{ iconName: 'trash', colorType: 'green' }} onClick={handleTrashClick} />
			}
			titleSize="medium"
		>
			<Box className={classes.templateWrapper}>
				<TextField
					name="templateName"
					label={formatMessage({ id: 'wallets.template.helper_text.payment_template' })}
					value={templateName}
					onValueChange={handleTemplateChange}
				/>
				<TextField
					name="insertAmount"
					type="number"
					className={classes.textField}
					label={formatMessage({ id: 'wallets.add_funds.helper_text.amount_description' })}
					value={amount}
					onValueChange={handleAmountChange}
					inputProps={{
						startAdornment: <InputAdornment position="start">€</InputAdornment>
					}}
				/>
				<Select
					name="rulerToken"
					className={classes.textField}
					label={formatMessage({ id: 'wallets.template.helper_text.from_wallet_card' })}
					value={walletType}
					onValueChange={handleWalletTypeChange}
				>
					{walletTypes.map(type => (
						<MenuItem key={type.value} className={classes.selectItem} value={type.value}>
							{formatMessage({ id: type.label })}
						</MenuItem>
					))}
				</Select>
				<Select
					className={classes.textField}
					name="paymentMethod"
					label={formatMessage({ id: 'wallets.template.helper_text.to_wallet_card' })}
					value={paymentMethodType}
					onValueChange={handlePaymentMethodTypeChange}
				>
					{paymentMethodTypes.map(type => (
						<MenuItem key={type.value} className={classes.selectItem} value={type.value}>
							{formatMessage({ id: type.label })}
						</MenuItem>
					))}
				</Select>
			</Box>
			<GreenButton className={classes.saveButton} iconName="well-done-checked" compact onClick={handleSaveClick}>
				{formatMessage({ id: 'button.save_changes' })}
			</GreenButton>
		</Page>
	);
};
