import { RootState } from '..'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLatestPlaces } from '@/services/firebase/recommendations'

import type { Category, Place, RequestStatus } from '@/common/types'
import type { PayloadAction } from '@reduxjs/toolkit'

// Thunk
export const fetchLatestPlaces = createAsyncThunk<Place[] | undefined>(
  'recommendations/fetchPlaces',
  async (_, thunkApi) => {
    try {
      return await getLatestPlaces()
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

interface RecommendationsState {
  places: Place[]
  placesStatus: RequestStatus
  filteredPlaces: Place[]
}

const initialState: RecommendationsState = {
  places: [],
  placesStatus: 'idle',
  filteredPlaces: []
}

//Slice
export const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<Category>) => {
      if (action.payload === 'todo') state.filteredPlaces = state.places
      else
        state.filteredPlaces = state.places.filter(
          place => place.category === action.payload
        )
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchLatestPlaces.pending, state => {
      state.placesStatus = 'pending'
    })
    builder.addCase(fetchLatestPlaces.fulfilled, (state, action) => {
      state.placesStatus = 'fulfilled'
      state.places = action.payload as Place[]
      state.filteredPlaces = state.places
    })
    builder.addCase(fetchLatestPlaces.rejected, state => {
      state.placesStatus = 'rejected'
    })
  }
})

// Selectors
export const selectFilteredPlaces = (state: RootState) =>
  state.recommendations.filteredPlaces

export const selectPlacesStatus = (state: RootState) =>
  state.recommendations.placesStatus

//Actions
export const { filterByCategory } = recommendationsSlice.actions
