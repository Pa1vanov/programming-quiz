import { http, RequestFn } from 'services'

import { IApi } from './types'

export const Login: RequestFn<IApi.Login.Request, IApi.Login.Response> = data => http.post('/users/login', data)

export const Register: RequestFn<IApi.Register.Request, IApi.Register.Response> = data => http.post('/users/register', data)

export const ForgotPassword: RequestFn<IApi.ForgotPassword.Request, IApi.ForgotPassword.Response> = data =>
  http.get('/users/reset-password', { params: data })

export const ActivateCode: RequestFn<IApi.ActivateCode.Request, IApi.ActivateCode.Response> = data => http.post('/users/activate-code', data)

export const ResetPasswordConfirm: RequestFn<IApi.ResetPasswordConfirm.Request, IApi.ResetPasswordConfirm.Response> = data =>
  http.post('/users/reset-password-confirm', data)
