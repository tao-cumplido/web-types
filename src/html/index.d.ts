/* eslint-disable @typescript-eslint/no-empty-interface */

import type { HTMLAnchorElement } from './html-anchor-element';
import type { HTMLAreaElement } from './html-area-element';
import type { HTMLAudioElement } from './html-audio-element';
import type { HTMLBaseElement } from './html-base-element';
import type { HTMLBodyElement } from './html-body-element';
import type { HTMLBRElement } from './html-br-element';
import type { HTMLButtonElement } from './html-button-element';
import type { HTMLCanvasElement } from './html-canvas-element';
import type { HTMLDataElement } from './html-data-element';
import type { HTMLDataListElement } from './html-datalist-element';
import type { HTMLDetailsElement } from './html-details-element';
import type { HTMLDialogElement } from './html-dialog-element';
import type { HTMLDivElement } from './html-div-element';
import type { HTMLDListElement } from './html-dlist-element';
import type { HTMLElement, HTMLUnknownElement } from './html-element';
import type { HTMLEmbedElement } from './html-embed-element';
import type { HTMLFieldSetElement } from './html-field-set-element';
import type { HTMLFormElement } from './html-form-element';
import type { HTMLHeadElement } from './html-head-element';
import type { HTMLHeadingElement } from './html-heading-element';
import type { HTMLHRElement } from './html-hr-element';
import type { HTMLHtmlElement } from './html-html-element';
import type { HTMLIFrameElement } from './html-iframe-element';
import type { HTMLImageElement } from './html-image-element';
import type { HTMLInputElement } from './html-input-element';
import type { HTMLLabelElement } from './html-label-element';
import type { HTMLLegendElement } from './html-legend-element';
import type { HTMLLIElement } from './html-li-element';
import type { HTMLLinkElement } from './html-link-element';
import type { HTMLMapElement } from './html-map-element';
import type { HTMLMenuElement } from './html-menu-element';
import type { HTMLMetaElement } from './html-meta-element';
import type { HTMLMeterElement } from './html-meter-element';
import type { HTMLModElement } from './html-mod-element';
import type { HTMLObjectElement } from './html-object-element';
import type { HTMLOListElement } from './html-olist-element';
import type { HTMLOptGroupElement } from './html-opt-group-element';
import type { HTMLOptionElement } from './html-option-element';
import type { HTMLOutputElement } from './html-output-element';
import type { HTMLParagraphElement } from './html-paragraph-element';
import type { HTMLParamElement } from './html-param-element';
import type { HTMLPictureElement } from './html-picture-element';
import type { HTMLPreElement } from './html-pre-element';
import type { HTMLProgressElement } from './html-progress-element';
import type { HTMLQuoteElement } from './html-quote-element';
import type { HTMLScriptElement } from './html-script-element';
import type { HTMLSelectElement } from './html-select-element';
import type { HTMLSlotElement } from './html-slot-element';
import type { HTMLSourceElement } from './html-source-element';
import type { HTMLSpanElement } from './html-span-element';
import type { HTMLStyleElement } from './html-style-element';
import type { HTMLTableCaptionElement } from './html-table-caption-element';
import type { HTMLTableCellElement } from './html-table-cell-element';
import type { HTMLTableColElement } from './html-table-col-element';
import type { HTMLTableElement } from './html-table-element';
import type { HTMLTableRowElement } from './html-table-row-element';
import type { HTMLTableSectionElement } from './html-table-section-element';
import type { HTMLTemplateElement } from './html-template-element';
import type { HTMLTextAreaElement } from './html-text-area-element';
import type { HTMLTimeElement } from './html-time-element';
import type { HTMLTitleElement } from './html-title-element';
import type { HTMLTrackElement } from './html-track-element';
import type { HTMLUListElement } from './html-ulist-element';
import type { HTMLVideoElement } from './html-video-element';

