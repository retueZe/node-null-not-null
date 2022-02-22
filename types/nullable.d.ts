export type Nullable<T> = T | null | undefined
export type ExcludeNull<T> = Exclude<T, null | undefined>
export type NotNull = PropertyKey | object | bigint | boolean
export type IncludesNull<T> = null extends T
    ? true
    : undefined extends T
        ? true
        : false