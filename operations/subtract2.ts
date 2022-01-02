// Variation on subtract.ts
// Playground link:
// https://www.typescriptlang.org/play?ssl=5&ssc=1&pln=6&pc=1#code/C4TwDgpgBAKgrmANhA8gMwDIQHYHNgAWAPDADRQZQQAewOAJgM5TZwC2ARhAE7kBKVWg2YwA2gF0oAXigSAfNKh9RAImR5CKyTTrYmFAFABIAPxLjALlgJk6LBuJkK5UQDp3fcjHFyA3AYMaMAB7bmAoUEgoRjgOYG4AQwBjYCIEwV19Vk4ecg4M4RZ2Lm4FGXgkVEwcfGIABnIEhR1C0WN3VwrbaociBqgOOVJ29wBLbDQeJQgYxGADcWMzPhm4OdV1Wq1LFggANx5-A0joblW5xRi4xJSiAFZ+gEYAZj8DIA

import {TupleOfLength} from './utility';

export type subtract<a extends number, b extends number> = TupleOfLength<
	0,
	a
> extends [...TupleOfLength<0, b>, ...infer Result]
	? Result['length']
	: never;
