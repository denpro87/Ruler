import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, Text } from 'components';
import { styles } from './CreateWallet.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';

import descriptionImage from '../../images/create-wallet.svg';
const useStyles = makeStyles(styles);

export const CreateWalletDescription: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const history = useHistory();

	return (
		<Page
			title={formatMessage({ id: 'wallets.create_wallet.title' })}
			className={classes.page}
			titleSize="medium"
			noHorizontalContentPadding
		>
			<Text className={classes.description}>{formatMessage({ id: 'wallets.create_wallet.description' })}</Text>
			<Box className={classes.descriptionContent}>
				<Box className={classes.descriptionImageWrapper}>
					<img alt="description" src={descriptionImage} className={classes.descriptionImage} />
				</Box>
			</Box>
			<Box className={classes.footer}>
				<GreenButton className={classes.nextButton} onClick={() => history.push('/wallets/create-wallet-store')}>
					{formatMessage({ id: 'button.next' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
