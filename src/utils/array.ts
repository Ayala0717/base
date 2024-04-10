import { isDefined } from './helpers'

export function isEmptyArray<T>(array: T[]) {
  return isDefined(array) && Array.isArray(array) && array.length === 0
}
