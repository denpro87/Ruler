import { IImageProps, ResponsiveImageProps } from './Image.types';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Image.styles';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Image: React.FunctionComponent<IImageProps> = ({
	className,
	responsive,
	width,
	height,
	maxWidth = responsive ? '100%' : undefined,
	maxHeight,
	src,
	srcSet,
	x2,
	x3,
	alt
}) => {
	const classes = useStyles({
		width,
		height,
		maxWidth,
		maxHeight,
		responsive
	});

	srcSet = Array.isArray(srcSet) ? srcSet : srcSet ? [srcSet] : [];

	if (x2) {
		srcSet.push(x2);
	}

	if (x3) {
		srcSet.push(x3);
	}

	if (srcSet.length > 0) {
		srcSet.unshift(`${src} x1`);
	}

	return (
		<img className={clsx(classes.image, className)} src={src} alt={alt || ''} srcSet={srcSet.length > 0 ? srcSet.join(',') : undefined} />
	);
};

export const ResponsiveImage: React.FunctionComponent<ResponsiveImageProps> = props => <Image responsive {...props} />;
