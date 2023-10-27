import { notifications } from '@mantine/notifications'
import axios from 'axios'
import config from 'config'

import { StandardResponse } from './types'

const http = axios.create({
  baseURL: config.api.baseURL,
  transformResponse: [
    (response: string) => {
      const data: StandardResponse = JSON.parse(response)

      if (data.status === 'ERROR') notifications.show({ message: `${data.message}`, color: 'red' })

      if (data.status === 'SUCCESS') return data.data

      return data.data
    }
  ]
})

export default http
