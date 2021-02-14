import type { HTMLSlotElement } from '../html';

export interface Slottable {
	readonly assignedSlot: HTMLSlotElement | null;
}
