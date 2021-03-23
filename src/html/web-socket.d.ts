import type { ValueOf } from '../@types';
import type { EventHandler, EventTarget } from '../dom';
import type { Blob } from '../file';
import type { CloseEvent } from './close-event';
import type { MessageEvent } from './message-event';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/web-sockets.html#binarytype
 */
export type BinaryType = 'blob' | 'arraybuffer';

/** @spec https://html.spec.whatwg.org/multipage/web-sockets.html#the-websocket-interface */
export interface WebSocket extends WebSocket.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace WebSocket {
	export interface ReadyState {
		readonly CONNECTING: 0;
		readonly OPEN: 1;
		readonly CLOSING: 2;
		readonly CLOSED: 3;
	}

	export interface Prototype extends EventTarget.Prototype, ReadyState {
		readonly url: string;
		readonly readyState: ValueOf<ReadyState>;
		readonly bufferedAmount: number;

		readonly extensions: string;
		readonly protocol: string;

		onopen: EventHandler;
		onerror: EventHandler;
		onclose: EventHandler<CloseEvent>;
		onmessage: EventHandler<MessageEvent>;
		binaryType: BinaryType;

		close(code?: number, reason?: string): void;
		send(data: string | Blob | ArrayBuffer | ArrayBufferView): void;
	}

	export type Interface = Prototype & EventTarget.Interface;

	export interface Static extends EventTarget.Static, ReadyState {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(url: string, protocols?: string | string[]): WebSocket;
	}
}
