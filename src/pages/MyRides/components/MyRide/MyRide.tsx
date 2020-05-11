import { Box, makeStyles } from '@material-ui/core';
import { IMyRideProps } from './MyRide.types';
import { Icon, IconButton, Text } from 'components';
import { styles } from './MyRide.styles';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const MyRide: React.FunctionComponent<IMyRideProps> = props => {
	const classes = useStyles();

	const { formatMessage } = useIntl();

	return (
		<Box className={classes.historyContainer}>
			<Box className={classes.historyContent}>
				<Box className={classes.progressWrapper}>
					{[0, 1, 2, 3, 4, 5].map(index => {
						return <Box key={index} className={index === 0 || index === 5 ? classes.startAndEndPoint : classes.midPoint} />;
					})}
				</Box>
				<Box className={classes.historyWrapper}>
					<Box className={classes.startPointWrapper}>
						<Box>
							<Text className={classes.largeText} block>
								{formatMessage({ id: props.startPosition })}
							</Text>
							<Text className={classes.smallText} block>
								{formatMessage({ id: props.startTime })}
							</Text>
						</Box>
						<Box className={classes.iconWrapper}>
							<Icon iconName={props.type} colorType="black" />
							<Box className={classes.iconDecorator} />
						</Box>
					</Box>
					<Box className={clsx(classes.startPointWrapper, classes.endPoint)}>
						<Text className={classes.largeText} block>
							{formatMessage({ id: props.endPosition })}
						</Text>
						<Text className={classes.amountText} block>
							{formatMessage({ id: props.totalAmount })}
						</Text>
					</Box>
					<Box className={classes.startPointWrapper}>
						<Text className={classes.smallText} block>
							{formatMessage({ id: props.travelTime })}
						</Text>
						<Text className={classes.smallText} block>
							{formatMessage({ id: 'my_rides.text.total_amount' })}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box className={classes.historyFooter}>
				<Box>
					<IconButton className={classes.reportIconButton} iconName="report" />
					<Text className={classes.largeText}>{formatMessage({ id: 'my_rides.text.report_trip' })}</Text>
				</Box>
				<Box>
					{[0, 1, 2, 3].map(index => {
						return <Icon key={index} iconName="full-rate" />;
					})}
					<Icon iconName="rate" />
				</Box>
			</Box>
		</Box>
	);
};
