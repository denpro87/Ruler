import enMessage from '../../languages/en.json';
import ruMessage from '../../languages/ru.json';

const i18n: Record<string, Record<string, string>> = {
	en: enMessage,
	ru: ruMessage
};

export const getMessages = (locale: string = 'en-US'): Record<string, string> => {
	const [language] = locale.split('-');

	return i18n[language] || i18n.en;
};
