import type { Event } from '../event';
import type { HTMLElement } from './html-element';

export interface SubmitEvent extends SubmitEvent.Interface {}

/**
 * @exposed Window
 */
export namespace SubmitEvent {
	export interface Init extends Event.Init {
		submitter?: HTMLElement | null;
	}

	export interface Prototype extends Event.Prototype {
		readonly submitter: HTMLElement | null;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (type: string, eventInitDict?: Init): SubmitEvent;
	}
}
