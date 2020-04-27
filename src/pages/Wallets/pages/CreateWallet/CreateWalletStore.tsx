import { Box, makeStyles } from '@material-ui/core';
import { Button, GreenButton, Page, Text } from 'components';
import { createWalletWords } from './CreateWallet.data';
import { styles } from './CreateWallet.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';

const copy = require('clipboard-copy');
const useStyles = makeStyles(styles);

export const CreateWalletStore: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const history = useHistory();

	const handleCopyClick = () => {
		const wordsOrder = createWalletWords.join(',');
		copy(wordsOrder);
	};

	return (
		<Page title={formatMessage({ id: 'wallets.create_wallet.title' })} titleSize="medium" noHorizontalContentPadding>
			<Text className={classes.description}>{formatMessage({ id: 'wallets.create_wallet.store.description' })}</Text>
			<Box className={classes.wordWrapper}>
				{createWalletWords.map((createWalletWord, index) => (
					<Box key={index} className={classes.wordButton}>
						<Text className={classes.wordNumber}>{index + 1}.</Text>
						<Text className={classes.wordName}>{createWalletWord.toLowerCase()}</Text>
					</Box>
				))}
			</Box>
			<Button className={classes.copyButton} iconName="copy" compact fullWidth={false} onClick={handleCopyClick}>
				{formatMessage({ id: 'wallets.create_wallet.store.copy' })}
			</Button>
			<Box className={classes.footer}>
				<GreenButton className={classes.nextButton} onClick={() => history.push('/wallets/create-wallet-check')}>
					{formatMessage({ id: 'wallets.create_wallet.next' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
