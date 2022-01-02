// Playground link:
// https://www.typescriptlang.org/play?#code/C4TwDgpgBAKgrmANhA8gMwDIQHYHNgAWAPDADRQZQQAewOAJgM5TZwC2ARhAE7kBKVWg2YwA2gF0oAXigSAfNKh9RAImR5CKyTTrYmFAFABIAPxLjALlgJk6LBuJkK5UQDp3fcjHFyA3AYNQSCgAQ3p6IhDBXX1WTh5yDmjhFnYubgUZUWN3V3gkVEwcfGIABnIQuVIc93zbIocicqgOOQNxVXUSrX9A8GhuCEY4RGBFMIiARmaAZj8DIA

import {StrictTupleLength, TupleOfLength} from './utility';

export type add<a extends number, b extends number> = StrictTupleLength<
	[...TupleOfLength<0, a>, ...TupleOfLength<0, b>]
>;
