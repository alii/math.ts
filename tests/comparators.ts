import {expect} from './expect';

import {LessThan} from '../comparators/less-than';
expect<LessThan<10, 5>>(false);
expect<LessThan<5, 10>>(true);
expect<LessThan<5, 5>>(false);

import {GreaterThan} from '../comparators/greater-than';
expect<GreaterThan<10, 5>>(true);
expect<GreaterThan<5, 10>>(false);
expect<GreaterThan<5, 5>>(false);
