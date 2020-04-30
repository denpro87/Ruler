import { Box, makeStyles } from '@material-ui/core';
import { IconButton, LightGreenButton, Page, Text } from 'components';
import { styles } from './RulerWallet.styles';
import { useIntl } from 'react-intl';
import React from 'react';
import bgImage from '../../images/green-bg.svg';

const useStyles = makeStyles(styles);
const copy = require('clipboard-copy');

export const RulerWallet: React.FunctionComponent = () => {
	const classes = useStyles();
	const walletAddress = 'dsfsdfsdfsdfsdfsd';
	const { formatMessage } = useIntl();

	const handleCopyClick = () => copy(walletAddress);

	const handleSendClick = (): void => {
		console.log('send');
	};

	const handleReceiveClick = (): void => {
		console.log('receive');
	};

	const handleQrClick = (): void => {
		console.log('qr');
	};

	return (
		<Page pageHeaderClassName={classes.pageHeader} noHorizontalContentPadding>
			<Box className={classes.content}>
				<Box className={classes.headerWrapper}>
					<Box className={classes.imageWrapper}>
						<img alt="description" src={bgImage} className={classes.image} />
					</Box>
					<Box className={classes.titleWrapper}>
						<Text className={classes.titleText}>{formatMessage({ id: 'wallets.ruler_wallet.title' })}</Text>
						<IconButton iconProps={{ iconName: 'qr', color: '#00b559' }} onClick={handleQrClick} />
					</Box>
					<Box className={classes.headerContent}>
						<Text className={classes.headerHelperText}>{formatMessage({ id: 'wallets.ruler_wallet.balance' })}</Text>
						<Text className={classes.amountText}>€ 110</Text>
						<Text className={classes.headerHelperText}>{formatMessage({ id: 'wallets.ruler_wallet.wallet_address' })}</Text>
						<Box className={classes.addressWrapper}>
							<Text className={classes.addressText}>{walletAddress}</Text>
							<IconButton className={classes.copyButton} iconProps={{ iconName: 'copy', color: '#ffffff' }} onClick={handleCopyClick} />
						</Box>
					</Box>
				</Box>
				<Box className={classes.historyWrapper}>sdfds</Box>
				<Box className={classes.footer}>
					<LightGreenButton iconName="submit-report" compact onClick={handleSendClick}>
						send
					</LightGreenButton>
					<LightGreenButton iconName="receive" compact onClick={handleReceiveClick}>
						Receive
					</LightGreenButton>
				</Box>
			</Box>
		</Page>
	);
};
