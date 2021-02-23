import type { ValueOf } from '../@types';

export interface MediaError extends MediaError.Interface {}

/**
 * @exposed Window
 */
export namespace MediaError {
	export interface ErrorCodeLegacyEnum {
		readonly MEDIA_ERR_ABORTED: 1;
		readonly MEDIA_ERR_NETWORK: 2;
		readonly MEDIA_ERR_DECODE: 3;
		readonly MEDIA_ERR_SRC_NOT_SUPPORTED: 4;
	}

	export interface Prototype extends ErrorCodeLegacyEnum {
		readonly code: ValueOf<ErrorCodeLegacyEnum>;
		readonly message: string;
	}

	export type Interface = Prototype;

	export interface Static extends ErrorCodeLegacyEnum {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}
