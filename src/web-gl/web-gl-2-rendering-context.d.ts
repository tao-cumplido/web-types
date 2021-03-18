/** @spec https://www.khronos.org/registry/webgl/specs/latest/2.0/#WebGL2RenderingContext */
export interface WebGL2RenderingContext extends WebGL2RenderingContext.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace WebGL2RenderingContext {
	export interface Prototype {}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		/** @abstract */
		new(): never;
	}
}
