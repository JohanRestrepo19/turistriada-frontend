import { Navigate, Route, Routes } from 'react-router-dom'

//TODO: Remove this test component
const TestLogin = () => {
  return (
    <div>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button 2</button>
      <button className="btn btn-accent">Button 2</button>
      <button className="btn btn-error">Button 2</button>
      <button className="btn btn-info">Button 2</button>
      <button className="btn btn-warning">Button 2</button>
      <button className="btn btn-base">Button 2</button>
    </div>
  )
}

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={<TestLogin />} />
        <Route path="categories/*" element={<h1>categories</h1>} />
        <Route path="places/*" element={<h1>places</h1>} />
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </>
  )
}
