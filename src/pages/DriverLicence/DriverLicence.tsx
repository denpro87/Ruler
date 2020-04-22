import { Box, Button, makeStyles } from '@material-ui/core';
import { CameraResultType, Plugins } from '@capacitor/core';
import { Dialog, Icon, IconButton, Page, Styling, Text } from 'components';
import { IonImg } from '@ionic/react';
import { LicenseItem } from './components';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './DriverLicence.styles';
import React, { Component } from 'react';
import clsx from 'clsx';
import manSvg from './images/man.svg';

const useStyles = makeStyles(styles);
// const { formatMessage } = useIntl();

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

export class DriveLicence extends Component {
	state: any = {};

	constructor(props: any) {
		super(props);
		this.state = { ...INITIAL_STATE };

		defineCustomElements(window);
	}

	async takePhoto(type: string) {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri
		});
		const imageUrl = image.webPath;
		// Can be set to the src of an image now
		this.setState(
			{
				[`${type}Photo`]: imageUrl
			},
			() => {
				if (this.state.frontPhoto && this.state.backPhoto) {
					this.setState({ isSubmitDisabled: false });
				}
			}
		);
	}

	removePhoto(type: string) {
		this.setState({ [`${type}Photo`]: '', isSubmitDisabled: true });
	}

	submit() {
		this.setState({ isSubmitSuccessModal: true });
	}

	handleDialogClose = () => {
		this.setState({ isSubmitting: true, isSubmitDisabled: true, isSubmitInvalid: false, isSubmitSuccessModal: false });
		const self = this;

		setTimeout(function() {
			const success = true;

			if (success) {
				self.setState({ isSubmitting: false, isSubmitSuccess: true });
			} else {
				self.setState({ isSubmitInvalid: true, isSubmitting: false });
			}
		}, 1500);
	};

	handleRemoveClick = () => {
		console.log('click remove');
	};

	render() {
		const { frontPhoto, backPhoto, isSubmitDisabled, isSubmitting, isSubmitSuccess, isSubmitInvalid } = this.state;

		return (
			<Styling useStyles={useStyles} props={this.state}>
				{classes => (
					<Page title="Driver license" titleSize="large">
						{!isSubmitSuccess && (
							<Text className={classes.description}>
								Before you rent a car, let's validate your driver's license. Simply upload a scanned picture of your driver's license and we
								will get back to you upon validation.
							</Text>
						)}
						{isSubmitting || isSubmitSuccess || isSubmitInvalid ? (
							<Box className={classes.submitContainer}>
								{isSubmitting && (
									<Box className={classes.submitWrapper}>
										<Box className={classes.progressBox}>
											<Text className={classes.progressText}>Driver licence validation is in progress.</Text>
										</Box>
										<Text className={classes.description}>A confirmation email will be sent to your registered email upon validation.</Text>
									</Box>
								)}
								{isSubmitSuccess && (
									<Box className={classes.submitWrapper}>
										<Box className={classes.validBox} />
										<LicenseItem imageSrc={this.state.frontPhoto} handleRemoveClick={this.handleRemoveClick} />
										<Button className={classes.addButton}>
											<Icon className={classes.buttonIcon} iconName="add"></Icon>
											Add new driver’s licence
										</Button>
									</Box>
								)}
								{isSubmitInvalid && (
									<Box className={classes.submitWrapper}>
										<Box className={classes.invalidBox} />
										<Text className={classes.description}>
											Please retry again with a clearly readable picture and make sure that the license is not expired
										</Text>
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
													Front side
												</Text>
											</Box>
											<IconButton className={classes.closeIcon} onClick={() => this.removePhoto('front')} iconName="close" />
										</Box>
										<Text className={classes.descriptionText}>On this side is a photograph of ther driver</Text>
									</Box>
								) : (
									<Box className={classes.cardBox} onClick={() => this.takePhoto('front')}>
										<Box className={classes.cardButton}>
											<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
											<Text className={classes.cardText}>Front side</Text>
										</Box>
										<Text className={classes.descriptionText}>On this side is a photograph of ther driver</Text>
									</Box>
								)}
								{backPhoto ? (
									<Box className={classes.cardBox}>
										<Box className={classes.cardImageContainer}>
											<IonImg className={classes.cardImage} src={frontPhoto}></IonImg>
											<Box className={classes.imageCover}>
												<Icon iconName="well-done-checked" color="#ffffff" />
												<Text className={classes.cardText} color="#ffffff">
													Back side
												</Text>
											</Box>
											<IconButton className={classes.closeIcon} onClick={() => this.removePhoto('back')} iconName="close" />
										</Box>
										<Text className={classes.descriptionText}>On this side in information about vehicle categories</Text>
									</Box>
								) : (
									<Box className={classes.cardBox} onClick={() => this.takePhoto('back')}>
										<Box className={classes.cardButton}>
											<Icon iconName="photo" color="#00b559" fillColor="#ffffff" />
											<Text className={classes.cardText}>Back side</Text>
										</Box>
										<Text className={classes.descriptionText}>On this side in information about vehicle categories</Text>
									</Box>
								)}
							</Box>
						)}
						{!isSubmitting && !isSubmitSuccess && !isSubmitInvalid && (
							<Box className={classes.footer}>
								<Button fullWidth className={classes.submitButton} disabled={isSubmitDisabled} onClick={() => this.submit()}>
									<Icon className={classes.buttonIcon} iconName="submit-report"></Icon>
									Submit for validation
								</Button>
								<Text className={classes.descriptionText}>We’ll send you a notification with our decision</Text>
							</Box>
						)}
						{isSubmitInvalid && (
							<Box className={classes.footer}>
								<Button fullWidth className={clsx(classes.submitButton, classes.tryButton)} onClick={() => this.submit()}>
									<Icon className={classes.buttonIcon} iconName="reset"></Icon>
									Try again
								</Button>
							</Box>
						)}
						<Dialog
							title="Submitted!"
							open={this.state.isSubmitSuccessModal}
							hasClose={true}
							image={manSvg}
							onClose={this.handleDialogClose}
							aria-labelledby="form-dialog-title"
						>
							<Text className={classes.dialogContentText}>We will validate your driver’s licence and send you a notification!</Text>
						</Dialog>
					</Page>
				)}
			</Styling>
		);
	}
}
