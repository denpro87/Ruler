import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';

export const DEFAULT_PAGE_BACKGROUND = '#fff';

const page: CreateCSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	margin: 0,
	padding: (props: any) => (props.fullPage ? 0 : 20),
	overflow: 'auto',
	background: (props: any) => props.background,
	backgroundColor: (props: any) => props.backgroundColor,
	textAlign: 'left'
};

const pageHeader: CSSProperties = {
	display: 'block',
	width: '100%',
	height: 'auto',
	paddingTop: 10,
	paddingBottom: 10,
	flexGrow: 0,
	flexShrink: 0
};

const pageContent: CSSProperties = {
	display: 'block',
	width: '100%',
	height: 'auto',
	flexGrow: 1,
	flexShrink: 0
};

export const styles = createStyles({
	page,
	pageHeader,
	pageContent
});
