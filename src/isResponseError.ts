import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export type ResponseErrorObj = { error: FetchBaseQueryError | SerializedError }
export function isResponseError(
  response: object | ResponseErrorObj,
): response is ResponseErrorObj {
  return 'error' in response
}
