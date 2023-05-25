import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Place } from '@/common/types'
import { RootState } from '..'

interface PlacesState {
  selectedPlace: Place | null
}

const initialState: PlacesState = {
  selectedPlace: null
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlace: (state, action: PayloadAction<Place>) => {
      state.selectedPlace = action.payload
    }
  }
})

export const selectPlace = (state: RootState) => state.places.selectedPlace

export const { setPlace } = placesSlice.actions