/** @nonStandard */
export interface HTMLElementMap {
	// https://html.spec.whatwg.org/multipage/dom.html#htmlelement
	applet: HTMLUnknownElement;
	bgsound: HTMLUnknownElement;
	blink: HTMLUnknownElement;
	isindex: HTMLUnknownElement;
	keygen: HTMLUnknownElement;
	multicol: HTMLUnknownElement;
	nextid: HTMLUnknownElement;
	spacer: HTMLUnknownElement;
	acronym: HTMLElement;
	basefont: HTMLElement;
	big: HTMLElement;
	center: HTMLElement;
	nobr: HTMLElement;
	noembed: HTMLElement;
	noframes: HTMLElement;
	plaintext: HTMLElement;
	rb: HTMLElement;
	rtc: HTMLElement;
	strike: HTMLElement;
	tt: HTMLElement;
	listing: HTMLPreElement;
	xmp: HTMLPreElement;

	// https://html.spec.whatwg.org/multipage/semantics.html
	html: HTMLHtmlElement;
	head: HTMLHeadElement;
	title: HTMLTitleElement;
	base: HTMLBaseElement;
	link: HTMLLinkElement;
	meta: HTMLMetaElement;
	style: HTMLStyleElement;

	// https://html.spec.whatwg.org/multipage/sections.html
	body: HTMLBodyElement;
	article: HTMLElement;
	section: HTMLElement;
	nav: HTMLElement;
	aside: HTMLElement;
	h1: HTMLHeadingElement;
	h2: HTMLHeadingElement;
	h3: HTMLHeadingElement;
	h4: HTMLHeadingElement;
	h5: HTMLHeadingElement;
	h6: HTMLHeadingElement;
	hgroup: HTMLElement;
	header: HTMLElement;
	footer: HTMLElement;
	address: HTMLElement;

	// https://html.spec.whatwg.org/multipage/grouping-content.html
	p: HTMLParagraphElement;
	hr: HTMLHRElement;
	pre: HTMLPreElement;
	blockquote: HTMLQuoteElement;
	ol: HTMLOListElement;
	ul: HTMLUListElement;
	menu: HTMLMenuElement;
	li: HTMLLIElement;
	dl: HTMLDListElement;
	dt: HTMLElement;
	dd: HTMLElement;
	figure: HTMLElement;
	figcaption: HTMLElement;
	main: HTMLElement;
	div: HTMLDivElement;

	// https://html.spec.whatwg.org/multipage/text-level-semantics.html
	a: HTMLAnchorElement;
	em: HTMLElement;
	strong: HTMLElement;
	small: HTMLElement;
	s: HTMLElement;
	cite: HTMLElement;
	q: HTMLQuoteElement;
	dfn: HTMLElement;
	abbr: HTMLElement;
	ruby: HTMLElement;
	rt: HTMLElement;
	rp: HTMLElement;
	data: HTMLDataElement;
	time: HTMLTimeElement;
	code: HTMLElement;
	var: HTMLElement;
	samp: HTMLElement;
	kbd: HTMLElement;
	sub: HTMLElement;
	sup: HTMLElement;
	i: HTMLElement;
	b: HTMLElement;
	u: HTMLElement;
	mark: HTMLElement;
	bdi: HTMLElement;
	bdo: HTMLElement;
	span: HTMLSpanElement;
	br: HTMLBRElement;
	wbr: HTMLElement;

	// https://html.spec.whatwg.org/multipage/edits.html
	ins: HTMLModElement;
	del: HTMLModElement;

	// https://html.spec.whatwg.org/multipage/embedded-content.html
	picture: HTMLPictureElement;
	source: HTMLSourceElement;
	img: HTMLImageElement;

	// https://html.spec.whatwg.org/multipage/iframe-embed-object.html
	iframe: HTMLIFrameElement;
	embed: HTMLEmbedElement;
	object: HTMLObjectElement;
	param: HTMLParamElement;

	// https://html.spec.whatwg.org/multipage/media.html
	video: HTMLVideoElement;
	audio: HTMLAudioElement;
	track: HTMLTrackElement;

