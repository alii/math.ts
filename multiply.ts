type TupleOfLength<
  T,
  L extends number,
  R extends T[] = []
> = R["length"] extends L ? R : TupleOfLength<T, L, [...R, T]>;

type FlattenResult<
  T extends 0[][],
  I extends 0[] = [],
  R extends 0[] = []
> = T["length"] extends I["length"]
  ? R["length"]
  : FlattenResult<T, [...I, 0], [...R, ...T[0]]>;

export type multiply<a extends number, b extends number> = FlattenResult<
  TupleOfLength<TupleOfLength<0, a>, b>
>;
