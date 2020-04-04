import { IconColorType } from './Icon.types';
import { createStyles } from '@material-ui/core';

export const DEFAULT_ICON_SIZE = 30;
export const BLACK_COLOR_TYPE_PRIMARY_COLOR = '#181C19';
export const BLACK_COLOR_TYPE_SECONDARY_COLOR = '#F8CA06';
export const GREEN_COLOR_TYPE_COLOR = '#CAF1DD';
export const WHITE_COLOR_TYPE_COLOR = '#FFF';

export const classes = {
	fill: '--fill',
	stroke: '--stroke',
	primaryColor: '--primary-color',
	primaryFillColor: '--primary-fill-color',
	primaryStrokeColor: '--primary-stroke-color',
	secondaryColor: '--secondary-color',
	secondaryFillColor: '--secondary-fill-color',
	secondaryStrokeColor: '--secondary-stroke-color'
};

export const getColorFromColorType = (colorType: IconColorType, colorSubject: 'primary' | 'secondary' = 'primary'): string | undefined => {
	switch (colorType) {
		case 'black':
			return colorSubject === 'primary' ? BLACK_COLOR_TYPE_PRIMARY_COLOR : BLACK_COLOR_TYPE_SECONDARY_COLOR;

		case 'green':
			return GREEN_COLOR_TYPE_COLOR;

		case 'white':
			return WHITE_COLOR_TYPE_COLOR;
	}

	return undefined;
};

export const styles = createStyles({
	icon: {
		display: 'inline-block',
		flexShrink: 0,
		'@global': {
			svg: {
				fill: 'currentColor',
				width: (props: any): number | string => props.width,
				height: (props: any): number | string => props.height,
				display: 'block',
				fontSize: (props: any): number | string => props.height,
				transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
				userSelect: 'none',
				overflow: 'hidden',
				boxSizing: 'border-box',
				shapeRendering: 'geometricPrecision'
			},
			[`.${classes.primaryFillColor}, .${classes.primaryColor}.${classes.fill}`]: {
				fill: (props: any): string => props.primaryFillColor || props.primaryColor || props.fillColor || props.color || 'currentColor'
			},
			[`.${classes.primaryStrokeColor}, .${classes.primaryColor}.${classes.stroke}`]: {
				stroke: (props: any): string => props.primaryStrokeColor || props.primaryColor || props.strokeColor || props.color || 'currentColor'
			},
			[`.${classes.secondaryFillColor}, .${classes.secondaryColor}.${classes.fill}`]: {
				fill: (props: any): string => props.secondaryFillColor || props.secondaryColor || props.fillColor || props.color || 'currentColor'
			},
			[`.${classes.secondaryStrokeColor}, .${classes.secondaryColor}.${classes.stroke}`]: {
				stroke: (props: any): string =>
					props.secondaryStrokeColor || props.secondaryColor || props.strokeColor || props.color || 'currentColor'
			}
		}
	}
});
