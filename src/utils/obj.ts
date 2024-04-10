export function isEmptyObject<T>(object: T): boolean {
  if (!object) return true
  return Object.entries(object).length === 0
}

export function compareObjects<T extends object>(obj1: T, obj2: T) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (
      !keys2.includes(key) ||
      (obj1 as Record<string, unknown>)[key] !==
        (obj2 as Record<string, unknown>)[key]
    )
      return false
  }

  return true
}
