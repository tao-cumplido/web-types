import type { HTMLSlotElement } from '../html/html-slot-element';

export interface Slottable {
	readonly assignedSlot: HTMLSlotElement | null;
}
