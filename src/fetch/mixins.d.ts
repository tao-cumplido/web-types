import type { Blob } from '../file';
import type { ReadableStream } from '../streams';
import type { FormData } from '../xhr';
import type { Json } from './types';

/**
 * @idlType
 * @spec https://fetch.spec.whatwg.org/#body-mixin
 */
export interface Body {
	readonly body: ReadableStream | null;
	readonly bodyUsed: boolean;
	arrayBuffer(): Promise<ArrayBuffer>;
	blob(): Promise<Blob>;
	formData(): Promise<FormData>;
	json(): Promise<Json>;
	text(): Promise<string>;
}
