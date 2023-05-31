import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  loginToFirebase,
  logoutFromFirebase,
  registerUser as registerUserService
} from '@/services/firebase'
import type { LoginFirebase, RegisterUserFirestore } from '@/services/firebase'
import type { RequestStatus, User } from '@/common/types'
import { RootState } from '../'

//Thunks.
export const registerUser = createAsyncThunk<
  unknown,
  RegisterUserFirestore,
  { state: RootState }
>('auth/registerUser', async (userInfo, thunkApi) => {
  const { loading } = thunkApi.getState().auth
  if (loading !== 'pending') return
  const response = await registerUserService(userInfo)
  if (response.hasError) return thunkApi.rejectWithValue(response.errorMsg)
})

export const login = createAsyncThunk<
  User | undefined, //TODO: add User and Customer types.
  LoginFirebase,
  { state: RootState }
>('auth/login', async (userCredentials, thunkApi) => {
  const { loading } = thunkApi.getState().auth
  if (loading !== 'pending') return
  const response = await loginToFirebase(userCredentials)
  if (response.hasError) return thunkApi.rejectWithValue(response.errorMsg)
  return response.user
})

export const logout = createAsyncThunk<void, void, { state: RootState }>(
  'auth/logout',
  async (_, thunkApi) => {
    const { loading } = thunkApi.getState().auth
    if (loading !== 'pending') return
    const response = await logoutFromFirebase()
    if (response.hasError) return thunkApi.rejectWithValue(response.errorMsg)
  }
)

//State declaration.
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

//Slice.
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Register
    builder
      .addCase(registerUser.pending, state => {
        if (state.loading === 'idle') state.loading = 'pending'
      })
      .addCase(registerUser.fulfilled, state => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = null
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload as string
        }
      })
    //Login
    builder
      .addCase(login.pending, state => {
        if (state.loading === 'idle') state.loading = 'pending'
      })
      .addCase(login.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = null
          state.user = action.payload as User
        }
      })
      .addCase(login.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload as string
        }
      })
    //Logout
    builder
      .addCase(logout.pending, state => {
        if (state.loading === 'idle') state.loading = 'pending'
      })
      .addCase(logout.fulfilled, state => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.user = null
          state.error = null
        }
      })
      .addCase(logout.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload as string
        }
      })
  }
})

//Selectors.
export const selectAuthLoading = (state: RootState) => state.auth.loading
export const selectAuthError = (state: RootState) => state.auth.error
export const selectAuthUser = (state: RootState) => state.auth.user

//Actions.
