import { Box, makeStyles } from '@material-ui/core';
import { Button, Page, Text } from 'components';
import { ICommonPageProps } from './CommonPage.types';
import { pagesData } from '../../HowToRide.data';
import { styles } from './CommonPage.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const CommonPage: React.FunctionComponent<ICommonPageProps> = ({ step }) => {
	const history = useHistory();
	const [imagePath, setImagePath] = React.useState<string>('');
	const { formatMessage } = useIntl();
	const classes = useStyles({ step });
	React.useEffect(() => {
		import(`../../images/${pagesData[step].image}.svg`)
			.then(({ default: imagePath }) => {
				if (imagePath) {
					setImagePath(imagePath);
				}
			})
			.catch(() => console.warn(`No iamge with the name \`${step}\` (\`${step}.svg\`) was found.`));
	}, [step]);

	return (
		<Page title="" headerBackgroundProps={{ image: imagePath, className: classes.headerBackground }} pageHeaderClassName={classes.header}>
			<Text className={classes.title}>{formatMessage({ id: pagesData[step].title })}</Text>
			<Text className={classes.description}>{formatMessage({ id: pagesData[step].description })}</Text>
			<Box className={classes.footerWrapper}>
				<Box className={classes.stateWrapper}>
					{[0, 1, 2, 3, 4].map(index => (
						<span key={index} className={clsx({ [classes.stateItem]: true }, { [classes.currentStateItem]: step === index })} />
					))}
				</Box>
				<Button colorType="green" iconName="well-done-checked" compact onClick={() => history.push(pagesData[step].href)}>
					Got it
				</Button>
			</Box>
		</Page>
	);
};
