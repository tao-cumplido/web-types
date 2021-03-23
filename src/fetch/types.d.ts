import type { Blob } from '../file';
import type { ReadableStream } from '../streams';
import type { URLSearchParams } from '../url';
import type { BufferSource } from '../web-idl';
import type { FormData } from '../xhr';

/** @spec https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit */
export type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;

/** @spec https://fetch.spec.whatwg.org/#bodyinit */
export type BodyInit = ReadableStream | XMLHttpRequestBodyInit;

/** @spec https://fetch.spec.whatwg.org/#requestdestination */
export type RequestDestination =
	| ''
	| 'audio'
	| 'audioworklet'
	| 'document'
	| 'embed'
	| 'font'
	| 'frame'
	| 'iframe'
	| 'image'
	| 'manifest'
	| 'object'
	| 'paintworklet'
	| 'report'
	| 'script'
	| 'serviceworker'
	| 'sharedworker'
	| 'style'
	| 'track'
	| 'video'
	| 'worker'
	| 'xslt';

/** @spec https://fetch.spec.whatwg.org/#requestmode */
export type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';

/** @spec https://fetch.spec.whatwg.org/#requestcredentials */
export type RequestCredentials = 'omit' | 'same-origin' | 'include';

/** @spec https://fetch.spec.whatwg.org/#requestcache */
export type RequestCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';

/** @spec https://fetch.spec.whatwg.org/#requestredirect */
export type RequestRedirect = 'follow' | 'error' | 'manual';

/** @spec https://fetch.spec.whatwg.org/#responsetype */
export type ResponseType = 'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect';

/** @spec https://fetch.spec.whatwg.org/#concept-potential-destination */
export type PotentialDestination = 'fetch' | Exclude<RequestDestination, ''>;

/** @spec https://w3c.github.io/webappsec-referrer-policy/#enumdef-referrerpolicy */
export type ReferrerPolicy =
	| ''
	| 'no-referrer'
	| 'no-referrer-when-downgrade'
	| 'same-origin'
	| 'origin'
	| 'strict-origin'
	| 'origin-when-cross-origin'
	| 'strict-origin-when-cross-origin'
	| 'unsafe-url';

/** @nonIdlType */
export type Json = null | number | boolean | string | Json[] | { [key: string]: Json }; // eslint-disable-line @typescript-eslint/consistent-indexed-object-style
