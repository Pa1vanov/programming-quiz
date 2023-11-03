import { useEffect, useState } from 'react'
import { notifications } from '@mantine/notifications'

import { Api, Types } from '..'

export const useQuestion = (id: number) => {
  const [state, setState] = useState<Types.IApi.Question.Response>({ questions: [] })

  useEffect(() => {
    const request = async () => {
      try {
        const { data: questions } = await Api.Question({ id })

        // setState({ questions })
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' })
      }
    }

    request()
  }, [id])

  return state
}
