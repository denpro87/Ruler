import { WithStyles } from '@material-ui/core/styles';
import { styles } from './Languages.styles';

export interface ILanguage {
	langName: string;
	langCode: string;
	text: string;
}
export interface ILanguagesState {
	filteredLanguages?: ILanguage[];
	selectedLanguage: string;
}

export type ILanguagesProps = WithStyles<typeof styles>;
