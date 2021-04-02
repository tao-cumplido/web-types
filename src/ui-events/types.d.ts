import type { UIEventInit } from './ui-event';

export interface BaseModifiers {
	ctrlKey: boolean;
	shiftKey: boolean;
	altKey: boolean;
	metaKey: boolean;
}

/**
 * @idlType
 * @spec https://w3c.github.io/uievents/#event-modifier-initializers
 */
export interface EventModifierInit extends UIEventInit, Partial<BaseModifiers> {
	modifierAltGraph?: boolean;
	modifierCapsLock?: boolean;
	modifierFn?: boolean;
	modifierFnLock?: boolean;
	modifierHyper?: boolean;
	modifierNumLock?: boolean;
	modifierScrollLock?: boolean;
	modifierSuper?: boolean;
	modifierSymbol?: boolean;
	modifierSymbolLock?: boolean;
}

/** @spec https://w3c.github.io/uievents/#dom-keyboardevent-getmodifierstate */
export interface GetModifierState {
	getModifierState(keyArg: KeyValue.Modifier): boolean;
	/** @deprecated */
	getModifierState(keyArg: string): false;
}

/** @spec https://w3c.github.io/uievents-key/ */
export namespace KeyValue {
	export const enum Special {
		Unidentified = 'Unidentified',
	}

	export const enum Modifier {
		Alt = 'Alt',
		AltGraph = 'AltGraph',
		CapsLock = 'CapsLock',
		Control = 'Control',
		Fn = 'Fn',
		FnLock = 'FnLock',
		Meta = 'Meta',
		NumLock = 'NumLock',
		ScrollLock = 'ScrollLock',
		Shift = 'Shift',
		// eslint-disable-next-line @typescript-eslint/no-shadow
		Symbol = 'Symbol',
		SymbolLock = 'SymbolLock',
		/** @deprecated */
		Hyper = 'Hyper',
		/** @deprecated */
		Super = 'Super',
	}

	export const enum Whitespace {
		Enter = 'Enter',
		Tab = 'Tab',
	}

	export const enum Navigation {
		ArrowDown = 'ArrowDown',
		ArrowLeft = 'ArrowLeft',
		ArrowRight = 'ArrowRight',
		ArrowUp = 'ArrowUp',
		End = 'End',
		Home = 'Home',
		PageDown = 'PageDown',
		PageUp = 'PageUp',
	}

	export const enum Edit {
		Backspace = 'Backspace',
		Clear = 'Clear',
		Copy = 'Copy',
		CrSel = 'CrSel',
		Cut = 'Cut',
		Delete = 'Delete',
		EraseEof = 'EraseEof',
		ExSel = 'ExSel',
		Insert = 'Insert',
		Paste = 'Paste',
		Redo = 'Redo',
		Undo = 'Undo',
	}

	export const enum UI {
		Accept = 'Accept',
		Again = 'Again',
		Attn = 'Attn',
		Cancel = 'Cancel',
		ContextMenu = 'ContextMenu',
		Escape = 'Escape',
		Execute = 'Execute',
		Find = 'Find',
		Help = 'Help',
		Pause = 'Pause',
		Play = 'Play',
		Props = 'Props',
		Select = 'Select',
		ZoomIn = 'ZoomIn',
		ZoomOut = 'ZoomOut',
	}

	export const enum Device {
		BrightnessDown = 'BrightnessDown',
		BrightnessUp = 'BrightnessUp',
		Eject = 'Eject',
		LogOff = 'LogOff',
		Power = 'Power',
		PowerOff = 'PowerOff',
		PrintScreen = 'PrintScreen',
		Hibernate = 'Hibernate',
		Standby = 'Standby',
		WakeUp = 'WakeUp',
	}

	export const enum Composition {
		AllCandidates = 'AllCandidates',
		Alphanumeric = 'Alphanumeric',
		CodeInput = 'CodeInput',
		Compose = 'Compose',
		Convert = 'Convert',
		Dead = 'Dead',
		FinalMode = 'FinalMode',
		GroupFirst = 'GroupFirst',
		GroupLast = 'GroupLast',
		GroupNext = 'GroupNext',
		GroupPrevious = 'GroupPrevious',
		ModeChange = 'ModeChange',
		NextCandidate = 'NextCandidate',
		NonConvert = 'NonConvert',
		PreviousCandidate = 'PreviousCandidate',
		Process = 'Process',
		SingleCandidate = 'SingleCandidate',
		HangulMode = 'HangulMode',
		HanjaMode = 'HanjaMode',
		JunjaMode = 'JunjaMode',
		Eisu = 'Eisu',
		Hankaku = 'Hankaku',
		Hiragana = 'Hiragana',
		HiraganaKatakana = 'HiraganaKatakana',
		KanaMode = 'KanaMode',
		KanjiMode = 'KanjiMode',
		Katakana = 'Katakana',
		Romaji = 'Romaji',
		Zenkaku = 'Zenkaku',
		ZenkakuHankaku = 'ZenkakuHankaku',
	}

