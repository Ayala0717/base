import { apiResource } from '@/utils/api'

const endpoint = 'data.json'

export const { index } = apiResource<Record<string, unknown>>(endpoint)
