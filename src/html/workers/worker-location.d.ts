/** @spec https://html.spec.whatwg.org/multipage/workers.html#worker-locations */
export interface WorkerLocation extends WorkerLocation.Interface {}

/** @exposed Worker */
export namespace WorkerLocation {
	export interface Prototype {
		readonly href: string;
		readonly origin: string;
		readonly protocol: string;
		readonly host: string;
		readonly hostname: string;
		readonly port: '' | `${number}`;
		readonly pathname: string;
		readonly search: string;
		readonly hash: string;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}
