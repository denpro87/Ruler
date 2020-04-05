import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

export const trimeString = (string: any, length: any) => {
	if (string.length <= length) {
		return string;
	} else {
		return string.substring(0, length) + '...';
	}
};

export const getDiffDate = (strDate: any) => {
	const date = Date.parse(strDate);
	const today = new Date();
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const diffDate = today - date;
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	if (diffDate < 0) {
		return 'Invalid Date';
	} else if (diffDate < 60) {
		return diffDate + 's ago';
	} else if (diffDate < 3600) {
		return Math.ceil(diffDate / 60) + 'm ago';
	} else if (diffDate < 3600 * 24) {
		return Math.ceil(diffDate / 3600) + 'h ago';
	} else {
		return new Date(date).getDate() + ' ' + monthNames[new Date(date).getMonth()];
	}
};

export const getSocialIcon = (str: string) => {
	const socialName = str.toLowerCase();

	switch (socialName) {
		case 'instagram':
			return logoInstagram;

		case 'facebook':
			return logoFacebook;

		case 'twitter':
			return logoTwitter;

		default:
			return '';
	}
};
