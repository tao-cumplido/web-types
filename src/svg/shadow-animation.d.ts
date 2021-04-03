import type { Animatable, Animation } from '../css';

/** @spec https://svgwg.org/svg2-draft/struct.html#InterfaceShadowAnimation */
export interface ShadowAnimation extends ShadowAnimation.Interface {}

/** @exposed Window */
export namespace ShadowAnimation {
	export interface Prototype extends Animation.Prototype {
		readonly sourceAnimation: Animation;
	}

	export type Interface = Prototype & Animation.Interface;

	export interface Static extends Animation.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(source: Animation, newTarget: Animatable): ShadowAnimation;
	}
}
