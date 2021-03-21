import type { Event, EventInit } from '../../dom';
import type { HTMLElement } from '../elements';

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#submiteventinit */
export interface SubmitEventInit extends Partial<SubmitEvent.State>, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-submitevent-interface */
export interface SubmitEvent extends SubmitEvent.Interface {}

/** @exposed Window */
export namespace SubmitEvent {
	export interface State {
		submitter: HTMLElement | null;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: SubmitEventInit): SubmitEvent;
	}
}
