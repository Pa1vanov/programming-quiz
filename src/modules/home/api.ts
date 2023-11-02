import { http, RequestFn } from 'services'

import { IApi } from './types'

export const GetCategory: RequestFn<IApi.Categories.Request, IApi.Categories.Response> = params => http.get('/quizes/category', { params })
