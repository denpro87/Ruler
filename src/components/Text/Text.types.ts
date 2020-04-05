import { CSSFontProperties } from 'types';

export type TextStyles = Omit<ITextProps, 'textStyles'>;

export interface ITextProps extends CSSFontProperties {
	className?: string;
	component?: 'span' | 'p';
	block?: boolean;
	nowrap?: boolean;

	textStyles?: TextStyles;
}

export type ParagraphProps = Omit<ITextProps, 'component' | 'block'>;
