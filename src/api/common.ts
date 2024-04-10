import { apiResource } from "@/utils/api"

const endpoint = ''

export const { index } = apiResource<Record<string, unknown>>(endpoint)