import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Category, Place } from '@/common/types'
import places from '@/common/data/places.json'

interface RecommendationsState {
  places: Place[]
  filteredPlaces: Place[]
}

const initialState: RecommendationsState = {
  places: places as Place[], //NOTE: Esto debería ser un arreglo vacio
  filteredPlaces: places as Place[]
}

export const recommendationsSlice = createSlice({
  name: 'recommendations',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<Category>) => {
      if (action.payload === 'todo') state.filteredPlaces = state.places
      else
        state.filteredPlaces = state.places.filter(
          place => place.category === action.payload
        )
    }
  }
})

export const { filterByCategory } = recommendationsSlice.actions
