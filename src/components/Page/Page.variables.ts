export const DEFAULT_PAGE_BACKGROUND_COLOR = '#FFF';
export const DEFAULT_PAGE_SAFE_AREA_TOP = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-top')) || 0;
export const DEFAULT_PAGE_SAFE_AREA_BOTTOM =
	parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-bottom')) || 0;
