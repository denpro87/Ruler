import { Box, makeStyles } from '@material-ui/core';
import { Button, Dialog, GreenButton, Icon, IconButton, LightGreenButton, Link, Page, Text } from 'components';
import { ITemplateDataProps } from './pages/Template/Template.types';
import { IWalletsProps } from './Wallets.types';
import { styles } from './Wallets.styles';
import { templateData } from './Wallets.data';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Fab from '@material-ui/core/Fab';
import React from 'react';

const useStyles = makeStyles(styles);

export const Wallets: React.FunctionComponent<IWalletsProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	React.useEffect(() => {
		const params: any = props.location.state;
		const showDialog = params && params.showDialog ? params.showDialog : false;
		setShowDialog(showDialog);
	}, [props.location.state]);

	const handleCreateWallet = () => history.push('/wallets/create-wallet');

	const handleAddFunds = () => history.push('/wallets/add-funds');

	const handleTransfer = () => history.push('/wallets/transfer');

	const handleTemplate = () => history.push('/wallets/template');

	const handleTemplateClick = (template: ITemplateDataProps) => history.push('/wallets/template', { data: template });

	const handleDialogClose = () => {
		setShowDialog(false);
		history.replace('/wallets');
	};

	return (
		<Page title={formatMessage({ id: 'wallets.title' })} titleSize="large" headerLink="Payment methods" noHorizontalContentPadding>
			<Box className={classes.walletsLogoContainer}>
				<Box className={classes.walletsLogo}>
					<IconButton iconProps={{ iconName: 'trash', color: '#ffffff' }} className={classes.trashIcon} />
					<Link className={classes.rulerWalletText} href="/wallets/ruler-wallet">
						{formatMessage({ id: 'wallets.logo_title' })}
					</Link>
					<Text className={classes.rulerPriceText}>€ 110 = 250 Ruler</Text>
					<Text className={classes.rulerNumberText}>0 Ruler</Text>
				</Box>
			</Box>
			<Box className={classes.paymentTemplateContainer}>
				<Text className={classes.paymentTemplateText}>{formatMessage({ id: 'wallets.payment_templates' })}</Text>
				<Box className={classes.TemplateButtonsWrapper}>
					<Fab aria-label="add" className={classes.addFabButton} onClick={handleTemplate}>
						<Icon iconName="add-without-circle" primaryColor="white" secondaryColor="white" />
					</Fab>
					{templateData.map((template, index) => (
						<Button
							key={index}
							fullWidth={false}
							className={classes.paymentTemplateButton}
							compact
							iconName="edit"
							iconPosition="right"
							onClick={() => handleTemplateClick(template)}
						>
							{formatMessage({ id: template.templateName })}
						</Button>
					))}
				</Box>
			</Box>
			<Box className={classes.footer}>
				<Box className={classes.buttonWrapper}>
					<LightGreenButton compact iconName="add" onClick={handleCreateWallet}>
						{formatMessage({ id: 'wallets.add_wallet' })}
					</LightGreenButton>
					<LightGreenButton compact iconName="transfer" onClick={handleTransfer}>
						{formatMessage({ id: 'wallets.transfer' })}
					</LightGreenButton>
				</Box>
				<GreenButton compact iconName="wallet" onClick={handleAddFunds}>
					{formatMessage({ id: 'wallets.add_funds' })}
				</GreenButton>
			</Box>
			<Dialog
				open={showDialog}
				hasClose
				illustrationName="superman"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.create_wallet.dialog.title' })}
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'wallets.create_wallet.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
