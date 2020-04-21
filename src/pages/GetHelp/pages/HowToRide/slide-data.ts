import { ISlide } from 'components';
export const slides: Array<ISlide> = [
	{
		image: require('./images/slide1/img.png'),
		title: 'Scan QR code',
		description: 'To start a ride, you need to scan a QR code which you can find it on the vehicle’s handlebar or front panel.',
		style: {
			objectPosition: -100
		}
	},
	{
		image: require('./images/slide2/img.png'),
		title: 'Payment method',
		description:
			'Ruler offers multiple payment gateways. Whether you prefer payment with your debit/credit card or you want to use Apple Pay or Google Pay, we have it all.',
		style: {
			objectPosition: 10
		}
	},
	{
		image: require('./images/slide3/img.png'),
		title: 'How to start a trip?',
		description: 'Starting a trip is as simple as scanning a bar-code. Just scan the bar-code on a handlebar of a scooter and that’s it.',
		style: {
			objectPosition: 10
		}
	},
	{
		image: require('./images/slide4/img.png'),
		title: 'Watch the areas',
		description:
			'There are certain zones highlighted as red points on the map e.g. a no-parking zone. Please pay attention to these zones.',
		style: {
			objectPosition: 10
		}
	},
	{
		image: require('./images/slide5/img.png'),
		title: 'Manage trip status',
		description:
			'Changing a trip status is important as it help us track your ride. For a bike, a trip can either be Unlocked, In-ride, Finished, and Completed.',
		style: {
			objectPosition: 10
		}
	}
];
