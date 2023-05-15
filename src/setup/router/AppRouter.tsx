import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '@/layouts/AuthLayout'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/login'
import { RegisterPage } from '@/pages/register'
import { UserLayout } from '@/layouts/UserLayout'

/* import { AuthRoutes } from './AuthRoutes' */

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/places" element={<h1>places</h1>} />
          <Route path="/categories" element={<h1>categories</h1>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* <Route path="auth/*" element={<AuthRoutes />} /> */}
        {/* <Route path="/*" element={<Navigate to="auth" />} /> */}
      </Routes>
    </>
  )
}
