/** @Window */

import type { WebIDLIterable } from '../idl';

export interface DOMTokenList extends WebIDLIterable<number, string> {
	[index: number]: string | null;

	readonly length: number;

	value: string;

	item(index: number): string | null;
	contains(token: string): boolean;
	add(...tokens: string[]): void;
	remove(...tokens: string[]): void;
	toggle(token: string, force?: boolean): boolean;
	replace(token: string, newToken: string): boolean;
	supports(token: string): boolean;
}
