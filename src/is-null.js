export function isUndefined(obj) {
    return typeof obj === 'undefined'
}
export function notUndefined(obj) {
    return !isUndefined(obj)
}
export function isNull(obj) {
    return isUndefined(obj) || obj === null
}
export function notNull(obj) {
    return !isNull(obj)
}