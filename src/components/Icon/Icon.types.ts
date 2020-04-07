export type IconComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

export type IconName = string | 'add';

export type IconColorType = 'default' | 'green' | 'black' | 'white';

export type ColoredIconProps = Omit<IIconProps, 'colorType'>;

export interface IIconProps {
	iconName: IconName;

	colorType?: IconColorType;

	className?: string;

	size?: number;

	width?: number;

	height?: number;

	/**
	 * @description Icon color.
	 */
	color?: string;

	/**
	 * @description Icon fill color.
	 */
	fillColor?: string;

	/**
	 * @description Icon stroke color.
	 */
	strokeColor?: string;

	/**
	 * @description Primary color.
	 */
	primaryColor?: string;

	/**
	 * @description Primary fill color.
	 */
	primaryFillColor?: string;

	/**
	 * @description Primary stroke color.
	 */
	primaryStrokeColor?: string;

	/**
	 * @description Secondary color.
	 */
	secondaryColor?: string;

	/**
	 * @description Secondary fill color.
	 */
	secondaryFillColor?: string;

	/**
	 * @description Secondary stroke color.
	 */
	secondaryStrokeColor?: string;
}
