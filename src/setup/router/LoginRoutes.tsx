import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '@/pages/login'

export const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}
