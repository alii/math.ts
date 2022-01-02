import { multiply } from "./multiply";
import { subtract } from "./subtract2";

export type exponent<a extends number, b extends number, acc extends number = a> = b extends 1
	? acc
	: exponent<a, subtract<b, 1>, multiply<a, acc>>;
