import { CSSFontProperties } from 'types';

export type TextStyles = Omit<ITextProps, 'textStyles'>;

export interface ITextProps extends CSSFontProperties {
	className?: string;
	component?: 'span' | 'p' | string;
	componentProps?: object;
	block?: boolean;
	nowrap?: boolean;
	textStyles?: TextStyles;
	inheritStyles?: boolean;
}

export type ParagraphProps = Omit<ITextProps, 'component' | 'block'>;
