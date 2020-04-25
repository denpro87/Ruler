import { ISlide } from 'components';
import {
	PAGE_INITIAL_HEIGHT,
	PAGE_INITIAL_WIDTH,
	PAYMENT_METHOD_BACKGROUND_INITIAL_HEIGHT,
	PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_RIGHT,
	PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_TOP,
	PAYMENT_METHOD_BACKGROUND_INITIAL_WIDTH,
	SCAN_QR_CODE_BACKGROUND_INITIAL_HEIGHT,
	SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_RIGHT,
	SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_TOP,
	SCAN_QR_CODE_BACKGROUND_INITIAL_WIDTH,
	START_TRIP_BACKGROUND_INITIAL_HEIGHT,
	START_TRIP_BACKGROUND_INITIAL_POSITION_RIGHT,
	START_TRIP_BACKGROUND_INITIAL_POSITION_TOP,
	START_TRIP_BACKGROUND_INITIAL_WIDTH,
	TRIP_STATUS_BACKGROUND_INITIAL_HEIGHT,
	TRIP_STATUS_BACKGROUND_INITIAL_POSITION_RIGHT,
	TRIP_STATUS_BACKGROUND_INITIAL_POSITION_TOP,
	TRIP_STATUS_BACKGROUND_INITIAL_WIDTH,
	WATCH_AREAS_BACKGROUND_INITIAL_HEIGHT,
	WATCH_AREAS_BACKGROUND_INITIAL_POSITION_RIGHT,
	WATCH_AREAS_BACKGROUND_INITIAL_POSITION_TOP,
	WATCH_AREAS_BACKGROUND_INITIAL_WIDTH
} from './HowToRide.variables';
import { percentage, pxToRem } from 'styles';
export const slides: Array<ISlide> = [
	{
		image: require('./images/scan-qr-code.svg'),
		title: 'get_help.how_to_ride.scan_qr.title',
		description: 'get_help.how_to_ride.scan_qr.description',
		style: {
			right: `${(SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_RIGHT / PAGE_INITIAL_WIDTH) * 100}vw`,
			top: `${(SCAN_QR_CODE_BACKGROUND_INITIAL_POSITION_TOP / PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: `${(SCAN_QR_CODE_BACKGROUND_INITIAL_WIDTH / PAGE_INITIAL_WIDTH) * 100}vw`,
			height: `${(SCAN_QR_CODE_BACKGROUND_INITIAL_HEIGHT / PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		image: require('./images/payment-method.svg'),
		title: 'get_help.how_to_ride.payment_method.title',
		description: 'get_help.how_to_ride.payment_method.description',
		style: {
			right: `${(PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_RIGHT / PAGE_INITIAL_WIDTH) * 100}vw`,
			top: `${(PAYMENT_METHOD_BACKGROUND_INITIAL_POSITION_TOP / PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: `${(PAYMENT_METHOD_BACKGROUND_INITIAL_WIDTH / PAGE_INITIAL_WIDTH) * 100}vw`,
			height: `${(PAYMENT_METHOD_BACKGROUND_INITIAL_HEIGHT / PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		image: require('./images/start-trip.svg'),
		title: 'get_help.how_to_ride.start_trip.title',
		description: 'get_help.how_to_ride.start_trip.description',
		style: {
			right: `${(START_TRIP_BACKGROUND_INITIAL_POSITION_RIGHT / PAGE_INITIAL_WIDTH) * 100}vw`,
			top: `${(START_TRIP_BACKGROUND_INITIAL_POSITION_TOP / PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: `${(START_TRIP_BACKGROUND_INITIAL_WIDTH / PAGE_INITIAL_WIDTH) * 100}vw`,
			height: `${(START_TRIP_BACKGROUND_INITIAL_HEIGHT / PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		image: require('./images/watch-areas.svg'),
		title: 'get_help.how_to_ride.watch_areas.title',
		description: 'get_help.how_to_ride.watch_areas.description',
		style: {
			right: `${(WATCH_AREAS_BACKGROUND_INITIAL_POSITION_RIGHT / PAGE_INITIAL_WIDTH) * 100}vw`,
			top: `${(WATCH_AREAS_BACKGROUND_INITIAL_POSITION_TOP / PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: `${(WATCH_AREAS_BACKGROUND_INITIAL_WIDTH / PAGE_INITIAL_WIDTH) * 100}vw`,
			height: `${(WATCH_AREAS_BACKGROUND_INITIAL_HEIGHT / PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	},
	{
		image: require('./images/trip-status.svg'),
		title: 'get_help.how_to_ride.trip_status.title',
		description: 'get_help.how_to_ride.trip_status.description',
		style: {
			right: `${(TRIP_STATUS_BACKGROUND_INITIAL_POSITION_RIGHT / PAGE_INITIAL_WIDTH) * 100}vw`,
			top: `${(TRIP_STATUS_BACKGROUND_INITIAL_POSITION_TOP / PAGE_INITIAL_HEIGHT) * 100}vh`,
			width: `${(TRIP_STATUS_BACKGROUND_INITIAL_WIDTH / PAGE_INITIAL_WIDTH) * 100}vw`,
			height: `${(TRIP_STATUS_BACKGROUND_INITIAL_HEIGHT / PAGE_INITIAL_HEIGHT) * 100}vh`
		}
	}
];
