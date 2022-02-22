import { ExcludeNull } from './nullable'

export function isUndefined(obj: unknown): obj is undefined
export function notUndefined<T>(obj: T): obj is Exclude<T, undefined>
export function isNull(obj: unknown): obj is null | undefined
export function notNull<T>(obj: T): obj is ExcludeNull<T>