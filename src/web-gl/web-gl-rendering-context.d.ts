/**
 * @idlType
 * @spec https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.1
 */
export type WebGLPowerPreference = 'default' | 'low-power' | 'high-performance';

/**
 * @idlType
 * @spec https://www.khronos.org/registry/webgl/specs/latest/1.0/#WEBGLCONTEXTATTRIBUTES
 */
export interface WebGLContextAttributes {
	alpha?: boolean;
	depth?: boolean;
	stencil?: boolean;
	antialias?: boolean;
	premultipliedAlpha?: boolean;
	preserveDrawingBuffer?: boolean;
	powerPreference?: WebGLPowerPreference;
	failIfMajorPerformanceCaveat?: boolean;
	desynchronized?: boolean;
}

/** @spec https://www.khronos.org/registry/webgl/specs/latest/1.0/#WebGLRenderingContext */
export interface WebGLRenderingContext extends WebGLRenderingContext.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace WebGLRenderingContext {
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
