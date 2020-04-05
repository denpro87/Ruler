export declare global {
	// eslint-disable-next-line @typescript-eslint/interface-name-prefix
	interface Document {
		fonts?: {
			onloadingdone?: () => void;
		};
	}
}

export type FontSize =
	| 'medium'
	| 'xx-small'
	| 'x-small'
	| 'small'
	| 'large'
	| 'x-large'
	| 'xx-large'
	| 'smaller'
	| 'larger'
	| 'inherit'
	| 'initial'
	| number;

export type CSSFontProperties = Partial<
	Pick<
		CSSProperties,
		'fontStretch' | 'fontStyle' | 'fontVariant' | 'fontWeight' | 'lineHeight' | 'fontFamily' | 'letterSpacing' | 'color'
	> & {
		fontSize: FontSize;
	}
>;
