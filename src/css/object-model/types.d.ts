/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom-view-1/#enumdef-scrollbehavior
 */
export type ScrollBehavior = 'auto' | 'smooth';

/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom-view-1/#dictdef-scrolloptions
 */
export interface ScrollOptions {
	behavior?: ScrollBehavior;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom-view-1/#dictdef-scrolltooptions
 */
export interface ScrollToOptions extends ScrollOptions {
	left?: number;
	top?: number;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom-view-1/#enumdef-scrolllogicalposition
 */
export type ScrollLogicalPosition = 'start' | 'end' | 'center' | 'nearest';

/**
 * @idlType
 * @spec https://drafts.csswg.org/cssom-view-1/#dictdef-scrollintoviewoptions
 */
export interface ScrollIntoViewOptions extends ScrollOptions {
	block?: ScrollLogicalPosition;
	inline?: ScrollLogicalPosition;
}
