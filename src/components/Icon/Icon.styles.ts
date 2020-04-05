import { classes } from './Icon.classNames';
import { createStyles } from '@material-ui/core';

export const styles = createStyles({
	icon: {
		display: 'inline-block',
		flexShrink: 0,
		'@global': {
			svg: {
				fill: 'currentColor',
				width: (props: any) => props.width,
				height: (props: any) => props.height,
				display: 'block',
				fontSize: (props: any) => props.height,
				transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
				userSelect: 'none',
				overflow: 'hidden',
				boxSizing: 'border-box',
				shapeRendering: 'geometricPrecision'
			},
			[`.${classes.primaryFillColor}, .${classes.primaryColor}.${classes.fill}`]: {
				fill: (props: any) => props.primaryFillColor || props.primaryColor || props.fillColor || props.color || 'currentColor'
			},
			[`.${classes.primaryStrokeColor}, .${classes.primaryColor}.${classes.stroke}`]: {
				stroke: (props: any) => props.primaryStrokeColor || props.primaryColor || props.strokeColor || props.color || 'currentColor'
			},
			[`.${classes.secondaryFillColor}, .${classes.secondaryColor}.${classes.fill}`]: {
				fill: (props: any) => props.secondaryFillColor || props.secondaryColor || props.fillColor || props.color || 'currentColor'
			},
			[`.${classes.secondaryStrokeColor}, .${classes.secondaryColor}.${classes.stroke}`]: {
				stroke: (props: any) => props.secondaryStrokeColor || props.secondaryColor || props.strokeColor || props.color || 'currentColor'
			}
		}
	}
});
