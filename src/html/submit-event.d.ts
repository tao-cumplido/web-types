import type { Event, EventInit } from '../dom';
import type { HTMLElement } from './elements';

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#submiteventinit */
export interface SubmitEventInit extends EventInit {
	submitter?: HTMLElement | null;
}

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-submitevent-interface */
export interface SubmitEvent extends SubmitEvent.Interface {}

/** @exposed Window */
export namespace SubmitEvent {
	export interface Prototype extends Event.Prototype {
		readonly submitter: HTMLElement | null;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: SubmitEventInit): SubmitEvent;
	}
}
