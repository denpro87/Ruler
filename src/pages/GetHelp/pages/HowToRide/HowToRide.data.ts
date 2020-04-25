import { ISlide } from 'components';
export const slides: Array<ISlide> = [
	{
		image: require('./images/scanQrCode.svg'),
		title: 'get_help.how_to_ride.scan_qr.title',
		description: 'get_help.how_to_ride.scan_qr.description',
		style: {
			objectPosition: -100
		}
	},
	{
		image: require('./images/paymentMethod.svg'),
		title: 'get_help.how_to_ride.payment_method.title',
		description: 'get_help.how_to_ride.payment_method.description',
		style: {
			objectPosition: 10
		}
	},
	{
		image: require('./images/startTrip.svg'),
		title: 'get_help.how_to_ride.start_trip.title',
		description: 'get_help.how_to_ride.start_trip.description',
		style: {
			objectPosition: 10
		}
	},
	{
		image: require('./images/watchAreas.svg'),
		title: 'get_help.how_to_ride.watch_areas.title',
		description: 'get_help.how_to_ride.watch_areas.description',
		style: {
			objectPosition: 10
		}
	},
	{
		image: require('./images/tripStatus.svg'),
		title: 'get_help.how_to_ride.trip_status.title',
		description: 'get_help.how_to_ride.trip_status.description',
		style: {
			objectPosition: 10
		}
	}
];
