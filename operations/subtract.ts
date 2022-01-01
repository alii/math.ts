// Playground link:
// https://www.typescriptlang.org/play?#code/C4TwDgpgBAKgrmANhA8gMwDIQHYHNgAWAPAFBSwA0ZUGUEAHsDgCYDOU2cAtgEYQBOVcgCU6jFuxgBtALpQAvFFkkAfAqjCpAImR5CWuQybY2NKAH4NUAFywEydFj3EYFGm6kA6b8LcwZKgDcJCSgkHZIEAAi-AD2YEQwYsamAAyyaopJRhJKqW7engCW2GgCGhCswHKWwpXANkoywSQMYLH8DWHQrHA8wPwAhgDGwKTkAGJxXMm5nLwCQrCxsybs83yC1KI5a1Dpcln2qJg4+MT5UFOxXCpLAJKrabLqypka2rrnBk+SsdSWe6fM76GTUWy9fpDUZEa5cPyxPzHGLxIjCO5KQr3NypAItbpQfiVOCIBqKSEDEZjACMlwAzEESEA

type TupleOfLength<T, L extends number, R extends T[] = []> = R["length"] extends L
	? R
	: TupleOfLength<T, L, [...R, T]>;

type TupleDrop<T extends 0[]> = T extends [0, ...infer Rest] ? Rest : [];

export type subtract<
	From extends number,
	To extends number,
	R extends 0[] = TupleOfLength<0, From>,
	I extends 0[] = []
> = R["length"] extends To ? I["length"] : subtract<From, To, TupleDrop<R>, [...I, 0]>;
