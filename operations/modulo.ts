import {LessThan} from '../comparators/less-than';
import {subtract} from './subtract2';

export type modulo<a extends number, b extends number> = LessThan<
	a,
	b
> extends true
	? a
	: modulo<subtract<a, b>, b>;

// Bri ish people when
export {modulo as remainder};
