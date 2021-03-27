import type {
	FontDisplayDescriptor,
	FontMetricsOverrideDescriptor,
	FontStretchDescriptor,
	FontStyleDescriptor,
	FontWeightDescriptor,
} from '../fonts';

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-font-loading-3/#typedefdef-binarydata
 */
export type BinaryData = ArrayBuffer | ArrayBufferView;

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-font-loading-3/#dictdef-fontfacedescriptors
 */
export interface FontFaceDescriptors {
	style?: FontStyleDescriptor;
	weight?: FontWeightDescriptor;
	stretch?: FontStretchDescriptor;
	unicodeRange?: string;
	variant?: string;
	featureSettings?: string;
	variationSettings?: string;
	display?: FontDisplayDescriptor;
	ascentOverride?: FontMetricsOverrideDescriptor;
	descentOverride?: FontMetricsOverrideDescriptor;
	lineGapOverride?: FontMetricsOverrideDescriptor;
}

/**
 * @idlType
 * @spec https://drafts.csswg.org/css-font-loading-3/#enumdef-fontfaceloadstatus
 */
export type FontFaceLoadStatus = 'unloaded' | 'loading' | 'loaded' | 'error';

/** @spec https://drafts.csswg.org/css-font-loading-3/#fontface-interface */
export interface FontFace extends FontFace.Interface {}

/**
 * @exposed Window
 * @exposed Worker
 */
export namespace FontFace {
	export interface Prototype extends Required<FontFaceDescriptors> {
		readonly status: FontFaceLoadStatus;
		readonly loaded: Promise<this>;
		family: string;
		load(): Promise<this>;
	}

	export type Interface = Prototype;

	export interface Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(family: string, source: string | BinaryData, descriptors?: FontFaceDescriptors): FontFace;
	}
}
