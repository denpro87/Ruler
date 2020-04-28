import { IOptionType, IRulerPriceBonusProps } from './AddFunds.types';

export const rulerPriceBonusData: Array<IRulerPriceBonusProps> = [
	{
		rulerPrice: '€ 5',
		rulerBonus: '+15%'
	},
	{
		rulerPrice: '€ 10',
		rulerBonus: '+20%'
	},
	{
		rulerPrice: '€ 15',
		rulerBonus: '+25%'
	}
];
export const walletTypes: Array<IOptionType> = [
	{
		value: 'ruler_token',
		label: 'wallets.create_wallet.ruler_token'
	},
	{
		value: 'ethereum',
		label: 'wallets.create_wallet.ethereum'
	},
	{
		value: 'bitcoin',
		label: 'wallets.create_wallet.bitcoin'
	},
	{
		value: 'bnb_token',
		label: 'wallets.create_wallet.bnb_token'
	}
];
export const paymentMethodTypes: Array<IOptionType> = [
	{
		value: 'credit_card',
		label: 'wallets.add_funds.credit_card'
	},
	{
		value: 'paypal',
		label: 'wallets.add_funds.paypal'
	}
];
