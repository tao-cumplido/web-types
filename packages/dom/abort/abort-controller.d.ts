/** @Window @Worker */

import type { AbortSignal } from '../abort';

export declare class AbortController {
	readonly signal: AbortSignal;
	abort(): void;
}
