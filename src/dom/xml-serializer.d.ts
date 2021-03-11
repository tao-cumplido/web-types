import type { Node } from './node';

/** @spec https://w3c.github.io/DOM-Parsing/#the-xmlserializer-interface */
export interface XMLSerializer extends XMLSerializer.Interface {}

/** @exposed Window */
export namespace XMLSerializer {
	export interface Prototype {
		serializeToString(root: Node): string;
	}

	export type Interface = Prototype;

	export interface Constructor {
		// eslint-disable-next-line @typescript-eslint/prefer-function-type
		new (): XMLSerializer;
	}
}
