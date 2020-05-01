import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page } from 'components';
import { IQrCodeProps } from './QrCode.types';
import { styles } from './QrCode.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const QRCode = require('qrcode-react');

const useStyles = makeStyles(styles);

export const QrCode: React.FunctionComponent<IQrCodeProps> = props => {
	const classes = useStyles();
	const params: any = props.location.state;
	const walletAddress = params?.walletAddress ? params.walletAddress : '';
	const { formatMessage } = useIntl();

	const handleShareClick = (): void => {};

	return (
		<Page title={formatMessage({ id: 'wallets.qr_code.title' })} titleSize="medium">
			<Box className={classes.qrCodeWrapper}>
				<QRCode value={walletAddress} size={220} />
			</Box>
			<GreenButton className={classes.shareButton} iconName="share" compact onClick={handleShareClick}>
				{formatMessage({ id: 'button.share' })}
			</GreenButton>
		</Page>
	);
};
