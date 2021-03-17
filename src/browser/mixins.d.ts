import type { ImageBitmap, ImageBitmapOptions, ImageBitmapSource } from '../canvas';

/** @spec https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope-mixin */
export interface WindowOrWorkerGlobalScope {
	createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
}
