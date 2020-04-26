import { Box, makeStyles } from '@material-ui/core';
import { Button, Page, Text } from 'components';
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
	const [data, setData] = React.useState<string[]>([]);
	const [isFirstLoading, setFirstLoading] = React.useState(true);
	const classes = useStyles({ state });

	React.useEffect(() => {
		const params: any = props.location.state;
		const urls = params && params.data ? params.data : null;
		const state = params && params.state ? params.state : null;

		if (state) setState(state);

		if (urls) setData(urls);
		setFirstLoading(false);
	}, [props.location.state]);

	React.useEffect(() => {
		if (state === 'progress') {
			setTimeout(() => {
				const success = true;
				setState(success ? 'success' : 'invalid');
			}, 1500);
		}
	}, [state]);

	React.useEffect(() => {
		if (!isFirstLoading && data.length === 0) history.push('/driver-licence/add');
	}, [data, history, isFirstLoading]);

	const handleRemoveClick = (index: number) => {
		console.log(index);
	};

	return (
		<Page title={formatMessage({ id: 'driver_licence.title' })} titleSize="large">
			{state !== 'success' && <Text className={classes.description}>{formatMessage({ id: 'driver_licence.description' })}</Text>}
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
					{data?.map((item: string, index: number) => (
						<LicenceItem key={index} imageSrc={item} handleRemoveClick={() => handleRemoveClick(index)} />
					))}
					<Box className={classes.buttonWrapper}>
						<Button iconName="add" compact className={classes.addButton} href="/driver-licence/add">
							{formatMessage({ id: 'driver_licence.add' })}
						</Button>
					</Box>
				</Box>
			)}
		</Page>
	);
};