	export const enum GeneralPurpose {
		F1 = 'F1',
		F2 = 'F2',
		F3 = 'F3',
		F4 = 'F4',
		F5 = 'F5',
		F6 = 'F6',
		F7 = 'F7',
		F8 = 'F8',
		F9 = 'F9',
		F10 = 'F10',
		F11 = 'F11',
		F12 = 'F12',
		Soft1 = 'Soft1',
		Soft2 = 'Soft2',
		Soft3 = 'Soft3',
		Soft4 = 'Soft4',
	}

	export const enum MultiMedia {
		ChannelDown = 'ChannelDown',
		ChannelUp = 'ChannelUp',
		Close = 'Close',
		MailForward = 'MailForward',
		MailReply = 'MailReply',
		MailSend = 'MailSend',
		MediaClose = 'MediaClose',
		MediaFastForward = 'MediaFastForward',
		MediaPause = 'MediaPause',
		MediaPlay = 'MediaPlay',
		MediaPlayPause = 'MediaPlayPause',
		MediaRecord = 'MediaRecord',
		MediaRewind = 'MediaRewind',
		MediaStop = 'MediaStop',
		MediaTrackNext = 'MediaTrackNext',
		MediaTrackPrevious = 'MediaTrackPrevious',
		New = 'New',
		Open = 'Open',
		Print = 'Print',
		Save = 'Save',
		SpellCheck = 'SpellCheck',
		Key11 = 'Key11',
		Key12 = 'Key12',
		MediaNextTrack = 'MediaNextTrack',
		MediaPreviousTrack = 'MediaPreviousTrack',
	}

	export const enum Audio {
		AudioBalanceLeft = 'AudioBalanceLeft',
		AudioBalanceRight = 'AudioBalanceRight',
		AudioBassBoostDown = 'AudioBassBoostDown',
		AudioBassBoostToggle = 'AudioBassBoostToggle',
		AudioBassBoostUp = 'AudioBassBoostUp',
		AudioFaderFront = 'AudioFaderFront',
		AudioFaderRear = 'AudioFaderRear',
		AudioSurroundModeNext = 'AudioSurroundModeNext',
		AudioTrebleDown = 'AudioTrebleDown',
		AudioTrebleUp = 'AudioTrebleUp',
		AudioVolumeDown = 'AudioVolumeDown',
		AudioVolumeUp = 'AudioVolumeUp',
		AudioVolumeMute = 'AudioVolumeMute',
		MicrophoneToggle = 'MicrophoneToggle',
		MicrophoneVolumeDown = 'MicrophoneVolumeDown',
		MicrophoneVolumeUp = 'MicrophoneVolumeUp',
		MicrophoneVolumeMute = 'MicrophoneVolumeMute',
	}

	export const enum Speech {
		SpeechCorrectionList = 'SpeechCorrectionList',
		SpeechInputToggle = 'SpeechInputToggle',
	}

	export const enum Application {
		LaunchApplication1 = 'LaunchApplication1',
		LaunchApplication2 = 'LaunchApplication2',
		LaunchCalendar = 'LaunchCalendar',
		LaunchContacts = 'LaunchContacts',
		LaunchMail = 'LaunchMail',
		LaunchMediaPlayer = 'LaunchMediaPlayer',
		LaunchMusicPlayer = 'LaunchMusicPlayer',
		LaunchPhone = 'LaunchPhone',
		LaunchScreenSaver = 'LaunchScreenSaver',
		LaunchSpreadsheet = 'LaunchSpreadsheet',
		LaunchWebBrowser = 'LaunchWebBrowser',
		LaunchWebCam = 'LaunchWebCam',
		LaunchWordProcessor = 'LaunchWordProcessor',
	}

	export const enum Browser {
		BrowserBack = 'BrowserBack',
		BrowserFavorites = 'BrowserFavorites',
		BrowserForward = 'BrowserForward',
		BrowserHome = 'BrowserHome',
		BrowserRefresh = 'BrowserRefresh',
		BrowserSearch = 'BrowserSearch',
		BrowserStop = 'BrowserStop',
	}

