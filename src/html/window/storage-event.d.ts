import type { Event, EventInit } from '../../dom';
import type { Storage } from './storage';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/webstorage.html#storageeventinit
 */
export interface StorageEventInit extends Partial<StorageEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/webstorage.html#the-storageevent-interface */
export interface StorageEvent extends StorageEvent.Interface {}

/** @exposed Window */
export namespace StorageEvent {
	export interface State {
		key: string | null;
		oldValue: string | null;
		newValue: string | null;
		url: string;
		storageArea: Storage | null;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {
		readonly storageArea: Storage.NamedProperties | null;
		initStorageEvent(
			type: string,
			bubbles?: boolean,
			cancelable?: boolean,
			key?: string | null,
			oldValue?: string | null,
			newValue?: string | null,
			url?: string,
			storageArea?: Storage | null,
		): void;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: StorageEventInit): StorageEvent;
	}
}
