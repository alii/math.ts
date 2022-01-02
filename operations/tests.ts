declare function expect<V>(v: V): void;

import { add } from "./add";
expect<add<10, 20>>(30);
expect<add<35, 13>>(48);

import { subtract } from "./subtract";
import { subtract as subtract2 } from "./subtract";
expect<subtract<100, 75>>(25);
expect<subtract<43, 11>>(32);
expect<subtract2<100, 75>>(25);
expect<subtract2<43, 11>>(32);

import { multiply } from "./multiply";
expect<multiply<2, 3>>(6);
expect<multiply<5, 7>>(35);

import { divide } from "./divide";
expect<divide<100, 25>>(4);
expect<divide<100, 2>>(50);
