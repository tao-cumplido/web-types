import type { Event, EventInit } from '../event';
import type { FormData } from '../xhr';

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#formdataeventinit */
export interface FormDataEventInit extends EventInit {
	formData: FormData;
}

/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-formdataevent-interface */
export interface FormDataEvent extends FormDataEvent.Interface {}

/** @exposed Window */
export namespace FormDataEvent {
	export interface Prototype extends Event.Prototype {
		readonly formData: FormData;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (type: string, eventInitDict: FormDataEventInit): FormDataEvent;
	}
}
