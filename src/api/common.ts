import { AppModel } from '@/types/models/app'
import { apiResource } from '@/utils/api'

const endpoint = 'data.json'

export const { index } = apiResource<AppModel>(endpoint)
