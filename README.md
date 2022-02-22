This package provides operations to handle null and undefined values.

# Functions

- `isNull(obj)` - returns `true` when type of `obj` is `undefined` or `obj` equals to `null`; otherwise `false`
- `notNull(obj)` - an equivalent of `!isNull(obj)`; use only in filter-like functions
- `isUndefined(obj)` - returns `true` when type of `obj` is `undefined`; otherwise `false`
- `notUndefined(obj)` - an equivalent of `!isUndefined(obj)`; use only in filter-like functions

# Types

- `Nullable<T>` - an equivalent of `T | null | undefined`
- `NotNull` - an union of all primitive types besides `null` and `undefined`
- `ExcludeNull<T>` - an equivalent of `Exclude<T, null | undefined>`
- `IncludesNull<T>` - equals to `true` when `null` or `undefined` extends `T`; otherwise `false`