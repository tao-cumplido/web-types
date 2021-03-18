// ArrayBufferView and Function are defined in lib.es5.d.ts

/** @spec https://heycam.github.io/webidl/#BufferSource */
export type BufferSource = ArrayBufferView | ArrayBuffer;

/** @spec https://heycam.github.io/webidl/#DOMTimeStamp */
export type DOMTimeStamp = number;

/** @spec https://heycam.github.io/webidl/#VoidFunction */
export type VoidFunction = () => void;
