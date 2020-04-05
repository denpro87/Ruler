import { CSSProperties } from '@material-ui/styles';
import {
	SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_HEIGHT,
	SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_BOTTOM,
	SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_LEFT,
	SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_WIDTH,
	SPLASH_PAGE_INITIAL_HEIGHT,
	SPLASH_PAGE_INITIAL_WIDTH,
	SPLASH_PAGE_LOGO_INITIAL_HEIGHT,
	SPLASH_PAGE_LOGO_INITIAL_WIDTH,
	SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_HEIGHT,
	SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_RIGHT,
	SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_TOP,
	SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_WIDTH
} from './Splash.variables';
import { createStyles } from '@material-ui/core';
import { percentage } from 'styles';

const page: CSSProperties = {
	overflow: 'hidden'
};

const logoContainer: CSSProperties = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	whiteSpace: 'nowrap',
	width: percentage(SPLASH_PAGE_LOGO_INITIAL_WIDTH / SPLASH_PAGE_INITIAL_WIDTH),
	height: percentage(SPLASH_PAGE_LOGO_INITIAL_HEIGHT / SPLASH_PAGE_INITIAL_HEIGHT)
};

const topBackgroundElementContainer: CSSProperties = {
	position: 'absolute',
	whiteSpace: 'nowrap',
	right: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_RIGHT / SPLASH_PAGE_INITIAL_WIDTH),
	top: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_POSITION_TOP / SPLASH_PAGE_INITIAL_HEIGHT),
	width: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_WIDTH / SPLASH_PAGE_INITIAL_WIDTH),
	height: percentage(SPLASH_PAGE_TOP_BACKGROUND_ELEMENT_INITIAL_HEIGHT / SPLASH_PAGE_INITIAL_HEIGHT)
};

const bottomBackgroundElementContainer: CSSProperties = {
	position: 'absolute',
	whiteSpace: 'nowrap',
	left: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_LEFT / SPLASH_PAGE_INITIAL_WIDTH),
	bottom: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_POSITION_BOTTOM / SPLASH_PAGE_INITIAL_HEIGHT),
	width: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_WIDTH / SPLASH_PAGE_INITIAL_WIDTH),
	height: percentage(SPLASH_PAGE_BOTTOM_BACKGROUND_ELEMENT_INITIAL_HEIGHT / SPLASH_PAGE_INITIAL_HEIGHT)
};

const image: CSSProperties = {
	width: 'auto',
	height: 'auto',
	maxWidth: '100%',
	maxHeight: '100%',
	userSelect: 'none',
	userDrag: 'none',
	imageRendering: 'optimizeQuality' as any
};

export const styles = createStyles({
	page,
	logoContainer,
	topBackgroundElementContainer,
	bottomBackgroundElementContainer,
	image
});
