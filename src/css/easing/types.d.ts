/** @spec https://drafts.csswg.org/css-easing-1/#typedef-cubic-bezier-easing-function */
export type CubicBezierEasingFunction =
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| `cubic-bezier(${number}, ${number}, ${number}, ${number})`;

/** @spec */
export type StepEasingFunction =
	| 'step-start'
	| 'step-end'
	| `steps(${number})`
	| `steps(${number}, ${`jump-${'start' | 'end' | 'none' | 'both'}` | 'start' | 'end'})`;

/** @spec https://drafts.csswg.org/css-easing-1/#typedef-easing-function */
export type EasingFunction = 'linear' | CubicBezierEasingFunction | StepEasingFunction;
