import type { ReferrerPolicy } from '../../fetch';
import type { CORSSettingsAttribute } from '../types';
import type { HTMLElement } from './html-element';

/**
 * @spec https://html.spec.whatwg.org/multipage/scripting.html#the-script-element
 * @spec https://html.spec.whatwg.org/multipage/obsolete.html#HTMLScriptElement-partial
 */
export interface HTMLScriptElement extends HTMLScriptElement.Interface {}

/** @exposed Window */
export namespace HTMLScriptElement {
	export interface Prototype extends HTMLElement.Prototype {
		src: string;
		type: string;
		noModule: boolean;
		async: boolean;
		defer: boolean;
		crossOrigin: CORSSettingsAttribute | null;
		text: string;
		integrity: string;
		referrerPolicy: ReferrerPolicy;

		/** @deprecated */
		charset: string;
		/** @deprecated */
		event: string;
		/** @deprecated */
		htmlFor: string;
	}

	export type Interface = Prototype & HTMLElement.Interface;

	export interface Static extends HTMLElement.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): HTMLScriptElement;
	}
}
