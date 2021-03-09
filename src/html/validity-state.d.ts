/** @spec https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#validitystate */
export interface ValidityState extends ValidityState.Interface {}

/** @exposed Window */
export namespace ValidityState {
	export interface Prototype {
		readonly valueMissing: boolean;
		readonly typeMismatch: boolean;
		readonly patternMismatch: boolean;
		readonly tooLong: boolean;
		readonly tooShort: boolean;
		readonly rangeUnderflow: boolean;
		readonly rangeOverflow: boolean;
		readonly stepMismatch: boolean;
		readonly badInput: boolean;
		readonly customError: boolean;
		readonly valid: boolean;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new (): never;
	}
}
