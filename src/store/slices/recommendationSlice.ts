import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Category, Place, RequestStatus } from '@/common/types'
import { RootState } from '..'
import { getRecommendations } from '@/services/firebase/recommendations'

// Thunk
export const fetchRecommendedPlaces = createAsyncThunk<Place[] | undefined>(
  'recommendations/fetchPlaces',
  async (_, thunkApi) => {
    try {
      return await getRecommendations()
    } catch (error) {
      thunkApi.rejectWithValue(error)
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
  placesStatus: 'pending',
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
    builder.addCase(fetchRecommendedPlaces.pending, state => {
      state.placesStatus = 'pending'
    })
    builder.addCase(fetchRecommendedPlaces.fulfilled, (state, action) => {
      state.placesStatus = 'fulfilled'
      state.places = action.payload as Place[]
      state.filteredPlaces = state.places
    })
    builder.addCase(fetchRecommendedPlaces.rejected, state => {
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
