import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import {
  ReduxStateWithApiSlice,
  selectBaseUrl,
  selectHeaders,
} from './apiSlice'

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const state = api.getState() as ReduxStateWithApiSlice

  const baseUrl = selectBaseUrl(state)

  if (!baseUrl) {
    throw new Error('required baseUrl not set before request was made')
  }

  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const extraHeaders = selectHeaders(state)
      if (extraHeaders) {
        Object.entries(extraHeaders).forEach(([key, entry]) =>
          headers.set(key, entry),
        )
      }
      return headers
    },
  })

  return rawBaseQuery(args, api, extraOptions)
}

export const baseApi = createApi({
  reducerPath: 'elkwood/openai-client',
  baseQuery: dynamicBaseQuery,
  endpoints: () => ({}),
})
