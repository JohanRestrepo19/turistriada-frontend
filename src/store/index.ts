import { configureStore } from '@reduxjs/toolkit'
import { recommendationsSlice } from './slices/recommendationSlice'

export const store = configureStore({
  reducer: {
    recommendations: recommendationsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
