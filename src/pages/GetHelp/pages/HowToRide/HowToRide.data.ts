import { ISlide } from 'components';
import { pxToRem } from 'styles';
export const slides: Array<ISlide> = [
	{
		image: require('./images/scanQrCode.svg'),
		title: 'get_help.how_to_ride.scan_qr.title',
		description: 'get_help.how_to_ride.scan_qr.description',
		style: {
			objectPosition: -100,
			height: 'calc(100vw * 293 / 375)',
			maxHeight: pxToRem(524),
			maxWidth: pxToRem((524 / 289) * 636),
			'@media (min-height: 524px)': {
				objectFit: 'contain'
			}
		}
	},
	{
		image: require('./images/paymentMethod.svg'),
		title: 'get_help.how_to_ride.payment_method.title',
		description: 'get_help.how_to_ride.payment_method.description',
		style: {
			objectPosition: 12.3,
			height: 'calc(100vw * 289 / 375)',
			maxHeight: pxToRem(516),
			maxWidth: pxToRem((516 / 289) * 521 + 12.3),
			'@media (min-height: 515px)': {
				objectFit: 'contain'
			}
		}
	},
	{
		image: require('./images/startTrip.svg'),
		title: 'get_help.how_to_ride.start_trip.title',
		description: 'get_help.how_to_ride.start_trip.description',
		style: {
			objectPosition: 13,
			height: 'calc(100vw * 289 / 375)',
			maxWidth: pxToRem((516 / 289) * 520 + 13),
			'@media (min-height: 516px)': {
				objectFit: 'contain'
			}
		}
	},
	{
		image: require('./images/watchAreas.svg'),
		title: 'get_help.how_to_ride.watch_areas.title',
		description: 'get_help.how_to_ride.watch_areas.description',
		style: {
			objectPosition: 14,
			height: 'calc(100vw * 288 / 375)',
			maxWidth: pxToRem((516 / 289) * 519 + 14),
			'@media (min-height: 516px)': {
				objectFit: 'contain'
			}
		}
	},
	{
		image: require('./images/tripStatus.svg'),
		title: 'get_help.how_to_ride.trip_status.title',
		description: 'get_help.how_to_ride.trip_status.description',
		style: {
			objectPosition: 32,
			height: 'calc(100vw * 289 / 375)',
			maxWidth: pxToRem((524 / 289) * 501 + 32),
			'@media (min-height: 524px)': {
				objectFit: 'contain'
			}
		}
	}
];
