import { BottomSheet, Button, Dialog, Icon, IconButton, Page, Text } from 'components';
import { Box, makeStyles } from '@material-ui/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { IonImg } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './AddDriverLicencePhoto.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

const { Camera } = Plugins;

export const AddDriverLicencePhoto: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [frontPhoto, setFrontPhoto] = React.useState('');
	const [backPhoto, setBackPhoto] = React.useState('');
	const [photos, setPhotos] = React.useState(['']);
	const [isSubmitDisabled, setSubmitDisabled] = React.useState(true);
	const [isSubmitSuccessModal, setSubmitSuccessModal] = React.useState(false);
	const [showTakePhoto, setShowTakePhoto] = React.useState(false);
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
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera
		});
		const imageUrl = image.webPath ?? '';
		const imageGallery: string[] = [];

		if (type === 'front') setFrontPhoto(imageUrl);
		else setBackPhoto(imageUrl);
		imageGallery.push(imageUrl);
		setPhotos([...imageGallery]);
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

	const handleTakePhotoClick = (type: string) => {
		setShowTakePhoto(true);
	};

	const handleBottomSheetChange = (isOpen: boolean) => {
		setShowTakePhoto(isOpen);
	};

	return (
		<Box>
			<Box className={classes.buttonContainer}>
				<Box className={classes.cardBox}>
					<Box className={classes.photoAspectRatioBox}>
						<Box className={classes.photoAspectRatioBoxInside}>
							{frontPhoto ? (
								<Box className={classes.cardImageContainer}>
									<IonImg className={classes.cardImage} src={frontPhoto} />
									<Box className={classes.imageCover}>
										<Icon iconName="well-done-checked" color="#ffffff" />
										<Text className={classes.cardText} color="#ffffff">
											{formatMessage({ id: 'driver_licence.front_side' })}
										</Text>
									</Box>
									<IconButton className={classes.closeIcon} onClick={() => removePhoto('front')} iconName="close" />
								</Box>
							) : (
								// <Box className={classes.cardButton} onClick={() => takePhoto('front')}>
								<Box className={classes.cardButton} onClick={() => handleTakePhotoClick('front')}>
									<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
									<Text className={classes.cardText}>{formatMessage({ id: 'driver_licence.front_side' })}</Text>
								</Box>
							)}
						</Box>
					</Box>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver_licence.driver.photograph' })}</Text>
				</Box>
				<Box className={classes.cardBox}>
					<Box className={classes.photoAspectRatioBox}>
						<Box className={classes.photoAspectRatioBoxInside}>
							{backPhoto ? (
								<Box className={classes.cardImageContainer}>
									<IonImg className={classes.cardImage} src={backPhoto} />
									<Box className={classes.imageCover}>
										<Icon iconName="well-done-checked" color="#ffffff" />
										<Text className={classes.cardText} color="#ffffff">
											{formatMessage({ id: 'driver_licence.back_side' })}
										</Text>
									</Box>
									<IconButton className={classes.closeIcon} onClick={() => removePhoto('back')} iconName="close" />
								</Box>
							) : (
								// <Box className={classes.cardButton} onClick={() => takePhoto('back')}>
								<Box className={classes.cardButton} onClick={() => handleTakePhotoClick('back')}>
									<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
									<Text className={classes.cardText}>{formatMessage({ id: 'driver_licence.back_side' })}</Text>
								</Box>
							)}
						</Box>
					</Box>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver_licence.vehicle.info' })}s</Text>
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
					{formatMessage({ id: 'driver_licence.submit_for_validation' })}
				</Button>
				<Text className={classes.descriptionText}>{formatMessage({ id: 'driver_licence.submit.description' })}</Text>
			</Box>
			<Dialog
				title={formatMessage({ id: 'driver_licence.submit_success.dialog.title' })}
				open={isSubmitSuccessModal}
				hasClose
				illustrationName="sent"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'driver_licence.submit_success.dialog.description' })}</Text>
			</Dialog>
			<BottomSheet
				title={formatMessage({ id: 'driver_licence.front_side' })}
				description={formatMessage({ id: 'driver_licence.driver.photograph' })}
				open={showTakePhoto}
				darkMode
				onBottomSheetChange={handleBottomSheetChange}
			>
				<Box>
					<Box className={classes.driverLicencePhotoContainer}>
						<Box className={classes.driverLicencePhotoAspectRatioBox}>
							<Box className={classes.photoAspectRatioBoxInside}>
								{frontPhoto && (
									<Box className={classes.cardImageContainer}>
										<IonImg className={classes.cardImage} src={frontPhoto} />
										{/* <Box className={classes.imageCover}>
										<Icon iconName="well-done-checked" color="#ffffff" />
										<Text className={classes.cardText} color="#ffffff">
											{formatMessage({ id: 'driver_licence.front_side' })}
										</Text>
									</Box> */}
										<IconButton className={classes.closeIcon} onClick={() => removePhoto('front')} iconName="close" />
									</Box>
								)
								// : (
								// 	<Box className={classes.cardButton} onClick={() => takePhoto('front')}>
								// 		{/* <Box className={classes.cardButton} onClick={handleTakeFrontPhotoClick}> */}
								// 		<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
								// 		<Text className={classes.cardText}>{formatMessage({ id: 'driver_licence.front_side' })}</Text>
								// 	</Box>
								// )
								}
							</Box>
						</Box>
					</Box>
					<Box className={classes.footerContainer}>
						<Box className={classes.imageGallery}>
							{photos.map((photo, index) => {
								return <IonImg className={classes.takenImage} key={index} src={photo} />;
							})}
						</Box>
						<Box className={classes.iconButtonGroup}>
							<IconButton iconProps={{ iconName: 'trash', color: '#181c19' }} className={classes.leftRightIconButton} />
							<IconButton
								iconProps={{ iconName: 'photo', color: '#181c19' }}
								className={classes.midIconButton}
								onClick={() => takePhoto('front')}
							/>
							<IconButton iconProps={{ iconName: 'flashlight', color: '#181c19' }} className={classes.leftRightIconButton} />
						</Box>
					</Box>
				</Box>
			</BottomSheet>
		</Box>
	);
};
