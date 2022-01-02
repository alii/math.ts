import {LessThan} from './less-than';

export type GreaterThan<a extends number, b extends number> = a extends b
	? false
	: LessThan<a, b> extends true
	? false
	: true;
