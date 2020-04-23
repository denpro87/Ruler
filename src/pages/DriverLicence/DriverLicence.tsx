import { Box, Button, makeStyles } from '@material-ui/core';
import { CameraResultType, Plugins } from '@capacitor/core';
import { Dialog, Icon, IconButton, Page, Text } from 'components';
import { IonImg } from '@ionic/react';
import { LicenceItem } from './components';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './DriverLicence.styles';
import { useIntl } from 'react-intl';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import manSvg from './images/man.svg';

const useStyles = makeStyles(styles);

const { Camera } = Plugins;
const INITIAL_STATE = {
	frontPhoto: '',
	backPhoto: '',
	isSubmitDisabled: true,
	isSubmitting: false,
	isSubmitSuccess: false,
	isSubmitInvalid: false,
	isSubmitSuccessModal: false
};

export const DriveLicence: React.FunctionComponent = () => {
	const classes = useStyles();
	const [state, setState] = React.useState(INITIAL_STATE);
	const { formatMessage } = useIntl();

	useEffect(() => {
		defineCustomElements(window);
	}, []);
	useEffect(() => {
		if (state.frontPhoto && state.backPhoto) {
			setState(prevState => ({ ...prevState, isSubmitDisabled: false }));
		}
	}, [state.frontPhoto, state.backPhoto]);

	const takePhoto = async (type: 'front' | 'back') => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri
		});
		const imageUrl = image.webPath;
		setState(prevState => ({ ...prevState, [`${type}Photo`]: imageUrl }));
	};

	const removePhoto = (type: 'front' | 'back') => {
		setState(prevState => ({ ...prevState, [`${type}Photo`]: '', isSubmitDisabled: true }));
	};

	const submit = () => {
		setState(prevState => ({ ...prevState, isSubmitSuccessModal: true }));
	};

	const handleDialogClose = () => {
		setState(prevState => ({
			...prevState,
			isSubmitting: true,
			isSubmitDisabled: true,
			isSubmitInvalid: false,
			isSubmitSuccessModal: false
		}));

		setTimeout(function() {
			const success = true;
			setState(prevState => ({
				...prevState,
				isSubmitting: !success,
				isSubmitSuccess: success
			}));
		}, 1500);
	};

	const handleRemoveClick = () => {
		console.log('click remove');
	};

	return (
		<Page title={formatMessage({ id: 'driver-licence.title' })} titleSize="large">
			{!state.isSubmitSuccess && <Text className={classes.description}>{formatMessage({ id: 'driver-licence.description' })}</Text>}
			{state.isSubmitting || state.isSubmitSuccess || state.isSubmitInvalid ? (
				<Box className={classes.submitContainer}>
					{state.isSubmitting && (
						<Box className={classes.submitWrapper}>
							<Box className={classes.progressBox}>
								<Text className={classes.progressText}>{formatMessage({ id: 'driver-licence.validation.progress.title' })}</Text>
							</Box>
							<Text className={classes.description}>{formatMessage({ id: 'driver-licence.validation.progress.description' })}</Text>
						</Box>
					)}
					{state.isSubmitSuccess && (
						<Box className={classes.submitWrapper}>
							<Box className={classes.validBox} />
							<LicenceItem imageSrc={state.frontPhoto} handleRemoveClick={handleRemoveClick} />
							<Button className={classes.addButton}>
								<Icon className={classes.buttonIcon} iconName="add"></Icon>
								{formatMessage({ id: 'driver-licence.add' })}
							</Button>
						</Box>
					)}
					{state.isSubmitInvalid && (
						<Box className={classes.submitWrapper}>
							<Box className={classes.invalidBox} />
							<Text className={classes.description}>{formatMessage({ id: 'driver-licence.invalid.description' })}</Text>
						</Box>
					)}
				</Box>
			) : (
				<Box className={classes.buttonContainer}>
					{state.frontPhoto ? (
						<Box className={classes.cardBox}>
							<Box className={classes.cardImageContainer}>
								<IonImg className={classes.cardImage} src={state.frontPhoto}></IonImg>
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
					{state.backPhoto ? (
						<Box className={classes.cardBox}>
							<Box className={classes.cardImageContainer}>
								<IonImg className={classes.cardImage} src={state.backPhoto}></IonImg>
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
			{!state.isSubmitting && !state.isSubmitSuccess && !state.isSubmitInvalid && (
				<Box className={classes.footer}>
					<Button fullWidth className={classes.submitButton} disabled={state.isSubmitDisabled} onClick={() => submit()}>
						<Icon className={classes.buttonIcon} iconName="submit-report"></Icon>
						{formatMessage({ id: 'driver-licence.submit.for.validation' })}
					</Button>
					<Text className={classes.descriptionText}>{formatMessage({ id: 'driver-licence.submit.description' })}</Text>
				</Box>
			)}
			{state.isSubmitInvalid && (
				<Box className={classes.footer}>
					<Button fullWidth className={clsx(classes.submitButton, classes.tryButton)} onClick={() => submit()}>
						<Icon className={classes.buttonIcon} iconName="reset"></Icon>
						{formatMessage({ id: 'driver-licence.try.again' })}
					</Button>
				</Box>
			)}
			<Dialog
				title={formatMessage({ id: 'driver-licence.submit-success.dialog.title' })}
				open={state.isSubmitSuccessModal}
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
