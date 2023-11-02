import { useEffect, useState } from 'react'
import { clearSession, getSession } from 'services'

import { Api, Types } from '..'

interface State {
  user: Types.IEntity.User | null
  isLoading: boolean
}

export const useProfile = () => {
  const { access } = getSession()

  const [state, setState] = useState<State>({ isLoading: !!access, user: null })

  useEffect(() => {
    const request = async () => {
      try {
        const { data: user } = await Api.Profile()

        setState({ user, isLoading: false })
      } catch (err) {
        clearSession()
        setState({ user: null, isLoading: false })
      }
    }

    if (access) request()
  }, [])

  return [state, setState] as const
}
