import type { MouseEvent, MouseEventInit } from '../ui-events';
import type { DataTransfer } from './data-transfer';

export interface DragEventInit extends MouseEventInit {
	dataTransfer?: DataTransfer | null;
}

/** @spec https://html.spec.whatwg.org/multipage/dnd.html#the-dragevent-interface */
export interface DragEvent extends DragEvent.Interface {}

/** @exposed Window */
export namespace DragEvent {
	export interface Prototype extends MouseEvent.Prototype {
		readonly dataTransfer: DataTransfer | null;
	}

	export type Interface = Prototype & MouseEvent.Interface;

	export interface Static extends MouseEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (type: string, eventInitDict?: DragEventInit): DragEvent;
	}
}
