import { Box, Typography, makeStyles } from '@material-ui/core';
import { IProviderDetailProps } from './ProviderDetail.types';
import { styles } from './ProviderDetail.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const ProviderDetail: React.FunctionComponent<IProviderDetailProps> = ({ title, paragraphs, image }) => {
	const classes = useStyles();

	return (
		<Box className={classes.provider}>
			<Box className={classes.innerContent}>
				<Typography variant="h2">{title}</Typography>
				{paragraphs.map(paragraph => {
					return (
						<Box className={classes.section} key={paragraph.title}>
							<Box className={classes.li}>
								<img src={image} alt={title} />
								<Typography variant="h6">{paragraph.title}</Typography>
							</Box>
							<Box className={classes.text}>
								<Typography variant="body1">{paragraph.text}</Typography>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};
