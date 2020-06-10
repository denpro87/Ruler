import { GreenButton, Icon, Page } from 'components';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { createWalletTypes } from '../../Wallets.data';
import { styles } from './CreateWallet.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const CreateWallet: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [selectedTypeIndex, setSelectedTypeIndex] = React.useState(-1);
	const history = useHistory();

	return (
		<Page title={formatMessage({ id: 'wallets.create_wallet.title' })} titleSize="medium">
			<List className={classes.walletItemList}>
				{createWalletTypes.map((createWalletType, index) => (
					<ListItem
						key={index}
						className={clsx({ [classes.listItem]: true }, { [classes.activeListItem]: index === selectedTypeIndex })}
						button
						onClick={(): void => setSelectedTypeIndex(index)}
					>
						<ListItemIcon>
							<Icon iconName={createWalletType.iconName} color="#181c19" />
						</ListItemIcon>
						<ListItemText primary={formatMessage({ id: createWalletType.buttonText })} />
					</ListItem>
				))}
			</List>
			<GreenButton
				className={classes.nextButton}
				disabled={selectedTypeIndex < 0}
				onClick={(): void => history.push('/wallets/create-wallet-description')}
			>
				{formatMessage({ id: 'button.next' })}
			</GreenButton>
		</Page>
	);
};
