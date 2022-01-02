import {expect} from './expect';

import {add} from '../operations/add';
expect<add<10, 20>>(30);
expect<add<35, 13>>(48);

import {subtract} from '../operations/subtract';
import {subtract as subtract2} from '../operations/subtract';
expect<subtract<100, 75>>(25);
expect<subtract<43, 11>>(32);
expect<subtract2<100, 75>>(25);
expect<subtract2<43, 11>>(32);

import {multiply} from '../operations/multiply';
expect<multiply<2, 3>>(6);
expect<multiply<5, 7>>(35);

import {divide} from '../operations/divide';
expect<divide<100, 25>>(4);
expect<divide<100, 2>>(50);

import {exponent} from '../operations/exponent';
expect<exponent<2, 3>>(8);
expect<exponent<2, 4>>(16);
expect<exponent<2, 5>>(32);
