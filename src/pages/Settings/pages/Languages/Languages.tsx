import { Box, List } from '@material-ui/core';
import { ILanguage, ILanguagesProps, ILanguagesState } from './Languages.types';
import { LanguageItem } from './components';
import { Page, SearchBox } from 'components';
import { styles } from './Languages.styles';
import { withStyles } from '@material-ui/styles';
import React from 'react';

const languages: ILanguage[] = [
	{ langName: 'English', text: 'English (default)', langCode: 'en' },
	{ langName: 'Russian', text: 'Русский', langCode: 'ru' },
	{ langName: 'Catalan', text: 'Catala', langCode: 'sp' },
	{ langName: 'French', text: 'français', langCode: 'fr' },
	{ langName: 'Italian', text: 'Italiano', langCode: 'it' },
	{ langName: 'Malay', text: 'Bahasa Melayu', langCode: 'ma' }
];

export class LanguagesPage extends React.Component<ILanguagesProps, ILanguagesState, ILanguage> {
	state = {
		selectedLanguage: 'en',
		filteredLanguages: languages
	};

	private handleLanguageClick = (langCode: string) => (): void => {
		this.setState({ selectedLanguage: langCode });
	};

	private handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const currentLanguage = event.target.value.toLowerCase();
		const filteredLanguages = languages.filter(language => language.langName.toLowerCase().includes(currentLanguage));
		this.setState({ filteredLanguages });
	};

	render(): JSX.Element {
		const { classes } = this.props;

		return (
			<Page title="Languages" titleSize="large" noHorizontalContentPadding>
				<div className={classes.searchBoxWrapper}>
					<SearchBox className={classes.searchBox} onChange={this.handleSearchChange} />
				</div>
				<List className={classes.providersList}>
					{this.state.filteredLanguages.map(filteredLanguage => {
						return (
							<Box key={filteredLanguage.langName}>
								<LanguageItem
									title={filteredLanguage.langName}
									text={filteredLanguage.text}
									code={filteredLanguage.langCode}
									selected={this.state.selectedLanguage === filteredLanguage.langCode}
									onClick={this.handleLanguageClick(filteredLanguage.langCode)}
								/>
							</Box>
						);
					})}
				</List>
			</Page>
		);
	}
}

export const Languages = withStyles(styles)(LanguagesPage);
