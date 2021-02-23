import type { Blob, File } from '../file';
import type { HTMLFormElement } from '../html';
import type { KeyValueIterable } from '../iterable';

export interface FormData extends FormData.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace FormData {
	export type FormDataEntryValue = File | string;

	export interface Prototype extends KeyValueIterable<string, FormDataEntryValue> {
		append(name: string, value: string): void;
		append(name: string, blobValue: Blob, filename?: string): void;
		delete(name: string): void;
		get(name: string): FormDataEntryValue | null;
		getAll(name: string): FormDataEntryValue[];
		has(name: string): boolean;
		set(name: string, value: string): void;
		set(name: string, blobValue: Blob, filename?: string): void;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (form?: HTMLFormElement): FormData;
	}
}
