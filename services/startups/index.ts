import apiClient from '@/helpers/apiClient'
import { IStartupListResponse } from './interface'

export const getStartupListService = async () => {
  return apiClient.get<IStartupListResponse>('/startups')
}
