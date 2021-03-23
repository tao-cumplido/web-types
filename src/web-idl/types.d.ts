// ArrayBufferView and Function are defined in lib.es5.d.ts

/**
 * @idlType
 * @spec https://heycam.github.io/webidl/#BufferSource
 */
export type BufferSource = ArrayBufferView | ArrayBuffer;

/**
 * @idlType
 * @spec https://heycam.github.io/webidl/#DOMTimeStamp
 */
export type DOMTimeStamp = number;

/**
 * @idlType
 * @spec https://heycam.github.io/webidl/#VoidFunction
 */
export type VoidFunction = () => void;
