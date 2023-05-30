import { configureStore } from '@reduxjs/toolkit'
import { recommendationsSlice } from './slices/recommendationSlice'
import { placesSlice } from './slices/placesSlice'
import { authSlice } from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    recommendations: recommendationsSlice.reducer,
    places: placesSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
