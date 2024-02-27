import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ApiSliceState {
  baseUrl: null | string
  headers: Record<string, string>
}

const initialState: ApiSliceState = {
  baseUrl: null,
  headers: {},
}

export const apiSlice = createSlice({
  name: 'elkwood/openai-slice',
  initialState,
  reducers: {
    setBaseUrl(state, action: PayloadAction<string>) {
      state.baseUrl = action.payload
    },
    setHeaders(state, action: PayloadAction<ApiSliceState['headers']>) {
      state.headers = action.payload
    },
  },
})

export type ReduxStateWithApiSlice = { [apiSlice.name]?: ApiSliceState }

export function selectBaseUrl(state: ReduxStateWithApiSlice) {
  return state[apiSlice.name]?.baseUrl
}

export function selectHeaders(state: ReduxStateWithApiSlice) {
  return state[apiSlice.name]?.headers
}
