/**
 * Type that pulls the length of a tuple ensuring that the value is a number so that we don't have to worry about
 * type erasure during recursions.
 */
export type StrictTupleLength<T> = T extends { length: infer L }
	? L extends number
		? L
		: never
	: never;

export type TupleOfLength<T, L extends number, R extends T[] = []> = R["length"] extends L
	? R
	: TupleOfLength<T, L, [...R, T]>;
