import { Box, Button, makeStyles } from '@material-ui/core';
import { CameraResultType, Plugins } from '@capacitor/core';
import { Dialog, Icon, IconButton, Page, Text } from 'components';
import { IonImg } from '@ionic/react';
import { LicenceItem } from './components';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './DriverLicence.styles';
import { useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import manSvg from './images/man.svg';

const useStyles = makeStyles(styles);

const { Camera } = Plugins;

export const DriveLicence: React.FunctionComponent = () => {
	const classes = useStyles();
	const [frontPhoto, setFrontPhoto] = useState('');
	const [backPhoto, setBackPhoto] = useState('');
	const [isSubmitDisabled, setSubmitDisabled] = useState(true);
	const [isSubmitting, setSubmitting] = useState(false);
	const [isSubmitSuccess, setSubmitSuccess] = useState(false);
	const [isSubmitInvalid, setSubmitInvalid] = useState(false);
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
		setSubmitting(true);
		setSubmitDisabled(true);
		setSubmitInvalid(false);
		setSubmitSuccessModal(false);

		setTimeout(() => {
			const success = true;
			setSubmitting(!success);
			setSubmitSuccess(success);
		}, 1500);
	};

	const handleRemoveClick = () => {
		console.log('click remove');
	};

	return (
		<Page title={formatMessage({ id: 'driver-licence.title' })} titleSize="large">
			{!isSubmitSuccess && <Text className={classes.description}>{formatMessage({ id: 'driver-licence.description' })}</Text>}
			{isSubmitting || isSubmitSuccess || isSubmitInvalid ? (
				<Box className={classes.submitContainer}>
					{isSubmitting && (
						<Box className={classes.submitWrapper}>
							<Box className={classes.progressBox}>
								<Text className={classes.progressText}>{formatMessage({ id: 'driver-licence.validation.progress.title' })}</Text>
							</Box>
							<Text className={classes.description}>{formatMessage({ id: 'driver-licence.validation.progress.description' })}</Text>
						</Box>
					)}
					{isSubmitSuccess && (
						<Box className={classes.submitWrapper}>
							<Box className={classes.validBox} />
							<LicenceItem imageSrc={frontPhoto} handleRemoveClick={handleRemoveClick} />
							<Button className={classes.addButton}>
								<Icon className={classes.buttonIcon} iconName="add"></Icon>
								{formatMessage({ id: 'driver-licence.add' })}
							</Button>
						</Box>
					)}
					{isSubmitInvalid && (
						<Box className={classes.submitWrapper}>
							<Box className={classes.invalidBox} />
							<Text className={classes.description}>{formatMessage({ id: 'driver-licence.invalid.description' })}</Text>
						</Box>
					)}
				</Box>
			) : (
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
			)}
			{!isSubmitting && !isSubmitSuccess && !isSubmitInvalid && (
				<Box className={classes.footer}>
					<Button fullWidth className={classes.submitButton} disabled={isSubmitDisabled} onClick={() => submit()}>
						<Icon className={classes.buttonIcon} iconName="submit-report"></Icon>
						{formatMessage({ id: 'driver-licence.submit.for.validation' })}
					</Button>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.submit.description' })}</Text>
				</Box>
			)}
			{isSubmitInvalid && (
				<Box className={classes.footer}>
					<Button fullWidth className={clsx(classes.submitButton, classes.tryButton)} onClick={() => submit()}>
						<Icon className={classes.buttonIcon} iconName="reset"></Icon>
						{formatMessage({ id: 'driver-licence.try.again' })}
					</Button>
				</Box>
			)}
			<Dialog
				title={formatMessage({ id: 'driver-licence.submit-success.dialog.title' })}
				open={isSubmitSuccessModal}
				hasClose={true}
				image={manSvg}
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'driver-licence.submit-success.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
