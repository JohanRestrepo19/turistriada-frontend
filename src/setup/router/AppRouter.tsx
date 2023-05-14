import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from './AuthRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="categories/*" element={<h1>categories</h1>} />
        <Route path="places/*" element={<h1>places</h1>} />
        <Route path="/*" element={<Navigate to="auth" />} />
      </Routes>
    </>
  )
}
