import {subtract} from '../operations/subtract';

export type LessThan<A extends number, B extends number> = A extends 0
	? B extends 0
		? false
		: true
	: B extends 0
	? false
	: LessThan<subtract<A, 1>, subtract<B, 1>>;