	export const enum Mobile {
		AppSwitch = 'AppSwitch',
		Call = 'Call',
		Camera = 'Camera',
		CameraFocus = 'CameraFocus',
		EndCall = 'EndCall',
		GoBack = 'GoBack',
		GoHome = 'GoHome',
		HeadsetHook = 'HeadsetHook',
		LastNumberRedial = 'LastNumberRedial',
		Notification = 'Notification',
		MannerMode = 'MannerMode',
		VoiceDial = 'VoiceDial',
	}

	export const enum TV {
		TV = 'TV',
		TV3DMode = 'TV3DMode',
		TVAntennaCable = 'TVAntennaCable',
		TVAudioDescription = 'TVAudioDescription',
		TVAudioDescriptionMixDown = 'TVAudioDescriptionMixDown',
		TVAudioDescriptionMixUp = 'TVAudioDescriptionMixUp',
		TVContentsMenu = 'TVContentsMenu',
		TVDataService = 'TVDataService',
		TVInput = 'TVInput',
		TVInputComponent1 = 'TVInputComponent1',
		TVInputComponent2 = 'TVInputComponent2',
		TVInputComposite1 = 'TVInputComposite1',
		TVInputComposite2 = 'TVInputComposite2',
		TVInputHDMI1 = 'TVInputHDMI1',
		TVInputHDMI2 = 'TVInputHDMI2',
		TVInputHDMI3 = 'TVInputHDMI3',
		TVInputHDMI4 = 'TVInputHDMI4',
		TVInputVGA1 = 'TVInputVGA1',
		TVMediaContext = 'TVMediaContext',
		TVNetwork = 'TVNetwork',
		TVNumberEntry = 'TVNumberEntry',
		TVPower = 'TVPower',
		TVRadioService = 'TVRadioService',
		TVSatellite = 'TVSatellite',
		TVSatelliteBS = 'TVSatelliteBS',
		TVSatelliteCS = 'TVSatelliteCS',
		TVSatelliteToggle = 'TVSatelliteToggle',
		TVTerrestrialAnalog = 'TVTerrestrialAnalog',
		TVTerrestrialDigital = 'TVTerrestrialDigital',
		TVTimer = 'TVTimer',
	}

	export const enum MediaController {
		AVRInput = 'AVRInput',
		AVRPower = 'AVRPower',
		ColorF0Red = 'ColorF0Red',
		ColorF1Green = 'ColorF1Green',
		ColorF2Yellow = 'ColorF2Yellow',
		ColorF3Blue = 'ColorF3Blue',
		ColorF4Grey = 'ColorF4Grey',
		ColorF5Brown = 'ColorF5Brown',
		ClosedCaptionToggle = 'ClosedCaptionToggle',
		Dimmer = 'Dimmer',
		DisplaySwap = 'DisplaySwap',
		DVR = 'DVR',
		Exit = 'Exit',
		FavoriteClear0 = 'FavoriteClear0',
		FavoriteClear1 = 'FavoriteClear1',
		FavoriteClear2 = 'FavoriteClear2',
		FavoriteClear3 = 'FavoriteClear3',
		FavoriteRecall0 = 'FavoriteRecall0',
		FavoriteRecall1 = 'FavoriteRecall1',
		FavoriteRecall2 = 'FavoriteRecall2',
		FavoriteRecall3 = 'FavoriteRecall3',
		FavoriteStore0 = 'FavoriteStore0',
		FavoriteStore1 = 'FavoriteStore1',
		FavoriteStore2 = 'FavoriteStore2',
		FavoriteStore3 = 'FavoriteStore3',
		Guide = 'Guide',
		GuideNextDay = 'GuideNextDay',
		GuidePreviousDay = 'GuidePreviousDay',
		Info = 'Info',
		InstantReplay = 'InstantReplay',
		Link = 'Link',
		ListProgram = 'ListProgram',
		LiveContent = 'LiveContent',
		Lock = 'Lock',
		MediaApps = 'MediaApps',
		MediaAudioTrack = 'MediaAudioTrack',
		MediaLast = 'MediaLast',
		MediaSkipBackward = 'MediaSkipBackward',
		MediaSkipForward = 'MediaSkipForward',
		MediaStepBackward = 'MediaStepBackward',
		MediaStepForward = 'MediaStepForward',
		MediaTopMenu = 'MediaTopMenu',
		NavigateIn = 'NavigateIn',
		NavigateNext = 'NavigateNext',
		NavigateOut = 'NavigateOut',
		NavigatePrevious = 'NavigatePrevious',
		NextFavoriteChannel = 'NextFavoriteChannel',
		NextUserProfile = 'NextUserProfile',
		OnDemand = 'OnDemand',
		Pairing = 'Pairing',
		PinPDown = 'PinPDown',
		PinPMove = 'PinPMove',
		PinPToggle = 'PinPToggle',
		PinPUp = 'PinPUp',
		PlaySpeedDown = 'PlaySpeedDown',
		PlaySpeedReset = 'PlaySpeedReset',
		PlaySpeedUp = 'PlaySpeedUp',
		RandomToggle = 'RandomToggle',
		RcLowBattery = 'RcLowBattery',
		RecordSpeedNext = 'RecordSpeedNext',
		RfBypass = 'RfBypass',
		ScanChannelsToggle = 'ScanChannelsToggle',
		ScreenModeNext = 'ScreenModeNext',
		Settings = 'Settings',
		SplitScreenToggle = 'SplitScreenToggle',
		STBInput = 'STBInput',
		STBPower = 'STBPower',
		Subtitle = 'Subtitle',
		Teletext = 'Teletext',
		VideoModeNext = 'VideoModeNext',
		Wink = 'Wink',
		ZoomToggle = 'ZoomToggle',
	}
}

