/// <reference types="vitest/globals" />
import { act, renderHook } from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'
import OpenAPIBackend from 'openapi-backend'
import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'
import { ApiProvider, apiSlice, isResponseError } from './entry'

const store = configureStore({
  reducer: {
    // Incorporate other reducers as needed
    [ApiProvider.reducerPath]: ApiProvider.reducer,
    [apiSlice.name]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiProvider.middleware),
})

const wrapper = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
)

store.dispatch(apiSlice.actions.setBaseUrl(window.location.href))

const definition =
  'https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml'
// create our mock backend with openapi-backend
const api = new OpenAPIBackend({
  quick: true,
  definition,
})
api.register('notFound', (c, res, ctx) =>
  HttpResponse.json({ error: 'not found' }, { status: 404 }),
)
api.register('notImplemented', async (c, res, ctx) => {
  const { status, mock } = api.mockResponseForOperation(
    c.operation.operationId as string,
  )

  return HttpResponse.json(mock, { status })
})

api.init()

let shouldError = false
const server = setupServer(
  http.all(`/:request`, async ({ request }) => {
    if (shouldError) {
      // throw new Error('expected fetch error')
      return HttpResponse.json(
        {
          error: 'mock error',
          status: 'error status',
        },
        { status: 500 },
      )
    }
    const url = new URL(request.url)
    const response = await api.handleRequest({
      ...request,
      path: url.pathname,
      query: url.search,
      method: request.method,
      body: request.bodyUsed ? await request.json() : null,
      headers: {},
    })

    return response
  }),
)

beforeAll(async () => {
  await api.init()
  return server.listen()
})
afterAll(() => server.close())
afterEach(() => {
  shouldError = false
  return server.resetHandlers()
})

describe('useCreateAssistantMutation', () => {
  test('hook success', async () => {
    expect.assertions(5)

    // Render the hook mutation
    const { result } = renderHook(
      () => ApiProvider.useCreateAssistantMutation(),
      { wrapper },
    )
    // wrap the mutation in react act() to catch react updates
    await act(async () => {
      const response = await result.current[0]({
        createAssistantRequest: {
          model: 'some cool llm',
        },
      })

      if (isResponseError(response)) {
        throw new Error('unexpected error response')
      }

      expect(response).toHaveProperty('data')
      expect(response.data).toHaveProperty('id')
    })
    const { data, isSuccess, isError } = result.current[1]
    expect(isSuccess).toEqual(true)
    expect(isError).toEqual(false)
    expect(data).toHaveProperty('id')
  })

  test('hook failure', async () => {
    expect.assertions(6)
    shouldError = true

    const { result } = renderHook(
      () => ApiProvider.useCreateAssistantMutation(),
      { wrapper },
    )
    await act(async () => {
      const response = await result.current[0]({
        createAssistantRequest: {
          model: 'some cool llm',
        },
      })

      expect(isResponseError(response)).toBeTruthy()
    })
    const { error, data, isSuccess, isError } = result.current[1]
    expect(isSuccess).toEqual(false)
    expect(isError).toEqual(true)
    expect(data).toBeUndefined()
    expect(error).toHaveProperty('status')
    expect(error).toHaveProperty('data')
  })
})
