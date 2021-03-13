import type { Node } from './node';

/** @spec https://w3c.github.io/DOM-Parsing/#the-xmlserializer-interface */
export interface XMLSerializer extends XMLSerializer.Interface {}

/** @exposed Window */
export namespace XMLSerializer {
	export interface Prototype {
		serializeToString(root: Node): string;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}
	export interface Constructor extends Static {
		new (): XMLSerializer;
	}
}