/** @spec https://w3c.github.io/uievents-code/ */
export namespace PhysicalKey {
	export const enum Alphanumeric {
		Backquote = 'Backquote',
		Backslash = 'Backslash',
		BracketLeft = 'BracketLeft',
		BracketRight = 'BracketRight',
		Comma = 'Comma',
		Digit0 = 'Digit0',
		Digit1 = 'Digit1',
		Digit2 = 'Digit2',
		Digit3 = 'Digit3',
		Digit4 = 'Digit4',
		Digit5 = 'Digit5',
		Digit6 = 'Digit6',
		Digit7 = 'Digit7',
		Digit8 = 'Digit8',
		Digit9 = 'Digit9',
		Equal = 'Equal',
		IntlBackslash = 'IntlBackslash',
		IntlRo = 'IntlRo',
		IntlYen = 'IntlYen',
		KeyA = 'KeyA',
		KeyB = 'KeyB',
		KeyC = 'KeyC',
		KeyD = 'KeyD',
		KeyE = 'KeyE',
		KeyF = 'KeyF',
		KeyG = 'KeyG',
		KeyH = 'KeyH',
		KeyI = 'KeyI',
		KeyJ = 'KeyJ',
		KeyK = 'KeyK',
		KeyL = 'KeyL',
		KeyM = 'KeyM',
		KeyN = 'KeyN',
		KeyO = 'KeyO',
		KeyP = 'KeyP',
		KeyQ = 'KeyQ',
		KeyR = 'KeyR',
		KeyS = 'KeyS',
		KeyT = 'KeyT',
		KeyU = 'KeyU',
		KeyV = 'KeyV',
		KeyW = 'KeyW',
		KeyX = 'KeyX',
		KeyY = 'KeyY',
		KeyZ = 'KeyZ',
		Minus = 'Minus',
		Period = 'Period',
		Quote = 'Quote',
		Semicolon = 'Semicolon',
		Slash = 'Slash',
		AltLeft = 'AltLeft',
		AltRight = 'AltRight',
		Backspace = 'Backspace',
		CapsLock = 'CapsLock',
		ContextMenu = 'ContextMenu',
		ControlLeft = 'ControlLeft',
		ControlRight = 'ControlRight',
		Enter = 'Enter',
		MetaLeft = 'MetaLeft',
		MetaRight = 'MetaRight',
		ShiftLeft = 'ShiftLeft',
		ShiftRight = 'ShiftRight',
		Space = 'Space',
		Tab = 'Tab',
		Convert = 'Convert',
		KanaMode = 'KanaMode',
		Lang1 = 'Lang1',
		Lang2 = 'Lang2',
		Lang3 = 'Lang3',
		Lang4 = 'Lang4',
		Lang5 = 'Lang5',
		NonConvert = 'NonConvert',
	}

	export const enum ControlPad {
		Delete = 'Delete',
		End = 'End',
		Help = 'Help',
		Home = 'Home',
		Insert = 'Insert',
		PageDown = 'PageDown',
		PageUp = 'PageUp',
	}

