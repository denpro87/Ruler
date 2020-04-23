import { Box, Button, makeStyles } from '@material-ui/core';
import { CameraResultType, Plugins } from '@capacitor/core';
import { Dialog, Icon, IconButton, Page, Text } from 'components';
import { IonImg } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './AddDriverLicence.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(styles);

const { Camera } = Plugins;

export const AddDriveLicence: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [frontPhoto, setFrontPhoto] = useState('');
	const [backPhoto, setBackPhoto] = useState('');
	const [isSubmitDisabled, setSubmitDisabled] = useState(true);
	const [isSubmitSuccessModal, setSubmitSuccessModal] = useState(false);
	const { formatMessage } = useIntl();

	useEffect(() => {
		defineCustomElements(window);
	}, []);
	useEffect(() => {
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

	const submit = () => {
		setSubmitSuccessModal(true);
	};

	const handleDialogClose = () => {
		setSubmitSuccessModal(false);
		history.push('/driver-licence', { data: [frontPhoto], state: 'progress' });
	};

	return (
		<Page title={formatMessage({ id: 'driver-licence.title' })} titleSize="large">
			<Text className={classes.description}>{formatMessage({ id: 'driver-licence.description' })}</Text>
			<Box className={classes.buttonContainer}>
				{frontPhoto ? (
					<Box className={classes.cardBox}>
						<Box className={classes.cardImageContainer}>
							<IonImg className={classes.cardImage} src={frontPhoto}></IonImg>
							<Box className={classes.imageCover}>
								<Icon iconName="well-done-checked" color="#ffffff" />
								<Text className={classes.cardText} color="#ffffff">
									{formatMessage({ id: 'driver-licence.front.side' })}
								</Text>
							</Box>
							<IconButton className={classes.closeIcon} onClick={() => removePhoto('front')} iconName="close" />
						</Box>
						<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.driver.photograph' })}</Text>
					</Box>
				) : (
					<Box className={classes.cardBox} onClick={() => takePhoto('front')}>
						<Box className={classes.cardButton}>
							<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
							<Text className={classes.cardText}>{formatMessage({ id: 'driver-licence.front.side' })}</Text>
						</Box>
						<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.driver.photograph' })}</Text>
					</Box>
				)}
				{backPhoto ? (
					<Box className={classes.cardBox}>
						<Box className={classes.cardImageContainer}>
							<IonImg className={classes.cardImage} src={backPhoto}></IonImg>
							<Box className={classes.imageCover}>
								<Icon iconName="well-done-checked" color="#ffffff" />
								<Text className={classes.cardText} color="#ffffff">
									{formatMessage({ id: 'driver-licence.back.side' })}
								</Text>
							</Box>
							<IconButton className={classes.closeIcon} onClick={() => removePhoto('back')} iconName="close" />
						</Box>
						<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.vehicle.info' })}</Text>
					</Box>
				) : (
					<Box className={classes.cardBox} onClick={() => takePhoto('back')}>
						<Box className={classes.cardButton}>
							<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
							<Text className={classes.cardText}>{formatMessage({ id: 'driver-licence.back.side' })}</Text>
						</Box>
						<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.vehicle.info' })}s</Text>
					</Box>
				)}
			</Box>
			<Box className={classes.footer}>
				<Button fullWidth className={classes.submitButton} disabled={isSubmitDisabled} onClick={() => submit()}>
					<Icon className={classes.buttonIcon} iconName="submit-report"></Icon>
					{formatMessage({ id: 'driver-licence.submit.for.validation' })}
				</Button>
				<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.submit.description' })}</Text>
			</Box>
			<Dialog
				title={formatMessage({ id: 'driver-licence.submit-success.dialog.title' })}
				open={isSubmitSuccessModal}
				hasClose={true}
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'driver-licence.submit-success.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
