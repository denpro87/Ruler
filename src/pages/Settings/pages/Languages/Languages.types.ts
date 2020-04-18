export interface ILanguage {
	langName: string;
	langCode: string;
	selected: boolean;
	text: string;
}
export interface ILanguagesState {
	languages: ILanguage[];
	filteredLanguages?: ILanguage[];
	selectedLanguage: string;
}

export interface ILanguagesProps {}
