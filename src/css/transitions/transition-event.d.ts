import type { Event, EventInit } from '../../dom';

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-transitions-1/#dictdef-transitioneventinit
 */
export interface TransitionEventInit extends Partial<TransitionEvent.State>, EventInit {}

/** @spec https://drafts.csswg.org/css-transitions-1/#interface-transitionevent-idl */
export interface TransitionEvent extends TransitionEvent.Interface {}

/** @exposed Window */
export namespace TransitionEvent {
	export interface State {
		propertyName: string;
		elapsedTime: number;
		pseudoElement: string;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
	}
}
