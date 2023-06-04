import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  loginToFirebase,
  logoutFromFirebase,
  registerUser as registerUserService,
  registerCustomer as registerCustomerService
} from '@/services/firebase'
import type { LoginFirebase, RegisterUserFirestore } from '@/services/firebase'
import type { Customer, RequestStatus, User } from '@/common/types'
import { RootState } from '../'

//Thunks.
export const registerUser = createAsyncThunk<
  User | void,
  RegisterUserFirestore,
  { state: RootState }
>('auth/registerUser', async (userInfo, thunkApi) => {
  const { loading } = thunkApi.getState().auth
  if (loading !== 'pending') return
  const response = await registerUserService(userInfo)
  if (response.hasError) return thunkApi.rejectWithValue(response.errorMsg)
})

export const registerCustomer = createAsyncThunk<
  Customer | void,
  Omit<Customer, '_id' | 'role'> & { password: string },
  { state: RootState }
>('auth/registerCustomer', async (customerInfo, thunkApi) => {
  const response = await registerCustomerService(customerInfo)
  if (response.hasError) return thunkApi.rejectWithValue(response.errorMsg)
})

export const loginUser = createAsyncThunk<
  User | Customer | undefined,
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
  user: User | Customer | null
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
  reducers: {
    setAuthUser: (state, action: PayloadAction<User | Customer>) => {
      state.user = action.payload
    }
  },
  extraReducers: builder => {
    //Register user
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
    //Register customer
    builder
      .addCase(registerCustomer.pending, state => {
        if (state.loading === 'idle') state.loading = 'pending'
      })
      .addCase(registerCustomer.fulfilled, state => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = null
        }
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload as string
        }
      })
    //Login
    builder
      .addCase(loginUser.pending, state => {
        if (state.loading === 'idle') state.loading = 'pending'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = null
          state.user = action.payload as User | Customer //NOTE: Be careful with this assertion.
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
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
export const { setAuthUser } = authSlice.actions
