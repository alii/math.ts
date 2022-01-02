// Playground link:
// https://www.typescriptlang.org/play?#code/C4TwDgpgBAKgrmANhA8gMwDIQHYHNgAWAPDADRQZQQAewOAJgM5TZwC2ARhAE7kBKVWg2YwA2gF0oAXigSAfNKh9RAImR5CKyTTrYmFAFABIAPxLjALlgJk6LBuJkK5UQDp3fcjHFyA3AYNQSGskCHt8R0FdfThsAGtsAHsAd2x5RRgo4SgAbyh1CKsAS2w0HgooAF8oM0odbNZOctqoK2wIADdyts6ef0DwaHhQgBFuRLASLL1mAAZ0mUz6mdlZ8ndXErLuJQhGYEkzPj3gVtlxfoHggEN6eiJr6f1Grl4oDifmF54FRZswnARIiiYwbYa2TCAwhENZQa5yUig9zg1CQhww8gcOQGHwBILQRhwDjAbjXADGwAenxY7FemOp324vxCEPC0Nh8OpIKMYP+dihxFhWMRPPcW3Kx0JiGAOOMRz2cGlqgKmnElhYvW4-XxUHoRQ6RXoECIBigZrhDNpPER5velqavFN5uARTYe3tr0UswMzMey30sxqUBdbuYVj1BqNREJxNJFIemIR73It3uIb25AAjHI5EA

import type {add} from './add';
import type {subtract} from './subtract';

export type divide<
	A extends number,
	B extends number,
	Times extends number = 0,
> = A extends 0 ? Times : divide<subtract<A, B>, B, add<Times, 1>>;
