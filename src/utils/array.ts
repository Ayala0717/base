import { isDefined } from './helpers'

export function isEmptyArray<T>(array?: T[]) {
  return isDefined(array) && Array.isArray(array) && array.length === 0
}

export function sliceArray<T>(array?: T[], limit = -1) {
  if (array && isEmptyArray(array)) return array
  return array?.slice(0, limit)
}
