import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login/*" element={<h1>login</h1>} />
      <Route path="categories/*" element={<h1>categories</h1>} />
      <Route path="places/*" element={<h1>places</h1>} />
      <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  )
}
