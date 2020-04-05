interface IProvider {
	id: number;
	src: string;
	title: string;
	description: string;
}

// interface IImage {
// 	key: string;
// 	data: IProvider;
// 	[index: string]: string | IProvider;
// }

export const images: IProvider[] = [
	{ id: 1, src: require('./images/Lime.png'), title: 'Lime', description: 'Lime' },
	{ id: 2, src: require('./images/Bird.png'), title: 'Bird', description: 'Bird' },
	{ id: 3, src: require('./images/Circ.png'), title: 'Circ', description: 'Circ' },
	{ id: 4, src: require('./images/Tier.png'), title: 'Tier', description: 'Tier' },
	{ id: 5, src: require('./images/Voi-scooters.png'), title: 'Spin', description: 'Spin' }
];
