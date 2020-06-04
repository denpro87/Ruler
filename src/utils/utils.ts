export const unifyIdentifier = (identifier: string) =>
	identifier
		.trim()
		.toLowerCase()
		.replace(/[\W-_]/g, '');

export const validateEmail = (email: string): boolean => {
	const regExpForEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return regExpForEmail.test(email);
};

export const validatePassword = (password: string): boolean => {
	const regExpForPassword = /^(?=(?:.*?[0-9]){2})(?=.*[A-Z])(?=.*\W)(?=.{6,}$)/;

	return regExpForPassword.test(password);
};

export const validateNumber = (num: string): boolean => {
	const regExpForNumber = /^(?=.*[0-9])/;

	return regExpForNumber.test(num);
};
