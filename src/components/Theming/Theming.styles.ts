import { createStyles } from '@material-ui/core';

/* Ionic Variables and Theming. For more info, please see:
http://ionicframework.com/docs/theming/ */
export const styles = createStyles({
	'@global': {
		body: {
			background: 'red'
		},
		/** Ionic CSS Variables **/

		':root': {
			/** primary **/
			'--IonColorPrimary': '#3880ff',
			'--IonColorPrimaryRgb': '56, 128, 255',
			'--IonColorPrimaryContrast': '#ffffff',
			'--IonColorPrimaryContrastRgb': '255, 255, 255',
			'--IonColorPrimaryShade': '#3171e0',
			'--IonColorPrimaryTint': '#4c8dff',

			/** secondary **/
			'--IonColorSecondary': '#3dc2ff',
			'--IonColorSecondaryRgb': '61, 194, 255',
			'--IonColorSecondaryContrast': '#ffffff',
			'--IonColorSecondaryContrastRgb': '255, 255, 255',
			'--IonColorSecondaryShade': '#36abe0',
			'--IonColorSecondaryTint': '#50c8ff',

			/** tertiary **/
			'--IonColorTertiary': '#5260ff',
			'--IonColorTertiaryRgb': '82, 96, 255',
			'--IonColorTertiaryContrast': '#ffffff',
			'--IonColorTertiaryContrastRgb': '255, 255, 255',
			'--IonColorTertiaryShade': '#4854e0',
			'--IonColorTertiaryTint': '#6370ff',

			/** success **/
			'--IonColorSuccess': '#2dd36f',
			'--IonColorSuccessRgb': '45, 211, 111',
			'--IonColorSuccessContrast': '#ffffff',
			'--IonColorSuccessContrastRgb': '255, 255, 255',
			'--IonColorSuccessShade': '#28ba62',
			'--IonColorSuccessTint': '#42d77d',

			/** warning **/
			'--IonColorWarning': '#ffc409',
			'--IonColorWarningRgb': '255, 196, 9',
			'--IonColorWarningContrast': '#000000',
			'--IonColorWarningContrastRgb': '0, 0, 0',
			'--IonColorWarningShade': '#e0ac08',
			'--IonColorWarningTint': '#ffca22',

			/** danger **/
			'--IonColorDanger': '#eb445a',
			'--IonColorDangerRgb': '235, 68, 90',
			'--IonColorDangerContrast': '#ffffff',
			'--IonColorDangerContrastRgb': '255, 255, 255',
			'--IonColorDangerShade': '#cf3c4f',
			'--IonColorDangerTint': '#ed576b',

			/** dark **/
			'--IonColorDark': '#222428',
			'--IonColorDarkRgb': '34, 36, 40',
			'--IonColorDarkContrast': '#ffffff',
			'--IonColorDarkContrastRgb': '255, 255, 255',
			'--IonColorDarkShade': '#1e2023',
			'--IonColorDarkTint': '#383a3e',

			/** medium **/
			'--IonColorMedium': '#92949c',
			'--IonColorMediumRgb': '146, 148, 156',
			'--IonColorMediumContrast': '#ffffff',
			'--IonColorMediumContrastRgb': '255, 255, 255',
			'--IonColorMediumShade': '#808289',
			'--IonColorMediumTint': '#9d9fa6',

			/** light **/
			'--IonColorLight': '#f4f5f8',
			'--IonColorLightRgb': '244, 245, 248',
			'--IonColorLightContrast': '#000000',
			'--IonColorLightContrastRgb': '0, 0, 0',
			'--IonColorLightShade': '#d7d8da',
			'--IonColorLightTint': '#f5f6f9'
		},
		'@media (prefers-color-scheme: dark)': {
			/*
			 * Dark Colors
			 * -------------------------------------------
			 */

			body: {
				/** primary **/
				'--IonColorPrimary': '#428cff',
				'--IonColorPrimaryRgb': '66, 140, 255',
				'--IonColorPrimaryContrast': '#ffffff',
				'--IonColorPrimaryContrastRgb': '255, 255, 255',
				'--IonColorPrimaryShade': '#3a7be0',
				'--IonColorPrimaryTint': '#5598ff',

				/** secondary **/
				'--IonColorSecondary': '#50c8ff',
				'--IonColorSecondaryRgb': '80, 200, 255',
				'--IonColorSecondaryContrast': '#ffffff',
				'--IonColorSecondaryContrastRgb': '255, 255, 255',
				'--IonColorSecondaryShade': '#46b0e0',
				'--IonColorSecondaryTint': '#62ceff',

				/** tertiary **/
				'--IonColorTertiary': '#6a64ff',
				'--IonColorTertiaryRgb': '106, 100, 255',
				'--IonColorTertiaryContrast': '#ffffff',
				'--IonColorTertiaryContrastRgb': '255, 255, 255',
				'--IonColorTertiaryShade': '#5d58e0',
				'--IonColorTertiaryTint': '#7974ff',

				/** success **/
				'--IonColorSuccess': '#2fdf75',
				'--IonColorSuccessRgb': '47, 223, 117',
				'--IonColorSuccessContrast': '#000000',
				'--IonColorSuccessContrastRgb': '0, 0, 0',
				'--IonColorSuccessShade': '#29c467',
				'--IonColorSuccessTint': '#44e283',

				/** warning **/
				'--IonColorWarning': '#ffd534',
				'--IonColorWarningRgb': '255, 213, 52',
				'--IonColorWarningContrast': '#000000',
				'--IonColorWarningContrastRgb': '0, 0, 0',
				'--IonColorWarningShade': '#e0bb2e',
				'--IonColorWarningTint': '#ffd948',

				/** danger **/
				'--IonColorDanger': '#ff4961',
				'--IonColorDangerRgb': '255, 73, 97',
				'--IonColorDangerContrast': '#ffffff',
				'--IonColorDangerContrastRgb': '255, 255, 255',
				'--IonColorDangerShade': '#e04055',
				'--IonColorDangerTint': '#ff5b71',

				/** dark **/
				'--IonColorDark': '#f4f5f8',
				'--IonColorDarkRgb': '244, 245, 248',
				'--IonColorDarkContrast': '#000000',
				'--IonColorDarkContrastRgb': '0, 0, 0',
				'--IonColorDarkShade': '#d7d8da',
				'--IonColorDarkTint': '#f5f6f9',

				/** medium **/
				'--IonColorMedium': '#989aa2',
				'--IonColorMediumRgb': '152, 154, 162',
				'--IonColorMediumContrast': '#000000',
				'--IonColorMediumContrastRgb': '0, 0, 0',
				'--IonColorMediumShade': '#86888f',
				'--IonColorMediumTint': '#a2a4ab',

				/** light **/
				'--IonColorLight': '#222428',
				'--IonColorLightRgb': '34, 36, 40',
				'--IonColorLightContrast': '#ffffff',
				'--IonColorLightContrastRgb': '255, 255, 255',
				'--IonColorLightShade': '#1e2023',
				'--IonColorLightTint': '#383a3e'
			},

			/*
			 * iOS Dark Theme
			 * -------------------------------------------
			 */
			'.ios body': {
				'--IonBackgroundColor': '#000000',
				'--IonBackgroundColorRgb': '0, 0, 0',
				'--IonTextColor': '#ffffff',
				'--IonTextColorRgb': '255, 255, 255',
				'--IonColorStep50': '#0d0d0d',
				'--IonColorStep100': '#1a1a1a',
				'--IonColorStep150': '#262626',
				'--IonColorStep200': '#333333',
				'--IonColorStep250': '#404040',
				'--IonColorStep300': '#4d4d4d',
				'--IonColorStep350': '#595959',
				'--IonColorStep400': '#666666',
				'--IonColorStep450': '#737373',
				'--IonColorStep500': '#808080',
				'--IonColorStep550': '#8c8c8c',
				'--IonColorStep600': '#999999',
				'--IonColorStep650': '#a6a6a6',
				'--IonColorStep700': '#b3b3b3',
				'--IonColorStep750': '#bfbfbf',
				'--IonColorStep800': '#cccccc',
				'--IonColorStep850': '#d9d9d9',
				'--IonColorStep900': '#e6e6e6',
				'--IonColorStep950': '#f2f2f2',
				'--IonToolbarBackground': '#0d0d0d',
				'--IonItemBackground': '#000000'
			},

			/*
			 * Material Design Dark Theme
			 * -------------------------------------------
			 */
			'.md body': {
				'--IonBackgroundColor': '#121212',
				'--IonBackgroundColorRgb': '18, 18, 18',
				'--IonTextColor': '#ffffff',
				'--IonTextColorRgb': '255, 255, 255',
				'--IonBorderColor': '#222222',
				'--IonColorStep50': '#1e1e1e',
				'--IonColorStep100': '#2a2a2a',
				'--IonColorStep150': '#363636',
				'--IonColorStep200': '#414141',
				'--IonColorStep250': '#4d4d4d',
				'--IonColorStep300': '#595959',
				'--IonColorStep350': '#656565',
				'--IonColorStep400': '#717171',
				'--IonColorStep450': '#7d7d7d',
				'--IonColorStep500': '#898989',
				'--IonColorStep550': '#949494',
				'--IonColorStep600': '#a0a0a0',
				'--IonColorStep650': '#acacac',
				'--IonColorStep700': '#b8b8b8',
				'--IonColorStep750': '#c4c4c4',
				'--IonColorStep800': '#d0d0d0',
				'--IonColorStep850': '#dbdbdb',
				'--IonColorStep900': '#e7e7e7',
				'--IonColorStep950': '#f3f3f3',
				'--IonItemBackground': '#1e1e1e',
				'--IonToolbarBackground': '#1f1f1f',
				'--IonTabBarBackground': '#1f1f1f'
			},

			'ion-title.title-large': {
				'--Color': 'white'
			}
		}
	}
});
