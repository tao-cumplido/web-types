import type { Event, EventInit } from '../../dom';

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-animations-1/#dictdef-animationeventinit
 */
export interface AnimationEventInit extends Partial<AnimationEvent.State>, EventInit {}

/** @spec https://drafts.csswg.org/css-animations-1/#interface-animationevent */
export interface AnimationEvent extends AnimationEvent.Interface {}

/** @exposed Window */
export namespace AnimationEvent {
	export interface State {
		animationName: string;
		elapsedTime: number;
		pseudoElement: string;
	}

	export interface Prototype extends Readonly<State>, Event.Prototype {}

	export type Interface = Prototype & Event.Interface;

	export interface Static extends Event.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: AnimationEventInit): AnimationEvent;
	}
}
