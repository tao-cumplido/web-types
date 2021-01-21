import type { ChildNode, NonDocumentTypeChildNode } from './mixins';
import { Node } from './node';

export declare interface CharacterData extends NonDocumentTypeChildNode, ChildNode {}
export declare class CharacterData extends Node {}
