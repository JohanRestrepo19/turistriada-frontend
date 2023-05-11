import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginRoutes } from './LoginRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={<LoginRoutes />} />
        <Route path="categories/*" element={<h1>categories</h1>} />
        <Route path="places/*" element={<h1>places</h1>} />
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </>
  )
}
