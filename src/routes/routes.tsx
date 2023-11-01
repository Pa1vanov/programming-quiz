import { Navigate, Route, Routes as Switch } from 'react-router-dom'
import { useAuth } from 'modules/auth/context'
import { Auth, Main } from 'pages'

import Protected from './protected'

const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Switch>
      {/* AUTH */}

      <Route path="auth" element={<Protected allow={!isAuthenticated} navigate="/" />}>
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route path="forgot-password" element={<Auth.ForgotPassword />} />
        <Route path="activate-code" element={<Auth.ActivateCode />} />
        <Route index path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="" element={<Main.Category />} />
      <Route path="quizzes/:categoryId" element={<Main.Quiz />} />
      <Route path="aboutUs" element={<Main.AboutUs />} />
      {/* <Route path="feedBack" element={<Main.GetInTouch />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
  )
}

export default Routes
