declare function expect<V>(v: V): void;

// ADDITION //
import { add } from "./add";

type add1 = add<10, 20>;
expect<add1>(30);

type add2 = add<35, 13>;
expect<add2>(48);

// SUBTRACTION //
import { subtract } from "./subtract";
import { subtract as subtract2 } from "./subtract";

type sub1 = subtract<100, 75>;
expect<sub1>(25);

type sub2 = subtract<43, 11>;
expect<sub2>(32);

type sub2_1 = subtract2<100, 75>;
expect<sub2_1>(25);

type sub2_2 = subtract2<43, 11>;
expect<sub2_2>(32);

// MULTIPLICATION //
import { multiply } from "./multiply";

type mul1 = multiply<2, 3>;
expect<mul1>(6);

type mul2 = multiply<5, 7>;
expect<mul2>(35);

// DIVISION //
import { divide } from "./divide";

type div1 = divide<100, 25>;
expect<div1>(4);

type div2 = divide<100, 2>;
expect<div2>(50);
