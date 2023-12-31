import { http, RequestFn } from 'services'

import { IApi } from './types'

export const GetCategory: RequestFn<IApi.Categories.Request, IApi.Categories.Response> = params => http.get('/quizes/category', { params })

export const Feed: RequestFn<IApi.Feed.Request, IApi.Feed.Response> = data => http.post('/quizes/send_mail', data)

export const Question: RequestFn<IApi.Question.Request, IApi.Question.Response> = categoryId => http.get(`/quizes/category/${categoryId}`)

// export const Answer: any = (data: any) => http.get('/quizes/answer', data)
