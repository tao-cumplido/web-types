import type { Event, EventInit } from '../../dom';
import type { FormData } from '../../xhr';

/**
 * @idlType
 * @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#formdataeventinit
 */
export interface FormDataEventInit extends FormDataEvent.State, EventInit {}

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-formdataevent-interface */
export interface FormDataEvent extends FormDataEvent.Interface {}

/** @exposed Window */
export namespace FormDataEvent {
	export interface State {
		formData: FormData;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict: FormDataEventInit): FormDataEvent;
	}
}
