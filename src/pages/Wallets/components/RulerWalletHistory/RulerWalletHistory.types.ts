export interface IRulerWalletHistoryProps {
	date: string;
	time: string;
	description: string;
	hash: string;
	type: 'send' | 'receive';
	amount: string;
}
