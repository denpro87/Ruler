import { Box, List } from '@material-ui/core';
import { ILanguage, ILanguagesProps } from './Languages.types';
import { LanguageItem } from './components';
import { Page, SearchBox, useLanguageContext } from 'components';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Languages.styles';
import React from 'react';

const languages: ILanguage[] = [
	{ langName: 'English', text: 'English (default)', langCode: 'en' },
	{ langName: 'Russian', text: 'Русский', langCode: 'ru' },
	{ langName: 'Catalan', text: 'Catala', langCode: 'sp' },
	{ langName: 'French', text: 'français', langCode: 'fr' },
	{ langName: 'Italian', text: 'Italiano', langCode: 'it' },
	{ langName: 'Malay', text: 'Bahasa Melayu', langCode: 'ma' }
];

const useStyles = makeStyles(styles);

export const Languages: React.FunctionComponent<ILanguagesProps> = () => {
	const classes = useStyles();
	const [filteredLanguages, setFilteredLanguages] = React.useState<ILanguage[]>(languages);
	const { locale: selectedLanguage, changeLanguage: selectLanguage } = useLanguageContext();

	const handleLanguageClick = (langCode: string) => (): void => {
		selectLanguage(langCode);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const currentLanguage = event.target.value.toLowerCase();
		const filteredLangs = languages.filter(language => language.langName.toLowerCase().includes(currentLanguage));
		setFilteredLanguages(filteredLangs);
	};

	return (
		<Page title="Languages" titleSize="large" noHorizontalContentPadding>
			<div className={classes.searchBoxWrapper}>
				<SearchBox className={classes.searchBox} onChange={handleSearchChange} />
			</div>
			<List className={classes.providersList}>
				{filteredLanguages.map(filteredLanguage => (
					<Box key={filteredLanguage.langName}>
						<LanguageItem
							title={filteredLanguage.langName}
							text={filteredLanguage.text}
							code={filteredLanguage.langCode}
							selected={selectedLanguage === filteredLanguage.langCode}
							onClick={handleLanguageClick(filteredLanguage.langCode)}
						/>
					</Box>
				))}
			</List>
		</Page>
	);
};
