import { Box, makeStyles } from '@material-ui/core';
import { Button, Dialog, Icon, IconButton, Page, Text } from 'components';
import { CameraResultType, Plugins } from '@capacitor/core';
import { IonImg } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './AddDriverLicence.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

const { Camera } = Plugins;

export const AddDriveLicence: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [frontPhoto, setFrontPhoto] = React.useState('');
	const [backPhoto, setBackPhoto] = React.useState('');
	const [isSubmitDisabled, setSubmitDisabled] = React.useState(true);
	const [isSubmitSuccessModal, setSubmitSuccessModal] = React.useState(false);
	const { formatMessage } = useIntl();

	React.useEffect(() => {
		defineCustomElements(window);
	}, []);
	React.useEffect(() => {
		if (frontPhoto && backPhoto) {
			setSubmitDisabled(false);
		}
	}, [frontPhoto, backPhoto]);

	const takePhoto = async (type: 'front' | 'back') => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri
		});
		const imageUrl = image.webPath ?? '';

		if (type === 'front') setFrontPhoto(imageUrl);
		else setBackPhoto(imageUrl);
	};

	const removePhoto = (type: 'front' | 'back') => {
		setSubmitDisabled(true);

		if (type === 'front') setFrontPhoto('');
		else setBackPhoto('');
	};

	const submit = () => setSubmitSuccessModal(true);

	const handleDialogClose = () => {
		setSubmitSuccessModal(false);
		history.push('/driver-licence', { data: [frontPhoto], state: 'progress' });
	};

	return (
		<Page title={formatMessage({ id: 'driver-licence.title' })} titleSize="large">
			<Text className={classes.description}>{formatMessage({ id: 'driver-licence.description' })}</Text>
			<Box className={classes.buttonContainer}>
				<Box className={classes.cardBox}>
					<Box className={classes.photoAspectRatioBox}>
						<Box className={classes.photoAspectRatioBoxInside}>
							{frontPhoto ? (
								<Box className={classes.cardImageContainer}>
									<IonImg className={classes.cardImage} src={frontPhoto}></IonImg>
									<Box className={classes.imageCover}>
										<Icon iconName="well-done-checked" color="#ffffff" />
										<Text className={classes.cardText} color="#ffffff">
											{formatMessage({ id: 'driver-licence.front_side' })}
										</Text>
									</Box>
									<IconButton className={classes.closeIcon} onClick={() => removePhoto('front')} iconName="close" />
								</Box>
							) : (
								<Box className={classes.cardButton} onClick={() => takePhoto('front')}>
									<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
									<Text className={classes.cardText}>{formatMessage({ id: 'driver-licence.front_side' })}</Text>
								</Box>
							)}
						</Box>
					</Box>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.driver.photograph' })}</Text>
				</Box>
				<Box className={classes.cardBox}>
					<Box className={classes.photoAspectRatioBox}>
						<Box className={classes.photoAspectRatioBoxInside}>
							{backPhoto ? (
								<Box className={classes.cardImageContainer}>
									<IonImg className={classes.cardImage} src={backPhoto}></IonImg>
									<Box className={classes.imageCover}>
										<Icon iconName="well-done-checked" color="#ffffff" />
										<Text className={classes.cardText} color="#ffffff">
											{formatMessage({ id: 'driver-licence.back_side' })}
										</Text>
									</Box>
									<IconButton className={classes.closeIcon} onClick={() => removePhoto('back')} iconName="close" />
								</Box>
							) : (
								<Box className={classes.cardButton} onClick={() => takePhoto('back')}>
									<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
									<Text className={classes.cardText}>{formatMessage({ id: 'driver-licence.back_side' })}</Text>
								</Box>
							)}
						</Box>
					</Box>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.vehicle.info' })}s</Text>
				</Box>
			</Box>
			<Box className={classes.footer}>
				<Button
					fullWidth
					iconName="submit-report"
					compact
					className={classes.submitButton}
					disabled={isSubmitDisabled}
					onClick={() => submit()}
				>
					{formatMessage({ id: 'driver-licence.submit_for_validation' })}
				</Button>
				<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.submit.description' })}</Text>
			</Box>
			<Dialog
				title={formatMessage({ id: 'driver-licence.submit_success.dialog.title' })}
				open={isSubmitSuccessModal}
				hasClose={true}
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'driver-licence.submit_success.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
