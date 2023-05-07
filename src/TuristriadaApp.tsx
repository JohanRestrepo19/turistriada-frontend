import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@/setup/router/AppRouter'
import { Provider } from 'react-redux'
import { store } from '@/store/index'

export const TuristriadaApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
