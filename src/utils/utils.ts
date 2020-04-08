export const unifyIdentifier = (identifier: string) =>
	identifier
		.trim()
		.toLowerCase()
		.replace(/[\W-_]/g, '');
