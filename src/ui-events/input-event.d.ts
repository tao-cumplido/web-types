import type { StaticRange } from '../dom';
import type { DataTransfer } from '../html';
import type { UIEvent, UIEventInit } from './ui-event';

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#dictdef-inputeventinit
 * @spec https://w3c.github.io/input-events/#interface-InputEvent
 */
export interface InputEventInit extends Partial<InputEvent.State>, UIEventInit {
	targetRanges?: StaticRange[];
}

/**
 * @spec https://w3c.github.io/uievents/#idl-inputevent
 * @spec https://w3c.github.io/input-events/#interface-InputEvent
 */
export interface InputEvent extends InputEvent.Interface {}

/** @exposed Window */
export namespace InputEvent {
	export interface State {
		dataTransfer: DataTransfer | null;
		data: string | null;
		isComposing: boolean;
		inputType:
			| `insert${
				| 'Text'
				| 'ReplacementText'
				| 'LineBreak'
				| 'Paragraph'
				| `${'Ordered' | 'Unordered'}List`
				| 'HorizontalRule'
				| `From${'Yank' | 'Drop' | 'Paste' | 'PasteAsQuotation' | 'Composition'}`
				| 'Transpose'
				| 'CompositionText'
				| 'Link'}`
			| `delete${
				| 'ByComposition'
				| 'CompositionText'
				| `Word${'Backward' | 'Forward'}`
				| `SoftLine${'Backward' | 'Forward'}`
				| 'EntireSoftLine'
				| `HardLine${'Backward' | 'Forward'}`
				| `By${'Drag' | 'Cut'}`
				| 'Content'
				| `Content${'Backward' | 'Forward'}`}`
			| `history${'Undo' | 'Redo'}`
			| `format${
				| 'Bold'
				| 'Italic'
				| 'Underline'
				| 'StrikeThrough'
				| `${'Super' | 'Sub'}script`
				| `Justify${'Full' | 'Center' | 'Right' | 'Left'}`
				| `${'In' | 'Out'}dent`
				| 'Remove'
				| `Set${'Block' | 'Inline'}TextDirection`
				| `${'Back' | 'Font'}Color`
				| 'FontName'}`;
	}

	export interface Prototype extends Readonly<State>, UIEvent.Prototype {
		getTargetRanges(): StaticRange[];
	}

	export type Interface = Prototype & UIEvent.Interface;

	export interface Static extends UIEvent.Static {
		prototype: Prototype;
	}

	export interface Constructor extends Static {
		new(type: string, eventInitDict?: InputEventInit): InputEvent;
	}
}
