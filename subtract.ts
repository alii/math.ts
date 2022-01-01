type TupleOfLength<
  T,
  L extends number,
  R extends T[] = []
> = R["length"] extends L ? R : TupleOfLength<T, L, [...R, T]>;

type TupleDrop<T extends 0[]> = T extends [0, ...infer Rest] ? Rest : [];

export type subtract<
  From extends number,
  To extends number,
  R extends 0[] = TupleOfLength<0, From>,
  I extends 0[] = []
> = R["length"] extends To
  ? I["length"]
  : subtract<From, To, TupleDrop<R>, [...I, 0]>;
