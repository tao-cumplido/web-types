/* eslint-disable @typescript-eslint/no-empty-interface */

import type * as elements from './elements';

export interface HTMLElementMap {
	// https://html.spec.whatwg.org/multipage/dom.html#htmlelement
	applet: elements.HTMLUnknownElement;
	bgsound: elements.HTMLUnknownElement;
	blink: elements.HTMLUnknownElement;
	isindex: elements.HTMLUnknownElement;
	keygen: elements.HTMLUnknownElement;
	multicol: elements.HTMLUnknownElement;
	nextid: elements.HTMLUnknownElement;
	spacer: elements.HTMLUnknownElement;
	acronym: elements.HTMLElement;
	basefont: elements.HTMLElement;
	big: elements.HTMLElement;
	center: elements.HTMLElement;
	nobr: elements.HTMLElement;
	noembed: elements.HTMLElement;
	noframes: elements.HTMLElement;
	plaintext: elements.HTMLElement;
	rb: elements.HTMLElement;
	rtc: elements.HTMLElement;
	strike: elements.HTMLElement;
	tt: elements.HTMLElement;
	listing: elements.HTMLPreElement;
	xmp: elements.HTMLPreElement;

	// https://html.spec.whatwg.org/multipage/semantics.html
	html: elements.HTMLHtmlElement;
	head: elements.HTMLHeadElement;
	title: elements.HTMLTitleElement;
	base: elements.HTMLBaseElement;
	link: elements.HTMLLinkElement;
	meta: elements.HTMLMetaElement;
	style: elements.HTMLStyleElement;

	// https://html.spec.whatwg.org/multipage/sections.html
	body: elements.HTMLBodyElement;
	article: elements.HTMLElement;
	section: elements.HTMLElement;
	nav: elements.HTMLElement;
	aside: elements.HTMLElement;
	h1: elements.HTMLHeadingElement;
	h2: elements.HTMLHeadingElement;
	h3: elements.HTMLHeadingElement;
	h4: elements.HTMLHeadingElement;
	h5: elements.HTMLHeadingElement;
	h6: elements.HTMLHeadingElement;
	hgroup: elements.HTMLElement;
	header: elements.HTMLElement;
	footer: elements.HTMLElement;
	address: elements.HTMLElement;

	// https://html.spec.whatwg.org/multipage/grouping-content.html
	p: elements.HTMLParagraphElement;
	hr: elements.HTMLHRElement;
	pre: elements.HTMLPreElement;
	blockquote: elements.HTMLQuoteElement;
	ol: elements.HTMLOListElement;
	ul: elements.HTMLUListElement;
	menu: elements.HTMLMenuElement;
	li: elements.HTMLLIElement;
	dl: elements.HTMLDListElement;
	dt: elements.HTMLElement;
	dd: elements.HTMLElement;
	figure: elements.HTMLElement;
	figcaption: elements.HTMLElement;
	main: elements.HTMLElement;
	div: elements.HTMLDivElement;

	// https://html.spec.whatwg.org/multipage/text-level-semantics.html
	a: elements.HTMLAnchorElement;
	em: elements.HTMLElement;
	strong: elements.HTMLElement;
	small: elements.HTMLElement;
	s: elements.HTMLElement;
	cite: elements.HTMLElement;
	q: elements.HTMLQuoteElement;
	dfn: elements.HTMLElement;
	abbr: elements.HTMLElement;
	ruby: elements.HTMLElement;
	rt: elements.HTMLElement;
	rp: elements.HTMLElement;
	data: elements.HTMLDataElement;
	time: elements.HTMLTimeElement;
	code: elements.HTMLElement;
	var: elements.HTMLElement;
	samp: elements.HTMLElement;
	kbd: elements.HTMLElement;
	sub: elements.HTMLElement;
	sup: elements.HTMLElement;
	i: elements.HTMLElement;
	b: elements.HTMLElement;
	u: elements.HTMLElement;
	mark: elements.HTMLElement;
	bdi: elements.HTMLElement;
	bdo: elements.HTMLElement;
	span: elements.HTMLSpanElement;
	br: elements.HTMLBRElement;
	wbr: elements.HTMLElement;

