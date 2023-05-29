import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { registerUser as registerUserService } from '@/services/firebase'
import type { RegisterUserFirestore } from '@/services/firebase'
import { RequestStatus, User } from '@/common/types'
import { RootState } from '../'
import { toast } from 'react-toastify'

export const registerUser = createAsyncThunk<
  User | undefined,
  RegisterUserFirestore,
  { state: RootState }
>('auth/registerUser', async (userInfo, thunkApi) => {
  const { loading } = thunkApi.getState().auth
  if (loading !== 'pending') return
  const response = await registerUserService({ ...userInfo })
  console.log('response: ', response)
  if (response.hasError) return thunkApi.rejectWithValue(response.errorMsg)
  return response.user
})

interface AuthState {
  user: User | null
  loading: RequestStatus
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: 'idle',
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        if (state.loading === 'idle') state.loading = 'pending'
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = null
          state.user = action.payload as User
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload as string
          toast.error(state.error)
        }
      })
  }
})

export const selectLoadingAuth = (state: RootState) => state.auth.loading
export const selectErrorAuth = (state: RootState) => state.auth.error
