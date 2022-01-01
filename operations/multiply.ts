// Playground link:
// https://www.typescriptlang.org/play?#code/C4TwDgpgBAKgrmANhA8gMwDIQHYHNgAWAPAFBSwA0ZUGUEAHsDgCYDOU2cAtgEYQBOVcgCU6jFuxgBtALpQAvFFkkAfAqjCpAImR5CWuQybY2NKAH4NUAFywEydFj3EYFGm6kA6b8LcwZKgDcJCSgkFAAYogAhsDGwhCscIjApOQwYsamAAyyskJQAJKZElC5cor51KJGpeXqymqK0jo4+AQGJSbshdq67QbUlpqtzoPktlGx8YnJqa5K3p6FbtkyHku+UEvSawHBJAxgAPb8wFBh0FxzAJZIIETRXaacvAJuPM-sr3z8TZExOI4BJJFJpOxIVCYNqEIjwSGOGHEbJuaIqD4qVQHS5QfizFLqa4pO6IB4ARgAzG4AKxBEhAA

type TupleOfLength<T, L extends number, R extends T[] = []> = R["length"] extends L
	? R
	: TupleOfLength<T, L, [...R, T]>;

type FlattenResult<
	T extends 0[][],
	I extends 0[] = [],
	R extends 0[] = []
> = T["length"] extends I["length"] ? R["length"] : FlattenResult<T, [...I, 0], [...R, ...T[0]]>;

export type multiply<a extends number, b extends number> = FlattenResult<
	TupleOfLength<TupleOfLength<0, a>, b>
>;
