import { isEmptyObject } from './obj'
import { mainApiUrl } from '@/constants'

export function apiResource<T>(url: string) {
  const mainApi = mainApiUrl
  const endpoint = `${mainApi}${url}`

  return {
    async index(params?: Record<string, unknown>): Promise<T> {
      try {
        let requestUrl = endpoint

        if (params && !isEmptyObject(params)) {
          const stringParams: Record<string, string> = {}
          Object.keys(params).forEach((key) => {
            stringParams[key] = String(params[key])
          })

          const queryString = new URLSearchParams(stringParams).toString()
          requestUrl += `?${queryString}`
        }

        const response = await fetch(requestUrl)

        if (!response.ok) throw new Error(response.statusText)

        return response.json() as Promise<T>
      } catch (error) {
        throw new Error(String(error))
      }
    }
  }
}
