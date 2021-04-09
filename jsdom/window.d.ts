/* eslint-disable @typescript-eslint/naming-convention */
import type * as web from '@tswt/core';

export interface Window extends Omit<web.Window, 'top' | 'self' | 'window'> {
	Window: web.Window.Constructor;

	readonly top: Window;
	readonly self: Window;
	readonly window: Window;

	globalThis: Window;
	readonly ['Infinity']: number;
	readonly ['NaN']: number;
	readonly undefined: undefined;

	Array: typeof Array;
	ArrayBuffer: typeof ArrayBuffer;
	Atomics: typeof Atomics;
	BigInt: typeof BigInt;
	BigInt64Array: typeof BigInt64Array;
	BigUint64Array: typeof BigUint64Array;
	Boolean: typeof Boolean;
	DataView: typeof DataView;
	Date: typeof Date;
	Error: typeof Error;
	EvalError: typeof EvalError;
	Float32Array: typeof Float32Array;
	Float64Array: typeof Float64Array;
	Function: typeof Function;
	Int16Array: typeof Int16Array;
	Int32Array: typeof Int32Array;
	Int8Array: typeof Int8Array;
	Intl: typeof Intl;
	JSON: typeof JSON;
	Map: typeof Map;
	Math: typeof Math;
	Number: typeof Number;
	Object: typeof Object;
	Promise: typeof Promise;
	Proxy: typeof Proxy;
	RangeError: typeof RangeError;
	ReferenceError: typeof ReferenceError;
	Reflect: typeof Reflect;
	RegExp: typeof RegExp;
	Set: typeof Set;
	SharedArrayBuffer: typeof SharedArrayBuffer;
	String: typeof String;
	Symbol: typeof Symbol;
	SyntaxError: typeof SyntaxError;
	TypeError: typeof TypeError;
	URIError: typeof URIError;
	Uint16Array: typeof Uint16Array;
	Uint32Array: typeof Uint32Array;
	Uint8Array: typeof Uint8Array;
	Uint8ClampedArray: typeof Uint8ClampedArray;
	WeakMap: typeof WeakMap;
	WeakSet: typeof WeakSet;

	// WebAssembly: web.WebAssembly.Constructor;

	DOMException: web.DOMException.Constructor;

	// URL: web.URL.Constructor;
	URLSeachParams: web.URLSearchParams.Constructor;

	EventTarget: web.EventTarget.Constructor;

	NamedNodeMap: web.NamedNodeMap.Constructor;
	Node: web.Node.Constructor;
	Attr: web.Attr.Constructor;
	Element: web.Element.Constructor;
	DocumentFragment: web.DocumentFragment.Constructor;
	DOMImplementation: web.DOMImplementation.Constructor;
	Document: web.Document.Constructor;
	HTMLDocument: web.Document.Constructor;
	XMLDocument: web.XMLDocument.Constructor;
	CharacterData: web.CharacterData.Constructor;
	Text: web.Text.Constructor;
	CDATASection: web.CDATASection.Constructor;
	ProcessingInstruction: web.ProcessingInstruction.Constructor;
	Comment: web.Comment.Constructor;
	DocumentType: web.DocumentType.Constructor;
	NodeList: web.NodeList.Constructor;
	HTMLCollection: web.HTMLCollection.Constructor;
	HTMLOptionsCollection: web.HTMLOptionsCollection.Constructor;
	DOMStringMap: web.DOMStringMap.Constructor;
	DOMTokenList: web.DOMTokenList.Constructor;

	StyleSheetList: web.StyleSheetList.Constructor;

