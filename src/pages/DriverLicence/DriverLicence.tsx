import { AddDriverLicencePhoto } from './components/AddDriverLicencePhoto';
import { BottomSheet, Button, Page, Text } from 'components';
import { Box, makeStyles } from '@material-ui/core';
import { IDriverLicenceProps } from './DriverLicence.types';
import { LicenceItem } from './components';
import { styles } from './DriverLicence.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

export const DriverLicence: React.FunctionComponent<IDriverLicenceProps> = props => {
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [state, setState] = React.useState<'success' | 'progress' | 'invalid' | ''>('');
	const [driverLicenceData, setDriverLicenceData] = React.useState<string[]>([]);
	// const [isFirstLoading, setFirstLoading] = React.useState(true);
	const [showAddDriverLicence, setAddDriverLicence] = React.useState(false);
	const classes = useStyles({ state });

	React.useEffect(() => {
		const params: any = props.location.state;
		const data = params && params.data ? params.data : null;
		const state = params && params.state ? params.state : null;
		const showAddDriverLicence = params && params.showAddDriverLicence;

		if (state) setState(state);

		setAddDriverLicence(showAddDriverLicence);

		if (data) {
			setDriverLicenceData(prevData => [...prevData, data]);
		}
		// setFirstLoading(false);
	}, [props.location.state]);

	React.useEffect(() => {
		if (state === 'progress') {
			setTimeout(() => {
				const success = true;
				setState(success ? 'success' : 'invalid');
			}, 2000);
		}
	}, [state]);

	// React.useEffect(() => {
	// 	if (!isFirstLoading && data.length === 0) history.push('/driver-licence/add');
	// }, [data, history, isFirstLoading]);

	const handleRemoveButtonClick = (index: number) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		const temp = driverLicenceData;
		temp.splice(index, 1);
		setDriverLicenceData([...temp]);
	};

	const handleAddDriverLicenceClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		if (driverLicenceData.length > 0) setAddDriverLicence(true);
		else setAddDriverLicence(false);
	};

	const handleBottomSheetChange = (isOpen: boolean): void => {
		setAddDriverLicence(isOpen);
	};

	return (
		<Page title={formatMessage({ id: 'driver_licence.title' })} titleSize="large">
			{driverLicenceData.length === 0 && (
				<>
					<Text className={classes.description}>{formatMessage({ id: 'driver_licence.description' })}</Text>
					<AddDriverLicencePhoto />
				</>
			)}
			{state !== 'success' && state !== '' && (
				<Text className={classes.description}>{formatMessage({ id: 'driver_licence.description' })}</Text>
			)}
			{state === 'progress' && (
				<Box className={classes.submitWrapper}>
					<Box className={classes.bannerBox}>
						<Text className={classes.bannerText}>{formatMessage({ id: 'driver_licence.validation.progress.title' })}</Text>
					</Box>
					<Text className={classes.description}>{formatMessage({ id: 'driver_licence.validation.progress.description' })}</Text>
				</Box>
			)}
			{state === 'invalid' && (
				<Box className={classes.submitWrapper}>
					<Box className={classes.bannerBox}>
						<Text className={classes.bannerText}>{formatMessage({ id: 'driver_licence.validation.invalid.title' })}</Text>
					</Box>
					<Text className={classes.description}>{formatMessage({ id: 'driver_licence.invalid.description' })}</Text>
					<Box className={classes.buttonWrapper}>
						<Button iconName="reset" compact fullWidth className={classes.submitButton} href="/driver-licence/add">
							{formatMessage({ id: 'driver_licence.try_again' })}
						</Button>
					</Box>
				</Box>
			)}
			{state === 'success' && (
				<Box className={classes.submitWrapper}>
					<Box className={classes.bannerBox}>
						<Text className={classes.bannerText}>{formatMessage({ id: 'driver_licence.validation.success.title' })}</Text>
					</Box>
					{driverLicenceData?.map((item: string, index: number) => (
						<LicenceItem key={index} imageSrc={item} handleRemoveClick={handleRemoveButtonClick(index)} />
					))}
					<Box className={classes.buttonWrapper}>
						<Button iconName="add" compact className={classes.addButton} onClick={handleAddDriverLicenceClick}>
							{formatMessage({ id: 'driver_licence.add' })}
						</Button>
					</Box>
				</Box>
			)}
			<BottomSheet
				title={formatMessage({ id: 'driver_licence.add' })}
				open={showAddDriverLicence}
				onBottomSheetChange={handleBottomSheetChange}
			>
				<AddDriverLicencePhoto />
			</BottomSheet>
		</Page>
	);
};
