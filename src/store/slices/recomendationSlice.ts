import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Category, Place } from '@/common/types'
import places from '@/common/data/places.json'

interface RecommendationsState {
  places: Place[] //NOTE: Esto debería ser un arreglo vacio
  filteredPlaces: Place[]
}

const initialState: RecommendationsState = {
  places: places as Place[],
  filteredPlaces: places as Place[]
}

export const recommendationsSlice = createSlice({
  name: 'recommendations',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<Category>) => {
      state.filteredPlaces = state.places.filter(
        place => place.category === action.payload
      )
    }
    /* increment: state => { */
    /*   state.value += 1 */
    /* }, */
    /* decrement: state => { */
    /*   state.value -= 1 */
    /* }, */
    /* // Use the PayloadAction type to declare the contents of `action.payload` */
    /* incrementByAmount: (state, action: PayloadAction<number>) => { */
    /*   state.value += action.payload */
    /* } */
  }
})

export const { filterByCategory } = recommendationsSlice.actions
