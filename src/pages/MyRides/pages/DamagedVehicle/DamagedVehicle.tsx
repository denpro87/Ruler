import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import { Button, GreenButton, Icon, IconButton, LightGreenButton, Page, Text, TextField } from 'components';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { IonImg } from '@ionic/react';
import { damagedVehicleTypes } from './DamagedVehicle.data';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { styles } from './DamagedVehicle.styles';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);
const { Camera } = Plugins;

export const DamagedVehicle: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [buttonLabel, setButtonLabel] = React.useState('Car');
	const [location, setLocation] = React.useState('');
	const [code, setCode] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [photos, setPhotos] = React.useState<string[]>([]);
	React.useEffect(() => {
		defineCustomElements(window);
	}, []);
	const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>): void => setLocation(event.target.value);

	const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => setCode(event.target.value);

	const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>): void => setDescription(event.target.value);

	const handlePhotoClick = (index: number): void => {};

	const takePhoto = async () => {
		const image = await Camera.getPhoto({
			quality: 100,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera
		});
		const imageUrl = image.webPath ?? '';
		setPhotos(prevPhotos => [...prevPhotos, imageUrl]);
	};

	return (
		<Page canGoBack title={formatMessage({ id: 'my_rides.damaged_vehicle.title' })} titleSize="large">
			<Box className={classes.damagedVehicleContainer}>
				<Box className={classes.buttonGroupWrapper}>
					{damagedVehicleTypes.map((damagedVehicleType, index) => {
						return (
							<Button
								className={clsx(
									{ [classes.button]: true },
									{ [classes.activeBackground]: buttonLabel === formatMessage({ id: damagedVehicleType.label }) },
									{ [classes.inActiveBackground]: buttonLabel !== formatMessage({ id: damagedVehicleType.label }) }
								)}
								key={index}
								onClick={(): void => setButtonLabel(formatMessage({ id: damagedVehicleType.label }))}
							>
								<Icon iconName={damagedVehicleType.iconName} colorType="black" />
								<Text className={classes.iconNameText}>{formatMessage({ id: damagedVehicleType.label })}</Text>
							</Button>
						);
					})}
				</Box>
				<TextField
					name="location"
					label={formatMessage({ id: 'my_rides.damaged_vehicle.location' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconProps={{ iconName: 'find-me', secondaryColor: '#f8ca06' }} />
							</InputAdornment>
						)
					}}
					value={location}
					onValueChange={handleLocationChange}
				/>
				<TextField
					name="code"
					label={formatMessage({ id: 'my_rides.damaged_vehicle.code' })}
					inputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton iconProps={{ iconName: 'qr', secondaryColor: '#f8ca06' }} />
							</InputAdornment>
						)
					}}
					value={code}
					onValueChange={handleCodeChange}
				/>
				<TextField
					name="description"
					label={formatMessage({ id: 'my_rides.damaged_vehicle.description' })}
					value={description}
					onValueChange={handleDescriptionChange}
				/>
				<Box className={classes.imageGallery}>
					<Box className={classes.imageGalleryInside}>
						{photos.length > 0 &&
							photos.map((photo, index) => {
								return (
									<IonImg
										// className={clsx({ [classes.takenImage]: true }, { [classes.takenImageActive]: index === selectedImageIndex })}
										className={classes.takenImage}
										key={index}
										src={photo}
										onClick={() => handlePhotoClick(index)}
									/>
								);
							})}
					</Box>
				</Box>
				<Box className={classes.footer}>
					<LightGreenButton className={classes.addPhotosButton} iconName="photo" onClick={takePhoto}>
						{formatMessage({ id: 'button.add_photos' })}
					</LightGreenButton>
					<GreenButton iconName="submit-report">{formatMessage({ id: 'button.submit_report' })}</GreenButton>
				</Box>
			</Box>
		</Page>
	);
};