	HTMLElement: web.HTMLElement.Constructor;
	HTMLHeadElement: web.HTMLHeadElement.Constructor;
	HTMLTitleElement: web.HTMLTitleElement.Constructor;
	HTMLBaseElement: web.HTMLBaseElement.Constructor;
	HTMLLinkElement: web.HTMLLinkElement.Constructor;
	HTMLMetaElement: web.HTMLMetaElement.Constructor;
	HTMLStyleElement: web.HTMLStyleElement.Constructor;
	HTMLBodyElement: web.HTMLBodyElement.Constructor;
	HTMLHeadingElement: web.HTMLHeadingElement.Constructor;
	HTMLParagraphElement: web.HTMLParagraphElement.Constructor;
	HTMLHRElement: web.HTMLHRElement.Constructor;
	HTMLPreElement: web.HTMLPreElement.Constructor;
	HTMLUListElement: web.HTMLUListElement.Constructor;
	HTMLOListElement: web.HTMLOListElement.Constructor;
	HTMLLIElement: web.HTMLLIElement.Constructor;
	HTMLMenuElement: web.HTMLMenuElement.Constructor;
	HTMLDListElement: web.HTMLDListElement.Constructor;
	HTMLDivElement: web.HTMLDivElement.Constructor;
	HTMLAnchorElement: web.HTMLAnchorElement.Constructor;
	HTMLAreaElement: web.HTMLAreaElement.Constructor;
	HTMLBRElement: web.HTMLBRElement.Constructor;
	HTMLButtonElement: web.HTMLButtonElement.Constructor;
	HTMLCanvasElement: web.HTMLCanvasElement.Constructor;
	HTMLDataElement: web.HTMLDataElement.Constructor;
	HTMLDataListElement: web.HTMLDataListElement.Constructor;
	HTMLDetailsElement: web.HTMLDetailsElement.Constructor;
	HTMLDialogElement: web.HTMLDialogElement.Constructor;
	HTMLDirectoryElement: web.HTMLDirectoryElement.Constructor;
	HTMLFieldSetElement: web.HTMLFieldSetElement.Constructor;
	HTMLFontElement: web.HTMLFontElement.Constructor;
	HTMLFormElement: web.HTMLFormElement.Constructor;
	HTMLHtmlElement: web.HTMLHtmlElement.Constructor;
	HTMLImageElement: web.HTMLImageElement.Constructor;
	HTMLInputElement: web.HTMLInputElement.Constructor;
	HTMLLabelElement: web.HTMLLabelElement.Constructor;
	HTMLLegendElement: web.HTMLLegendElement.Constructor;
	HTMLMapElement: web.HTMLMapElement.Constructor;
	HTMLMarqueeElement: web.HTMLMarqueeElement.Constructor;
	HTMLMediaElement: web.HTMLMediaElement.Constructor;
	HTMLMeterElement: web.HTMLMeterElement.Constructor;
	HTMLModElement: web.HTMLModElement.Constructor;
	HTMLOptGroupElement: web.HTMLOptGroupElement.Constructor;
	HTMLOptionElement: web.HTMLOptionElement.Constructor;
	HTMLOutputElement: web.HTMLOutputElement.Constructor;
	HTMLPictureElement: web.HTMLPictureElement.Constructor;
	HTMLProgressElement: web.HTMLProgressElement.Constructor;
	HTMLQuoteElement: web.HTMLQuoteElement.Constructor;
	HTMLScriptElement: web.HTMLScriptElement.Constructor;
	HTMLSelectElement: web.HTMLSelectElement.Constructor;
	HTMLSlotElement: web.HTMLSlotElement.Constructor;
	HTMLSourceElement: web.HTMLSourceElement.Constructor;
	HTMLSpanElement: web.HTMLSpanElement.Constructor;
	HTMLTableCaptionElement: web.HTMLTableCaptionElement.Constructor;
	HTMLTableCellElement: web.HTMLTableCellElement.Constructor;
	HTMLTableColElement: web.HTMLTableColElement.Constructor;
	HTMLTableElement: web.HTMLTableElement.Constructor;
	HTMLTimeElement: web.HTMLTimeElement.Constructor;
	HTMLTableRowElement: web.HTMLTableRowElement.Constructor;
	HTMLTableSectionElement: web.HTMLTableSectionElement.Constructor;
	HTMLTemplateElement: web.HTMLTemplateElement.Constructor;
	HTMLTextAreaElement: web.HTMLTextAreaElement.Constructor;
	HTMLUnknownElement: web.HTMLUnknownElement.Constructor;
	HTMLFrameElement: web.HTMLFrameElement.Constructor;
	HTMLFrameSetElement: web.HTMLFrameSetElement.Constructor;
	HTMLIFrameElement: web.HTMLIFrameElement.Constructor;
	HTMLEmbedElement: web.HTMLEmbedElement.Constructor;
	HTMLObjectElement: web.HTMLObjectElement.Constructor;
	HTMLParamElement: web.HTMLParamElement.Constructor;
	HTMLVideoElement: web.HTMLVideoElement.Constructor;
	HTMLAudioElement: web.HTMLAudioElement.Constructor;
	HTMLTrackElement: web.HTMLTrackElement.Constructor;