	// https://html.spec.whatwg.org/multipage/edits.html
	ins: elements.HTMLModElement;
	del: elements.HTMLModElement;

	// https://html.spec.whatwg.org/multipage/embedded-content.html
	picture: elements.HTMLPictureElement;
	source: elements.HTMLSourceElement;
	img: elements.HTMLImageElement;

	// https://html.spec.whatwg.org/multipage/iframe-embed-object.html
	iframe: elements.HTMLIFrameElement;
	embed: elements.HTMLEmbedElement;
	object: elements.HTMLObjectElement;
	param: elements.HTMLParamElement;

	// https://html.spec.whatwg.org/multipage/media.html
	video: elements.HTMLVideoElement;
	audio: elements.HTMLAudioElement;
	track: elements.HTMLTrackElement;

	// https://html.spec.whatwg.org/multipage/image-maps.html
	map: elements.HTMLMapElement;
	area: elements.HTMLAreaElement;

	// https://html.spec.whatwg.org/multipage/tables.html
	table: elements.HTMLTableElement;
	caption: elements.HTMLTableCaptionElement;
	colgroup: elements.HTMLTableColElement;
	col: elements.HTMLTableColElement;
	tbody: elements.HTMLTableSectionElement;
	thead: elements.HTMLTableSectionElement;
	tfoot: elements.HTMLTableSectionElement;
	tr: elements.HTMLTableRowElement;
	td: elements.HTMLTableCellElement;
	th: elements.HTMLTableCellElement;

	// https://html.spec.whatwg.org/multipage/forms.html
	form: elements.HTMLFormElement;
	label: elements.HTMLLabelElement;

	// https://html.spec.whatwg.org/multipage/input.html
	input: elements.HTMLInputElement;

	// https://html.spec.whatwg.org/multipage/form-elements.html
	button: elements.HTMLButtonElement;
	select: elements.HTMLSelectElement;
	datalist: elements.HTMLDataListElement;
	optgroup: elements.HTMLOptGroupElement;
	option: elements.HTMLOptionElement;
	textarea: elements.HTMLTextAreaElement;
	output: elements.HTMLOutputElement;
	progress: elements.HTMLProgressElement;
	meter: elements.HTMLMeterElement;
	fieldset: elements.HTMLFieldSetElement;
	legend: elements.HTMLLegendElement;

	// https://html.spec.whatwg.org/multipage/interactive-elements.html
	details: elements.HTMLDetailsElement;
	summary: elements.HTMLElement;
	dialog: elements.HTMLDialogElement;

	// https://html.spec.whatwg.org/multipage/scripting.html
	script: elements.HTMLScriptElement;
	noscript: elements.HTMLElement;
	template: elements.HTMLTemplateElement;
	slot: elements.HTMLSlotElement;

	// https://html.spec.whatwg.org/multipage/canvas.html
	canvas: elements.HTMLCanvasElement;

	// https://html.spec.whatwg.org/multipage/obsolete.html
	marquee: elements.HTMLMarqueeElement;
	frameset: elements.HTMLFrameSetElement;
	frame: elements.HTMLFrameElement;
	dir: elements.HTMLDirectoryElement;
	font: elements.HTMLFontElement;
}

export interface FormAssociatedCustomElementMap {}

export interface AutonomousCustomElementMap extends FormAssociatedCustomElementMap {}

export interface CustomizedBuiltInElementMap {}

export * from './broadcast-channel';
export * from './close-event';
export * from './elements';
export * from './error-event';
export * from './event-source';
export * from './message-channel';
export * from './message-event';
export * from './message-port';
export * from './mixins';
export * from './promise-rejection-event';
export * from './promise-rejection-event';
export * from './types';
export * from './web-socket';
export * from './window';
export * from './worker';
export * from './workers';
export * from './worklet-global-scope';
