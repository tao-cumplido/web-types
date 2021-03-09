import type { ValueOf } from '../@types';

/** @spec https://html.spec.whatwg.org/multipage/media.html#mediaerror */
export interface MediaError extends MediaError.Interface {}

/** @exposed Window */
export namespace MediaError {
	export interface ErrorCode {
		readonly MEDIA_ERR_ABORTED: 1;
		readonly MEDIA_ERR_NETWORK: 2;
		readonly MEDIA_ERR_DECODE: 3;
		readonly MEDIA_ERR_SRC_NOT_SUPPORTED: 4;
	}

	export interface Prototype extends ErrorCode {
		readonly code: ValueOf<ErrorCode>;
		readonly message: string;
	}

	export type Interface = Prototype;

	export interface Static extends ErrorCode {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}