	SVGElement: web.SVGElement.Constructor;
	SVGGraphicsElement: web.SVGGraphicsElement.Constructor;
	SVGSVGElement: web.SVGSVGElement.Constructor;
	SVGTitleElement: web.SVGTitleElement.Constructor;
	SVGAnimatedString: web.SVGAnimatedString.Constructor;
	SVGNumber: web.SVGNumber.Constructor;
	SVGStringList: web.SVGStringList.Constructor;

	Event: web.Event.Constructor;
	CloseEvent: web.CloseEvent.Constructor;
	CustomEvent: web.CustomEvent.Constructor;
	MessageEvent: web.MessageEvent.Constructor;
	ErrorEvent: web.ErrorEvent.Constructor;
	HashChangeEvent: web.HashChangeEvent.Constructor;
	PopStateEvent: web.PopStateEvent.Constructor;
	StorageEvent: web.StorageEvent.Constructor;
	// ProgressEvent: web.ProgressEvent.Constructor;
	PageTransitionEvent: web.PageTransitionEvent.Constructor;
	InputEvent: web.InputEvent.Constructor;

	UIEvent: web.UIEvent.Constructor;
	FocusEvent: web.FocusEvent.Constructor;
	MouseEvent: web.MouseEvent.Constructor;
	KeyboardEvent: web.KeyboardEvent.Constructor;
	TouchEvent: web.TouchEvent.Constructor;
	CompositionEvent: web.CompositionEvent.Constructor;
	WheelEvent: web.WheelEvent.Constructor;

	BarProp: web.BarProp.Constructor;
	Location: web.Location.Constructor;
	History: web.History.Constructor;
	Screen: web.Screen.Constructor;
	// Performance: web.Performance.Constructor;
	Navigator: web.Navigator.Constructor;

	PluginArray: web.PluginArray.Constructor;
	MimeTypeArray: web.MimeTypeArray.Constructor;
	Plugin: web.Plugin.Constructor;
	MimeType: web.MimeType.Constructor;

	// FileReader: web.FileReader.Constructor;
	// Blob: web.Blob.Constructor;
	// File: web.File.Constructor;
	// FileList: web.FileList.Constructor;
	ValidityState: web.ValidityState.Constructor;

	DOMParser: web.DOMParser.Constructor;
	XMLSerializer: web.XMLSerializer.Constructor;

	FormData: web.FormData.Constructor;
	// XMLHttpRequestEventTarget: web.XMLHttpRequestEventTarget.Constructor;
	// XMLHttpRequestUpload: web.XMLHttpRequestUpload.Constructor;
	// XMLHttpRequest: web.XMLHttpRequest.Constructor;
	WebSocket: web.WebSocket.Constructor;

	NodeFilter: web.NodeFilter.Constructor;
	NodeIterator: web.NodeIterator.Constructor;
	TreeWalker: web.TreeWalker.Constructor;

	AbstractRange: web.AbstractRange.Constructor;
	Range: web.Range.Constructor;
	StaticRange: web.StaticRange.Constructor;
	// Selection: web.Selection.Constructor;

	Storage: web.Storage.Constructor;

	CustomElementRegistry: web.CustomElementRegistry.Constructor;
	ShadowRoot: web.ShadowRoot.Constructor;

	MutationObserver: web.MutationObserver.Constructor;
	MutationRecord: web.MutationRecord.Constructor;

	Headers: web.Headers.Constructor;
	AbortController: web.AbortController.Constructor;
	AbortSignal: web.AbortSignal.Constructor;

	StyleSheet: web.StyleSheet.Constructor;
	MediaList: web.MediaList.Constructor;
	CSSStyleSheet: web.CSSStyleSheet.Constructor;
	CSSRule: web.CSSRule.Constructor;
	CSSStyleRule: web.CSSStyleRule.Constructor;
	CSSMediaRule: web.CSSMediaRule.Constructor;
	CSSImportRule: web.CSSImportRule.Constructor;
	CSSStyleDeclaration: web.CSSStyleDeclaration.Constructor;

	XPathExpression: web.XPathExpression.Constructor;
	XPathResult: web.XPathResult.Constructor;
	XPathEvaluator: web.XPathEvaluator.Constructor;

	eval(script: string): unknown;
	parseInt(s: string, radix?: number): number;
	parseFloat(string: string): number;
	isNaN(number: number): boolean;
	isFinite(number: number): boolean;
	decodeURI(encodedURI: string): string;
	decodeURIComponent(encodedURIComponent: string): string;
	encodeURI(uri: string): string;
	encodeURIComponent(uriComponent: string | number | boolean): string;
	escape(string: string): string;
	unescape(string: string): string;
}
