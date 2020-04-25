import { ISlide } from 'components';
import { pxToRem } from 'styles';
export const slides: Array<ISlide> = [
	{
		image: require('./images/scan-qr-code.svg'),
		title: 'get_help.how_to_ride.scan_qr.title',
		description: 'get_help.how_to_ride.scan_qr.description',
		style: {
			objectPosition: -100,
			height: 'calc(100vw * 293 / 375)',
			maxHeight: pxToRem(524),
			maxWidth: pxToRem((524 / 289) * 636)
		}
	},
	{
		image: require('./images/payment-method.svg'),
		title: 'get_help.how_to_ride.payment_method.title',
		description: 'get_help.how_to_ride.payment_method.description',
		style: {
			objectPosition: 12.3,
			height: 'calc(100vw * 289 / 375)',
			maxHeight: pxToRem(516),
			maxWidth: pxToRem((516 / 289) * 521 + 12.3)
		}
	},
	{
		image: require('./images/start-trip.svg'),
		title: 'get_help.how_to_ride.start_trip.title',
		description: 'get_help.how_to_ride.start_trip.description',
		style: {
			objectPosition: 13,
			height: 'calc(100vw * 289 / 375)',
			maxWidth: pxToRem((516 / 289) * 520 + 13)
		}
	},
	{
		image: require('./images/watch-areas.svg'),
		title: 'get_help.how_to_ride.watch_areas.title',
		description: 'get_help.how_to_ride.watch_areas.description',
		style: {
			objectPosition: 14,
			height: 'calc(100vw * 288 / 375)',
			maxWidth: pxToRem((516 / 289) * 519 + 14)
		}
	},
	{
		image: require('./images/trip-status.svg'),
		title: 'get_help.how_to_ride.trip_status.title',
		description: 'get_help.how_to_ride.trip_status.description',
		style: {
			objectPosition: 32,
			height: 'calc(100vw * 289 / 375)',
			maxWidth: pxToRem((524 / 289) * 501 + 32)
		}
	}
];
