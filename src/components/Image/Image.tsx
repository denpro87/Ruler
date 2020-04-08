import { IImageProps } from './Image.types';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Image.styles';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Image: React.FunctionComponent<IImageProps> = ({ className, responsive, src, srcSet, x2, x3, alt }) => {
	const classes = useStyles({
		responsive
	});

	srcSet = Array.isArray(srcSet) ? srcSet : srcSet ? [srcSet] : [];

	if (x2) {
		srcSet.push(typeof x2 === 'boolean' ? `${src} x2` : x2);
	}

	if (x3) {
		srcSet.push(typeof x3 === 'boolean' ? `${src} x3` : x3);
	}

	return <img className={clsx(classes.image, className)} src={src} alt={alt || ''} srcSet={srcSet.join(',')} />;
};
