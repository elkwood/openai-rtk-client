import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile:
    'https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml',
  apiFile: './src/baseApi.ts',
  apiImport: 'baseApi',
  outputFile: './src/generated/openai.ts',
  exportName: 'ApiProvider',
  hooks: {
    queries: true,
    lazyQueries: true,
    mutations: true,
  },
}

export default config
