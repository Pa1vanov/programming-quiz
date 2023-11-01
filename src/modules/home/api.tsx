import { http, RequestFn } from 'services'

import { IApi } from './types'

export const Feed: RequestFn<IApi.Feed.Request, IApi.Feed.Response> = data => http.post('/quizes/send_mail', data)
