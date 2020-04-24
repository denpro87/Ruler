import { Box, makeStyles } from '@material-ui/core';
import { Button, Page, Text } from 'components';
import { ICommonPageProps } from './CommonPage.types';
import { pagesData } from '../../pages.data';
import { styles } from './CommonPage.styles';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const CommonPage: React.FunctionComponent<ICommonPageProps> = ({ step }) => {
	const [imagePath, setImagePath] = React.useState<string>('');
	const { formatMessage } = useIntl();
	const classes = useStyles({ imagePath });
	React.useEffect(() => {
		import(`../../images/${step}.svg`)
			.then(({ default: imagePath }) => {
				if (imagePath) {
					setImagePath(imagePath);
				}
			})
			.catch(() => console.warn(`No iamge with the name \`${step}\` (\`${step}.svg\`) was found.`));
	}, [step]);

	return (
		<Page title="" pageHeaderClassName={classes.header}>
			<Text className={classes.title}>{formatMessage({ id: pagesData[step].title })}</Text>
			<Text className={classes.description}>{formatMessage({ id: pagesData[step].description })}</Text>
			<Box className={classes.footerWrapper}>
				<Box className={classes.stateWrapper}>
					{[0, 1, 2, 3, 4].map(index => (
						<span key={index} className={clsx({ [classes.stateItem]: true }, { [classes.currentStateItem]: step === index })} />
					))}
				</Box>
				<Button className={classes.button} colorType="green" iconName="well-done-checked" compact href={pagesData[step].href}>
					Got it
				</Button>
			</Box>
		</Page>
	);
};
