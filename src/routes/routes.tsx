import { Navigate, Route, Routes as Switch } from 'react-router-dom'
import { useAuth } from 'modules/auth/context'
import { Auth } from 'pages'

import Protected from './protected'

const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Switch>
      {/* AUTH */}
      <Route path="auth" element={<Protected allow={!isAuthenticated} navigate="/" />}>
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route index path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Switch>
  )
}

export default Routes
