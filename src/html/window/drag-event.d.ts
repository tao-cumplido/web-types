import type { MouseEvent, MouseEventInit } from '../../ui-events';
import type { DataTransfer } from './data-transfer';

/** @idlType */
export interface DragEventInit extends Partial<DragEvent.State>, MouseEventInit {}

/** @spec https://html.spec.whatwg.org/multipage/dnd.html#the-dragevent-interface */
export interface DragEvent extends DragEvent.Interface {}

/** @exposed Window */
export namespace DragEvent {
	export interface State {
		dataTransfer: DataTransfer | null;
	}

	export interface Prototype extends Readonly<State>, MouseEvent.Prototype {}

	export type Interface = Prototype & MouseEvent.Interface;

	export interface Static extends MouseEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: DragEventInit): DragEvent;
	}
}
