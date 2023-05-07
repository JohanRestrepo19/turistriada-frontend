import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@/setup/router/AppRouter'

export const TuristriadaApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