	// https://html.spec.whatwg.org/multipage/image-maps.html
	map: HTMLMapElement;
	area: HTMLAreaElement;

	// https://html.spec.whatwg.org/multipage/tables.html
	table: HTMLTableElement;
	caption: HTMLTableCaptionElement;
	colgroup: HTMLTableColElement;
	col: HTMLTableColElement;
	tbody: HTMLTableSectionElement;
	thead: HTMLTableSectionElement;
	tfoot: HTMLTableSectionElement;
	tr: HTMLTableRowElement;
	td: HTMLTableCellElement;
	th: HTMLTableCellElement;

	// https://html.spec.whatwg.org/multipage/forms.html
	form: HTMLFormElement;
	label: HTMLLabelElement;

	// https://html.spec.whatwg.org/multipage/input.html
	input: HTMLInputElement;

	// https://html.spec.whatwg.org/multipage/form-elements.html
	button: HTMLButtonElement;
	select: HTMLSelectElement;
	datalist: HTMLDataListElement;
	optgroup: HTMLOptGroupElement;
	option: HTMLOptionElement;
	textarea: HTMLTextAreaElement;
	output: HTMLOutputElement;
	progress: HTMLProgressElement;
	meter: HTMLMeterElement;
	fieldset: HTMLFieldSetElement;
	legend: HTMLLegendElement;

	// https://html.spec.whatwg.org/multipage/interactive-elements.html
	details: HTMLDetailsElement;
	summary: HTMLElement;
	dialog: HTMLDialogElement;

	// https://html.spec.whatwg.org/multipage/scripting.html
	script: HTMLScriptElement;
	noscript: HTMLElement;
	template: HTMLTemplateElement;
	slot: HTMLSlotElement;

	// https://html.spec.whatwg.org/multipage/canvas.html
	canvas: HTMLCanvasElement;
}

/** @nonStandard */
export interface AutonomousCustomElementMap {}

/** @nonStandard */
export interface CustomizedBuiltInElementMap {}

export * from './form-data-event';
export * from './html-anchor-element';
export * from './html-area-element';
export * from './html-audio-element';
export * from './html-base-element';
export * from './html-body-element';
export * from './html-br-element';
export * from './html-button-element';
export * from './html-canvas-element';
export * from './html-data-element';
export * from './html-datalist-element';
export * from './html-details-element';
export * from './html-dialog-element';
export * from './html-div-element';
export * from './html-dlist-element';
export * from './html-element';
export * from './html-embed-element';
export * from './html-field-set-element';
export * from './html-form-element';
export * from './html-frame-set-element';
export * from './html-head-element';
export * from './html-heading-element';
export * from './html-hr-element';
export * from './html-html-element';
export * from './html-iframe-element';
export * from './html-image-element';
export * from './html-input-element';
export * from './html-label-element';
export * from './html-legend-element';
export * from './html-li-element';
export * from './html-link-element';
export * from './html-map-element';
export * from './html-media-element';
export * from './html-menu-element';
export * from './html-meta-element';
export * from './html-meter-element';
export * from './html-mod-element';
export * from './html-object-element';
export * from './html-olist-element';
export * from './html-opt-group-element';
export * from './html-option-element';
export * from './html-output-element';
export * from './html-paragraph-element';
export * from './html-param-element';
export * from './html-picture-element';
export * from './html-pre-element';
export * from './html-progress-element';
export * from './html-quote-element';
export * from './html-script-element';
export * from './html-select-element';
export * from './html-slot-element';
export * from './html-source-element';
export * from './html-span-element';
export * from './html-style-element';
export * from './html-table-caption-element';
export * from './html-table-cell-element';
export * from './html-table-col-element';
export * from './html-table-element';
export * from './html-table-row-element';
export * from './html-table-section-element';
export * from './html-template-element';
export * from './html-text-area-element';
export * from './html-time-element';
export * from './html-title-element';
export * from './html-track-element';
export * from './html-ulist-element';
export * from './html-video-element';
export * from './mixins';
export * from './submit-event';
export * from './validity-state';
