import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import { CameraResultType, Plugins } from '@capacitor/core';
import { Icon, Page, Styling } from 'components';
import { IonImg } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './DriverLicence.styles';
import React, { Component } from 'react';

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

export class DriveLicence extends Component {
	state: any = {};

	constructor(props: any) {
		super(props);
		this.state = { ...INITIAL_STATE };

		defineCustomElements(window);
	}

	async takeFrontPhoto() {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri
		});
		const imageUrl = image.webPath;
		// Can be set to the src of an image now
		this.setState({
			frontPhoto: imageUrl
		});

		if (this.state.backPhoto) {
			this.setState({ isSubmitDisabled: false });
		}
	}

	async takeBackPhoto() {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri
		});
		const imageUrl = image.webPath;
		// Can be set to the src of an image now
		this.setState({ backPhoto: imageUrl });

		if (this.state.frontPhoto) {
			this.setState({ isSubmitDisabled: false });
		}
	}

	removeFrontPhoto() {
		this.setState({ frontPhoto: '' });

		if (this.state.backPhoto) {
			this.setState({ isSubmitDisabled: true });
		}
	}

	removeBackPhoto() {
		this.setState({ backPhoto: '' });

		if (this.state.backPhoto) {
			this.setState({ isSubmitDisabled: true });
		}
	}

	submit() {
		this.setState({ isSubmitting: true, isSubmitDisabled: true, isSubmitInvalid: false });
		const self = this;

		setTimeout(function() {
			const success = true;

			if (success) {
				self.setState({ isSubmitting: false, isSubmitSuccess: true });

				setTimeout(function() {
					self.setState({ isSubmitSuccess: success, isSubmitSuccessModal: true });
					setTimeout(function() {
						self.setState({ isSubmitSuccessModal: false });
					}, 1500);
				}, 1500);
			} else {
				self.setState({ isSubmitInvalid: true, isSubmitting: false });
			}
		}, 1500);
	}

	render() {
		const { frontPhoto, backPhoto, isSubmitDisabled, isSubmitting, isSubmitSuccess, isSubmitInvalid, isSubmitSuccessModal } = this.state;

		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page>
						{isSubmitSuccessModal && (
							<Box className={classes.modal}>
								<Box className={classes.modalBody}>
									<Icon iconName="send" />
									<Typography className={classes.modalTitle}>Submitted</Typography>
									<Typography className={classes.modalText}>We will validate your driver's licence and send you a notification</Typography>
								</Box>
							</Box>
						)}

						<Box className={classes.wrapper}>
							<Box className={classes.heading}>
								<Typography variant="h4">Driver licence</Typography>
							</Box>

							<Box className={classes.description}>
								<Typography variant="h4">
									If you are going to rent a car or motorcycle - you need to validate your driver's license. Add two photos and expect
									confirmation within two days.
								</Typography>
							</Box>
							{isSubmitting || isSubmitSuccess || isSubmitInvalid ? (
								<Box>
									{isSubmitting ? (
										<Box className={classes.progressbox}>
											<Typography className={classes.progressText}>Driver licence validation is in progress.</Typography>
										</Box>
									) : (
										''
									)}

									{isSubmitSuccess ? <Box className={classes.validbox}></Box> : ''}

									{isSubmitInvalid ? <Box className={classes.isSubmitInvalidbox}></Box> : ''}

									<Box className={classes.description}>
										<Typography style={{ fontSize: '15px', color: '#0000007f', width: '325px', margin: 'auto' }}>
											Request for validation of driver licence was send 24 Nov
										</Typography>
									</Box>
								</Box>
							) : (
								<Box className={classes.buttonContainer}>
									{frontPhoto ? (
										<Box className={classes.cardbox}>
											<Box className={classes.cardImageContainer}>
												<IonImg className={classes.cardImage} src={frontPhoto}></IonImg>
												<Box className={classes.imageCover}>
													<Icon iconName="CheckCircleOutlineIcon" className={classes.checkedIcon} />
													<Typography className={classes.cardTextWhite}>Front side</Typography>
												</Box>

												<Icon className={classes.closeIcon} {...{ onClick: () => this.removeFrontPhoto() }} iconName="close" />
											</Box>
											<Typography className={classes.cardDescription}>On this side is a photograph of ther driver</Typography>
										</Box>
									) : (
										<Box className={classes.cardbox} onClick={() => this.takeFrontPhoto()}>
											<Box className={classes.cardButton}>
												<Icon iconName="camera" />
												<Typography className={classes.cardTextBlack}>Front side</Typography>
											</Box>
											<Typography className={classes.cardDescription}>On this side is a photograph of ther driver</Typography>
										</Box>
									)}
									{backPhoto ? (
										<Box className={classes.cardbox}>
											<Box className={classes.cardImageContainer}>
												<IonImg className={classes.cardImage} src={frontPhoto}></IonImg>
												<Box className={classes.imageCover}>
													{/* <CheckCircleOutlineIcon className={classes.checkedIcon} onClick={() => this.removeBackPhoto()} /> */}
													<Typography className={classes.cardTextWhite}>Back side</Typography>
												</Box>
												{/* <CloseIcon className={classes.closeIcon} onClick={() => this.removeBackPhoto()} /> */}
											</Box>
											<Typography className={classes.cardDescription}>On this side in information about vehicle categories</Typography>
										</Box>
									) : (
										<Box className={classes.cardbox} onClick={() => this.takeBackPhoto()}>
											<Box className={classes.cardButton}>
												{/* <CameraAltIcon className={classes.submitIcon} /> */}
												<Typography className={classes.cardTextBlack}>Back side</Typography>
											</Box>
											<Typography className={classes.cardDescription}>On this side in information about vehicle categories</Typography>
										</Box>
									)}
								</Box>
							)}
							{!isSubmitting && !isSubmitSuccess && !isSubmitInvalid && (
								<Box>
									<Box className={classes.footer}>
										<Button
											className={isSubmitDisabled ? classes.submitButton : classes.submitButtonActive}
											disabled={isSubmitDisabled}
											onClick={() => this.submit()}
										>
											{/* <SendIcon className={classes.sendIcon} /> */}
											<Typography variant="button">Submit for validation</Typography>
										</Button>
										<Box className={classes.description}>
											<Typography variant="h5">We will send you a notification with your decision.</Typography>
										</Box>
									</Box>
								</Box>
							)}
							{isSubmitInvalid && (
								<Box>
									<Box className={classes.footer}>
										<Button className={classes.submitButtonActive} onClick={() => this.submit()}>
											{/* <RefreshIcon className={classes.sendIcon} /> */}
											<Typography variant="button">Try again</Typography>
										</Button>
										<Box className={classes.description}>
											<Typography variant="h5">We will send you a notification with your decision.</Typography>
										</Box>
									</Box>
								</Box>
							)}
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}

export default DriveLicence;
