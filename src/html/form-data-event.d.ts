import type { Event } from '../event';
import type { FormData } from '../xhr';

export interface FormDataEvent extends FormDataEvent.Interface {}

/**
 * @exposed Window
 */
export namespace FormDataEvent {
	export interface Init extends Event.Init {
		formData: FormData;
	}

	export interface Prototype extends Event.Prototype {
		readonly formData: FormData;
	}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new (type: string, eventInitDict: Init): FormDataEvent;
	}
}