	export const enum ArrowPad {
		ArrowDown = 'ArrowDown',
		ArrowLeft = 'ArrowLeft',
		ArrowRight = 'ArrowRight',
		ArrowUp = 'ArrowUp',
	}

	export const enum Numpad {
		NumLock = 'NumLock',
		Numpad0 = 'Numpad0',
		Numpad1 = 'Numpad1',
		Numpad2 = 'Numpad2',
		Numpad3 = 'Numpad3',
		Numpad4 = 'Numpad4',
		Numpad5 = 'Numpad5',
		Numpad6 = 'Numpad6',
		Numpad7 = 'Numpad7',
		Numpad8 = 'Numpad8',
		Numpad9 = 'Numpad9',
		NumpadAdd = 'NumpadAdd',
		NumpadBackspace = 'NumpadBackspace',
		NumpadClear = 'NumpadClear',
		NumpadClearEntry = 'NumpadClearEntry',
		NumpadComma = 'NumpadComma',
		NumpadDecimal = 'NumpadDecimal',
		NumpadDivide = 'NumpadDivide',
		NumpadEnter = 'NumpadEnter',
		NumpadEqual = 'NumpadEqual',
		NumpadHash = 'NumpadHash',
		NumpadMemoryAdd = 'NumpadMemoryAdd',
		NumpadMemoryClear = 'NumpadMemoryClear',
		NumpadMemoryRecall = 'NumpadMemoryRecall',
		NumpadMemoryStore = 'NumpadMemoryStore',
		NumpadMemorySubtract = 'NumpadMemorySubtract',
		NumpadMultiply = 'NumpadMultiply',
		NumpadParenLeft = 'NumpadParenLeft',
		NumpadParenRight = 'NumpadParenRight',
		NumpadStar = 'NumpadStar',
		NumpadSubtract = 'NumpadSubtract',
	}

	// eslint-disable-next-line @typescript-eslint/no-shadow
	export const enum Function {
		Escape = 'Escape',
		F1 = 'F1',
		F2 = 'F2',
		F3 = 'F3',
		F4 = 'F4',
		F5 = 'F5',
		F6 = 'F6',
		F7 = 'F7',
		F8 = 'F8',
		F9 = 'F9',
		F10 = 'F10',
		F11 = 'F11',
		F12 = 'F12',
		Fn = 'Fn',
		FnLock = 'FnLock',
		PrintScreen = 'PrintScreen',
		ScrollLock = 'ScrollLock',
		Pause = 'Pause',
	}

	export const enum Media {
		BrowserBack = 'BrowserBack',
		BrowserFavorites = 'BrowserFavorites',
		BrowserForward = 'BrowserForward',
		BrowserHome = 'BrowserHome',
		BrowserRefresh = 'BrowserRefresh',
		BrowserSearch = 'BrowserSearch',
		BrowserStop = 'BrowserStop',
		Eject = 'Eject',
		LaunchApp1 = 'LaunchApp1',
		LaunchApp2 = 'LaunchApp2',
		LaunchMail = 'LaunchMail',
		MediaPlayPause = 'MediaPlayPause',
		MediaSelect = 'MediaSelect',
		MediaStop = 'MediaStop',
		MediaTrackNext = 'MediaTrackNext',
		MediaTrackPrevious = 'MediaTrackPrevious',
		Power = 'Power',
		Sleep = 'Sleep',
		AudioVolumeDown = 'AudioVolumeDown',
		AudioVolumeMute = 'AudioVolumeMute',
		AudioVolumeUp = 'AudioVolumeUp',
		WakeUp = 'WakeUp',
	}

	export const enum Special {
		/** @deprecated */
		Hyper = 'Hyper',
		/** @deprecated */
		Super = 'Super',
		/** @deprecated */
		Turbo = 'Turbo',
		/** @deprecated */
		Abort = 'Abort',
		/** @deprecated */
		Resume = 'Resume',
		/** @deprecated */
		Suspend = 'Suspend',
		/** @deprecated */
		Again = 'Again',
		/** @deprecated */
		Copy = 'Copy',
		/** @deprecated */
		Cut = 'Cut',
		/** @deprecated */
		Find = 'Find',
		/** @deprecated */
		Open = 'Open',
		/** @deprecated */
		Paste = 'Paste',
		/** @deprecated */
		Props = 'Props',
		/** @deprecated */
		Select = 'Select',
		/** @deprecated */
		Undo = 'Undo',
		Hiragana = 'Hiragana',
		Katakana = 'Katakana',
		Unidentified = 'Unidentified',
	}
}
