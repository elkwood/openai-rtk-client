import { baseApi as api } from "../baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createChatCompletion: build.mutation<
      CreateChatCompletionApiResponse,
      CreateChatCompletionApiArg
    >({
      query: (queryArg) => ({
        url: `/chat/completions`,
        method: "POST",
        body: queryArg.createChatCompletionRequest,
      }),
    }),
    createCompletion: build.mutation<
      CreateCompletionApiResponse,
      CreateCompletionApiArg
    >({
      query: (queryArg) => ({
        url: `/completions`,
        method: "POST",
        body: queryArg.createCompletionRequest,
      }),
    }),
    createImage: build.mutation<CreateImageApiResponse, CreateImageApiArg>({
      query: (queryArg) => ({
        url: `/images/generations`,
        method: "POST",
        body: queryArg.createImageRequest,
      }),
    }),
    createImageEdit: build.mutation<
      CreateImageEditApiResponse,
      CreateImageEditApiArg
    >({
      query: (queryArg) => ({
        url: `/images/edits`,
        method: "POST",
        body: queryArg.createImageEditRequest,
      }),
    }),
    createImageVariation: build.mutation<
      CreateImageVariationApiResponse,
      CreateImageVariationApiArg
    >({
      query: (queryArg) => ({
        url: `/images/variations`,
        method: "POST",
        body: queryArg.createImageVariationRequest,
      }),
    }),
    createEmbedding: build.mutation<
      CreateEmbeddingApiResponse,
      CreateEmbeddingApiArg
    >({
      query: (queryArg) => ({
        url: `/embeddings`,
        method: "POST",
        body: queryArg.createEmbeddingRequest,
      }),
    }),
    createSpeech: build.mutation<CreateSpeechApiResponse, CreateSpeechApiArg>({
      query: (queryArg) => ({
        url: `/audio/speech`,
        method: "POST",
        body: queryArg.createSpeechRequest,
      }),
    }),
    createTranscription: build.mutation<
      CreateTranscriptionApiResponse,
      CreateTranscriptionApiArg
    >({
      query: (queryArg) => ({
        url: `/audio/transcriptions`,
        method: "POST",
        body: queryArg.createTranscriptionRequest,
      }),
    }),
    createTranslation: build.mutation<
      CreateTranslationApiResponse,
      CreateTranslationApiArg
    >({
      query: (queryArg) => ({
        url: `/audio/translations`,
        method: "POST",
        body: queryArg.createTranslationRequest,
      }),
    }),
    listFiles: build.query<ListFilesApiResponse, ListFilesApiArg>({
      query: (queryArg) => ({
        url: `/files`,
        params: { purpose: queryArg.purpose },
      }),
    }),
    createFile: build.mutation<CreateFileApiResponse, CreateFileApiArg>({
      query: (queryArg) => ({
        url: `/files`,
        method: "POST",
        body: queryArg.createFileRequest,
      }),
    }),
    deleteFile: build.mutation<DeleteFileApiResponse, DeleteFileApiArg>({
      query: (queryArg) => ({
        url: `/files/${queryArg.fileId}`,
        method: "DELETE",
      }),
    }),
    retrieveFile: build.query<RetrieveFileApiResponse, RetrieveFileApiArg>({
      query: (queryArg) => ({ url: `/files/${queryArg.fileId}` }),
    }),
    downloadFile: build.query<DownloadFileApiResponse, DownloadFileApiArg>({
      query: (queryArg) => ({ url: `/files/${queryArg.fileId}/content` }),
    }),
    createFineTuningJob: build.mutation<
      CreateFineTuningJobApiResponse,
      CreateFineTuningJobApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs`,
        method: "POST",
        body: queryArg.createFineTuningJobRequest,
      }),
    }),
    listPaginatedFineTuningJobs: build.query<
      ListPaginatedFineTuningJobsApiResponse,
      ListPaginatedFineTuningJobsApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs`,
        params: { after: queryArg.after, limit: queryArg.limit },
      }),
    }),
    retrieveFineTuningJob: build.query<
      RetrieveFineTuningJobApiResponse,
      RetrieveFineTuningJobApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}`,
      }),
    }),
    listFineTuningEvents: build.query<
      ListFineTuningEventsApiResponse,
      ListFineTuningEventsApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}/events`,
        params: { after: queryArg.after, limit: queryArg.limit },
      }),
    }),
    cancelFineTuningJob: build.mutation<
      CancelFineTuningJobApiResponse,
      CancelFineTuningJobApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}/cancel`,
        method: "POST",
      }),
    }),
    listModels: build.query<ListModelsApiResponse, ListModelsApiArg>({
      query: () => ({ url: `/models` }),
    }),
    retrieveModel: build.query<RetrieveModelApiResponse, RetrieveModelApiArg>({
      query: (queryArg) => ({ url: `/models/${queryArg.model}` }),
    }),
    deleteModel: build.mutation<DeleteModelApiResponse, DeleteModelApiArg>({
      query: (queryArg) => ({
        url: `/models/${queryArg.model}`,
        method: "DELETE",
      }),
    }),
    createModeration: build.mutation<
      CreateModerationApiResponse,
      CreateModerationApiArg
    >({
      query: (queryArg) => ({
        url: `/moderations`,
        method: "POST",
        body: queryArg.createModerationRequest,
      }),
    }),
    listAssistants: build.query<
      ListAssistantsApiResponse,
      ListAssistantsApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    createAssistant: build.mutation<
      CreateAssistantApiResponse,
      CreateAssistantApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants`,
        method: "POST",
        body: queryArg.createAssistantRequest,
      }),
    }),
    getAssistant: build.query<GetAssistantApiResponse, GetAssistantApiArg>({
      query: (queryArg) => ({ url: `/assistants/${queryArg.assistantId}` }),
    }),
    modifyAssistant: build.mutation<
      ModifyAssistantApiResponse,
      ModifyAssistantApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants/${queryArg.assistantId}`,
        method: "POST",
        body: queryArg.modifyAssistantRequest,
      }),
    }),
    deleteAssistant: build.mutation<
      DeleteAssistantApiResponse,
      DeleteAssistantApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants/${queryArg.assistantId}`,
        method: "DELETE",
      }),
    }),
    createThread: build.mutation<CreateThreadApiResponse, CreateThreadApiArg>({
      query: (queryArg) => ({
        url: `/threads`,
        method: "POST",
        body: queryArg.createThreadRequest,
      }),
    }),
    getThread: build.query<GetThreadApiResponse, GetThreadApiArg>({
      query: (queryArg) => ({ url: `/threads/${queryArg.threadId}` }),
    }),
    modifyThread: build.mutation<ModifyThreadApiResponse, ModifyThreadApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}`,
        method: "POST",
        body: queryArg.modifyThreadRequest,
      }),
    }),
    deleteThread: build.mutation<DeleteThreadApiResponse, DeleteThreadApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}`,
        method: "DELETE",
      }),
    }),
    listMessages: build.query<ListMessagesApiResponse, ListMessagesApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/messages`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    createMessage: build.mutation<
      CreateMessageApiResponse,
      CreateMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/messages`,
        method: "POST",
        body: queryArg.createMessageRequest,
      }),
    }),
    getMessage: build.query<GetMessageApiResponse, GetMessageApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/messages/${queryArg.messageId}`,
      }),
    }),
    modifyMessage: build.mutation<
      ModifyMessageApiResponse,
      ModifyMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/messages/${queryArg.messageId}`,
        method: "POST",
        body: queryArg.modifyMessageRequest,
      }),
    }),
    createThreadAndRun: build.mutation<
      CreateThreadAndRunApiResponse,
      CreateThreadAndRunApiArg
    >({
      query: (queryArg) => ({
        url: `/threads/runs`,
        method: "POST",
        body: queryArg.createThreadAndRunRequest,
      }),
    }),
    listRuns: build.query<ListRunsApiResponse, ListRunsApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    createRun: build.mutation<CreateRunApiResponse, CreateRunApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs`,
        method: "POST",
        body: queryArg.createRunRequest,
      }),
    }),
    getRun: build.query<GetRunApiResponse, GetRunApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs/${queryArg.runId}`,
      }),
    }),
    modifyRun: build.mutation<ModifyRunApiResponse, ModifyRunApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs/${queryArg.runId}`,
        method: "POST",
        body: queryArg.modifyRunRequest,
      }),
    }),
    submitToolOuputsToRun: build.mutation<
      SubmitToolOuputsToRunApiResponse,
      SubmitToolOuputsToRunApiArg
    >({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs/${queryArg.runId}/submit_tool_outputs`,
        method: "POST",
        body: queryArg.submitToolOutputsRunRequest,
      }),
    }),
    cancelRun: build.mutation<CancelRunApiResponse, CancelRunApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs/${queryArg.runId}/cancel`,
        method: "POST",
      }),
    }),
    listRunSteps: build.query<ListRunStepsApiResponse, ListRunStepsApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs/${queryArg.runId}/steps`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    getRunStep: build.query<GetRunStepApiResponse, GetRunStepApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs/${queryArg.runId}/steps/${queryArg.stepId}`,
      }),
    }),
    listAssistantFiles: build.query<
      ListAssistantFilesApiResponse,
      ListAssistantFilesApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants/${queryArg.assistantId}/files`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    createAssistantFile: build.mutation<
      CreateAssistantFileApiResponse,
      CreateAssistantFileApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants/${queryArg.assistantId}/files`,
        method: "POST",
        body: queryArg.createAssistantFileRequest,
      }),
    }),
    getAssistantFile: build.query<
      GetAssistantFileApiResponse,
      GetAssistantFileApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants/${queryArg.assistantId}/files/${queryArg.fileId}`,
      }),
    }),
    deleteAssistantFile: build.mutation<
      DeleteAssistantFileApiResponse,
      DeleteAssistantFileApiArg
    >({
      query: (queryArg) => ({
        url: `/assistants/${queryArg.assistantId}/files/${queryArg.fileId}`,
        method: "DELETE",
      }),
    }),
    listMessageFiles: build.query<
      ListMessageFilesApiResponse,
      ListMessageFilesApiArg
    >({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/messages/${queryArg.messageId}/files`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    getMessageFile: build.query<
      GetMessageFileApiResponse,
      GetMessageFileApiArg
    >({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/messages/${queryArg.messageId}/files/${queryArg.fileId}`,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as ApiProvider };
export type CreateChatCompletionApiResponse =
  /** status 200 OK */ CreateChatCompletionResponse;
export type CreateChatCompletionApiArg = {
  createChatCompletionRequest: CreateChatCompletionRequest;
};
export type CreateCompletionApiResponse =
  /** status 200 OK */ CreateCompletionResponse;
export type CreateCompletionApiArg = {
  createCompletionRequest: CreateCompletionRequest;
};
export type CreateImageApiResponse = /** status 200 OK */ ImagesResponse;
export type CreateImageApiArg = {
  createImageRequest: CreateImageRequest;
};
export type CreateImageEditApiResponse = /** status 200 OK */ ImagesResponse;
export type CreateImageEditApiArg = {
  createImageEditRequest: CreateImageEditRequest;
};
export type CreateImageVariationApiResponse =
  /** status 200 OK */ ImagesResponse;
export type CreateImageVariationApiArg = {
  createImageVariationRequest: CreateImageVariationRequest;
};
export type CreateEmbeddingApiResponse =
  /** status 200 OK */ CreateEmbeddingResponse;
export type CreateEmbeddingApiArg = {
  createEmbeddingRequest: CreateEmbeddingRequest;
};
export type CreateSpeechApiResponse = unknown;
export type CreateSpeechApiArg = {
  createSpeechRequest: CreateSpeechRequest;
};
export type CreateTranscriptionApiResponse =
  /** status 200 OK */ CreateTranscriptionResponse;
export type CreateTranscriptionApiArg = {
  createTranscriptionRequest: CreateTranscriptionRequest;
};
export type CreateTranslationApiResponse =
  /** status 200 OK */ CreateTranslationResponse;
export type CreateTranslationApiArg = {
  createTranslationRequest: CreateTranslationRequest;
};
export type ListFilesApiResponse = /** status 200 OK */ ListFilesResponse;
export type ListFilesApiArg = {
  /** Only return files with the given purpose. */
  purpose?: string;
};
export type CreateFileApiResponse = /** status 200 OK */ OpenAiFile;
export type CreateFileApiArg = {
  createFileRequest: CreateFileRequest;
};
export type DeleteFileApiResponse = /** status 200 OK */ DeleteFileResponse;
export type DeleteFileApiArg = {
  /** The ID of the file to use for this request. */
  fileId: string;
};
export type RetrieveFileApiResponse = /** status 200 OK */ OpenAiFile;
export type RetrieveFileApiArg = {
  /** The ID of the file to use for this request. */
  fileId: string;
};
export type DownloadFileApiResponse = /** status 200 OK */ string;
export type DownloadFileApiArg = {
  /** The ID of the file to use for this request. */
  fileId: string;
};
export type CreateFineTuningJobApiResponse = /** status 200 OK */ FineTuningJob;
export type CreateFineTuningJobApiArg = {
  createFineTuningJobRequest: CreateFineTuningJobRequest;
};
export type ListPaginatedFineTuningJobsApiResponse =
  /** status 200 OK */ ListPaginatedFineTuningJobsResponse;
export type ListPaginatedFineTuningJobsApiArg = {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
};
export type RetrieveFineTuningJobApiResponse =
  /** status 200 OK */ FineTuningJob;
export type RetrieveFineTuningJobApiArg = {
  /** The ID of the fine-tuning job.
   */
  fineTuningJobId: string;
};
export type ListFineTuningEventsApiResponse =
  /** status 200 OK */ ListFineTuningJobEventsResponse;
export type ListFineTuningEventsApiArg = {
  /** The ID of the fine-tuning job to get events for.
   */
  fineTuningJobId: string;
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
};
export type CancelFineTuningJobApiResponse = /** status 200 OK */ FineTuningJob;
export type CancelFineTuningJobApiArg = {
  /** The ID of the fine-tuning job to cancel.
   */
  fineTuningJobId: string;
};
export type ListModelsApiResponse = /** status 200 OK */ ListModelsResponse;
export type ListModelsApiArg = void;
export type RetrieveModelApiResponse = /** status 200 OK */ Model;
export type RetrieveModelApiArg = {
  /** The ID of the model to use for this request */
  model: string;
};
export type DeleteModelApiResponse = /** status 200 OK */ DeleteModelResponse;
export type DeleteModelApiArg = {
  /** The model to delete */
  model: string;
};
export type CreateModerationApiResponse =
  /** status 200 OK */ CreateModerationResponse;
export type CreateModerationApiArg = {
  createModerationRequest: CreateModerationRequest;
};
export type ListAssistantsApiResponse =
  /** status 200 OK */ ListAssistantsResponse;
export type ListAssistantsApiArg = {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type CreateAssistantApiResponse = /** status 200 OK */ Assistant;
export type CreateAssistantApiArg = {
  createAssistantRequest: CreateAssistantRequest;
};
export type GetAssistantApiResponse = /** status 200 OK */ Assistant;
export type GetAssistantApiArg = {
  /** The ID of the assistant to retrieve. */
  assistantId: string;
};
export type ModifyAssistantApiResponse = /** status 200 OK */ Assistant;
export type ModifyAssistantApiArg = {
  /** The ID of the assistant to modify. */
  assistantId: string;
  modifyAssistantRequest: ModifyAssistantRequest;
};
export type DeleteAssistantApiResponse =
  /** status 200 OK */ DeleteAssistantResponse;
export type DeleteAssistantApiArg = {
  /** The ID of the assistant to delete. */
  assistantId: string;
};
export type CreateThreadApiResponse = /** status 200 OK */ Thread;
export type CreateThreadApiArg = {
  createThreadRequest: CreateThreadRequest;
};
export type GetThreadApiResponse = /** status 200 OK */ Thread;
export type GetThreadApiArg = {
  /** The ID of the thread to retrieve. */
  threadId: string;
};
export type ModifyThreadApiResponse = /** status 200 OK */ Thread;
export type ModifyThreadApiArg = {
  /** The ID of the thread to modify. Only the `metadata` can be modified. */
  threadId: string;
  modifyThreadRequest: ModifyThreadRequest;
};
export type DeleteThreadApiResponse = /** status 200 OK */ DeleteThreadResponse;
export type DeleteThreadApiArg = {
  /** The ID of the thread to delete. */
  threadId: string;
};
export type ListMessagesApiResponse = /** status 200 OK */ ListMessagesResponse;
export type ListMessagesApiArg = {
  /** The ID of the [thread](/docs/api-reference/threads) the messages belong to. */
  threadId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type CreateMessageApiResponse = /** status 200 OK */ TheMessageObject;
export type CreateMessageApiArg = {
  /** The ID of the [thread](/docs/api-reference/threads) to create a message for. */
  threadId: string;
  createMessageRequest: CreateMessageRequest;
};
export type GetMessageApiResponse = /** status 200 OK */ TheMessageObject;
export type GetMessageApiArg = {
  /** The ID of the [thread](/docs/api-reference/threads) to which this message belongs. */
  threadId: string;
  /** The ID of the message to retrieve. */
  messageId: string;
};
export type ModifyMessageApiResponse = /** status 200 OK */ TheMessageObject;
export type ModifyMessageApiArg = {
  /** The ID of the thread to which this message belongs. */
  threadId: string;
  /** The ID of the message to modify. */
  messageId: string;
  modifyMessageRequest: ModifyMessageRequest;
};
export type CreateThreadAndRunApiResponse = /** status 200 OK */ ARunOnAThread;
export type CreateThreadAndRunApiArg = {
  createThreadAndRunRequest: CreateThreadAndRunRequest;
};
export type ListRunsApiResponse = /** status 200 OK */ ListRunsResponse;
export type ListRunsApiArg = {
  /** The ID of the thread the run belongs to. */
  threadId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type CreateRunApiResponse = /** status 200 OK */ ARunOnAThread;
export type CreateRunApiArg = {
  /** The ID of the thread to run. */
  threadId: string;
  createRunRequest: CreateRunRequest;
};
export type GetRunApiResponse = /** status 200 OK */ ARunOnAThread;
export type GetRunApiArg = {
  /** The ID of the [thread](/docs/api-reference/threads) that was run. */
  threadId: string;
  /** The ID of the run to retrieve. */
  runId: string;
};
export type ModifyRunApiResponse = /** status 200 OK */ ARunOnAThread;
export type ModifyRunApiArg = {
  /** The ID of the [thread](/docs/api-reference/threads) that was run. */
  threadId: string;
  /** The ID of the run to modify. */
  runId: string;
  modifyRunRequest: ModifyRunRequest;
};
export type SubmitToolOuputsToRunApiResponse =
  /** status 200 OK */ ARunOnAThread;
export type SubmitToolOuputsToRunApiArg = {
  /** The ID of the [thread](/docs/api-reference/threads) to which this run belongs. */
  threadId: string;
  /** The ID of the run that requires the tool output submission. */
  runId: string;
  submitToolOutputsRunRequest: SubmitToolOutputsRunRequest;
};
export type CancelRunApiResponse = /** status 200 OK */ ARunOnAThread;
export type CancelRunApiArg = {
  /** The ID of the thread to which this run belongs. */
  threadId: string;
  /** The ID of the run to cancel. */
  runId: string;
};
export type ListRunStepsApiResponse = /** status 200 OK */ ListRunStepsResponse;
export type ListRunStepsApiArg = {
  /** The ID of the thread the run and run steps belong to. */
  threadId: string;
  /** The ID of the run the run steps belong to. */
  runId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type GetRunStepApiResponse = /** status 200 OK */ RunSteps;
export type GetRunStepApiArg = {
  /** The ID of the thread to which the run and run step belongs. */
  threadId: string;
  /** The ID of the run to which the run step belongs. */
  runId: string;
  /** The ID of the run step to retrieve. */
  stepId: string;
};
export type ListAssistantFilesApiResponse =
  /** status 200 OK */ ListAssistantFilesResponse;
export type ListAssistantFilesApiArg = {
  /** The ID of the assistant the file belongs to. */
  assistantId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type CreateAssistantFileApiResponse =
  /** status 200 OK */ AssistantFiles;
export type CreateAssistantFileApiArg = {
  /** The ID of the assistant for which to create a File.
   */
  assistantId: string;
  createAssistantFileRequest: CreateAssistantFileRequest;
};
export type GetAssistantFileApiResponse = /** status 200 OK */ AssistantFiles;
export type GetAssistantFileApiArg = {
  /** The ID of the assistant who the file belongs to. */
  assistantId: string;
  /** The ID of the file we're getting. */
  fileId: string;
};
export type DeleteAssistantFileApiResponse =
  /** status 200 OK */ DeleteAssistantFileResponse;
export type DeleteAssistantFileApiArg = {
  /** The ID of the assistant that the file belongs to. */
  assistantId: string;
  /** The ID of the file to delete. */
  fileId: string;
};
export type ListMessageFilesApiResponse =
  /** status 200 OK */ ListMessageFilesResponse;
export type ListMessageFilesApiArg = {
  /** The ID of the thread that the message and files belong to. */
  threadId: string;
  /** The ID of the message that the files belongs to. */
  messageId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type GetMessageFileApiResponse = /** status 200 OK */ MessageFiles;
export type GetMessageFileApiArg = {
  /** The ID of the thread to which the message and File belong. */
  threadId: string;
  /** The ID of the message the file belongs to. */
  messageId: string;
  /** The ID of the file being retrieved. */
  fileId: string;
};
export type ChatCompletionMessageToolCall = {
  /** The ID of the tool call. */
  id: string;
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  /** The function that the model called. */
  function: {
    /** The name of the function to call. */
    name: string;
    /** The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
    arguments: string;
  };
};
export type ChatCompletionMessageToolCalls = ChatCompletionMessageToolCall[];
export type ChatCompletionResponseMessage = {
  /** The contents of the message. */
  content: string | null;
  tool_calls?: ChatCompletionMessageToolCalls;
  /** The role of the author of this message. */
  role: "assistant";
  /** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
  function_call?: {
    /** The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
    arguments: string;
    /** The name of the function to call. */
    name: string;
  };
};
export type ChatCompletionTokenLogprob = {
  /** The token. */
  token: string;
  /** The log probability of this token. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
  bytes: number[] | null;
  /** List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned. */
  top_logprobs: {
    /** The token. */
    token: string;
    /** The log probability of this token. */
    logprob: number;
    /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
    bytes: number[] | null;
  }[];
};
export type CompletionUsage = {
  /** Number of tokens in the generated completion. */
  completion_tokens: number;
  /** Number of tokens in the prompt. */
  prompt_tokens: number;
  /** Total number of tokens used in the request (prompt + completion). */
  total_tokens: number;
};
export type CreateChatCompletionResponse = {
  /** A unique identifier for the chat completion. */
  id: string;
  /** A list of chat completion choices. Can be more than one if `n` is greater than 1. */
  choices: {
    /** The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
        `length` if the maximum number of tokens specified in the request was reached,
        `content_filter` if content was omitted due to a flag from our content filters,
        `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
         */
    finish_reason:
      | "stop"
      | "length"
      | "tool_calls"
      | "content_filter"
      | "function_call";
    /** The index of the choice in the list of choices. */
    index: number;
    message: ChatCompletionResponseMessage;
    /** Log probability information for the choice. */
    logprobs: {
      /** A list of message content tokens with log probability information. */
      content: ChatCompletionTokenLogprob[] | null;
    } | null;
  }[];
  /** The Unix timestamp (in seconds) of when the chat completion was created. */
  created: number;
  /** The model used for the chat completion. */
  model: string;
  /** This fingerprint represents the backend configuration that the model runs with.
    
    Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
     */
  system_fingerprint?: string;
  /** The object type, which is always `chat.completion`. */
  object: "chat.completion";
  usage?: CompletionUsage;
};
export type SystemMessage = {
  /** The contents of the system message. */
  content: string;
  /** The role of the messages author, in this case `system`. */
  role: "system";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
};
export type TextContentPart = {
  /** The type of the content part. */
  type: "text";
  /** The text content. */
  text: string;
};
export type ImageContentPart = {
  /** The type of the content part. */
  type: "image_url";
  image_url: {
    /** Either a URL of the image or the base64 encoded image data. */
    url: string;
    /** Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision/low-or-high-fidelity-image-understanding). */
    detail?: "auto" | "low" | "high";
  };
};
export type ChatCompletionRequestMessageContentPart =
  | TextContentPart
  | ImageContentPart;
export type UserMessage = {
  /** The contents of the user message.
   */
  content: string | ChatCompletionRequestMessageContentPart[];
  /** The role of the messages author, in this case `user`. */
  role: "user";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
};
export type AssistantMessage = {
  /** The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.
   */
  content?: string | null;
  /** The role of the messages author, in this case `assistant`. */
  role: "assistant";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
  tool_calls?: ChatCompletionMessageToolCalls;
  /** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
  function_call?: {
    /** The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
    arguments: string;
    /** The name of the function to call. */
    name: string;
  };
};
export type ToolMessage = {
  /** The role of the messages author, in this case `tool`. */
  role: "tool";
  /** The contents of the tool message. */
  content: string;
  /** Tool call that this message is responding to. */
  tool_call_id: string;
};
export type FunctionMessage = {
  /** The role of the messages author, in this case `function`. */
  role: "function";
  /** The contents of the function message. */
  content: string | null;
  /** The name of the function to call. */
  name: string;
};
export type ChatCompletionRequestMessage =
  | SystemMessage
  | UserMessage
  | AssistantMessage
  | ToolMessage
  | FunctionMessage;
export type FunctionParameters = {
  [key: string]: any;
};
export type FunctionObject = {
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  parameters?: FunctionParameters;
};
export type ChatCompletionTool = {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  function: FunctionObject;
};
export type ChatCompletionNamedToolChoice = {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  function: {
    /** The name of the function to call. */
    name: string;
  };
};
export type ChatCompletionToolChoiceOption =
  | ("none" | "auto")
  | ChatCompletionNamedToolChoice;
export type ChatCompletionFunctionCallOption = {
  /** The name of the function to call. */
  name: string;
};
export type ChatCompletionFunctions = {
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  parameters?: FunctionParameters;
};
export type CreateChatCompletionRequest = {
  /** A list of messages comprising the conversation so far. [Example Python code](https://cookbook.openai.com/examples/how_to_format_inputs_to_chatgpt_models). */
  messages: ChatCompletionRequestMessage[];
  /** ID of the model to use. See the [model endpoint compatibility](/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API. */
  model:
    | string
    | (
        | "gpt-4-0125-preview"
        | "gpt-4-turbo-preview"
        | "gpt-4-1106-preview"
        | "gpt-4-vision-preview"
        | "gpt-4"
        | "gpt-4-0314"
        | "gpt-4-0613"
        | "gpt-4-32k"
        | "gpt-4-32k-0314"
        | "gpt-4-32k-0613"
        | "gpt-3.5-turbo"
        | "gpt-3.5-turbo-16k"
        | "gpt-3.5-turbo-0301"
        | "gpt-3.5-turbo-0613"
        | "gpt-3.5-turbo-1106"
        | "gpt-3.5-turbo-0125"
        | "gpt-3.5-turbo-16k-0613"
      );
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
     */
  frequency_penalty?: number | null;
  /** Modify the likelihood of specified tokens appearing in the completion.
    
    Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
     */
  logit_bias?: {
    [key: string]: number;
  } | null;
  /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`. This option is currently not available on the `gpt-4-vision-preview` model. */
  logprobs?: boolean | null;
  /** An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used. */
  top_logprobs?: number | null;
  /** The maximum number of [tokens](/tokenizer) that can be generated in the chat completion.
    
    The total length of input tokens and generated tokens is limited by the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
     */
  max_tokens?: number | null;
  /** How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs. */
  n?: number | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
     */
  presence_penalty?: number | null;
  /** An object specifying the format that the model must output. Compatible with [GPT-4 Turbo](/docs/models/gpt-4-and-gpt-4-turbo) and all GPT-3.5 Turbo models newer than `gpt-3.5-turbo-1106`.
    
    Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is valid JSON.
    
    **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
     */
  response_format?: {
    /** Must be one of `text` or `json_object`. */
    type?: "text" | "json_object";
  };
  /** This feature is in Beta.
    If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
    Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
     */
  seed?: number | null;
  /** Up to 4 sequences where the API will stop generating further tokens.
   */
  stop?: (string | null) | string[];
  /** If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
   */
  stream?: boolean | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
    
    We generally recommend altering this or `top_p` but not both.
     */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or `temperature` but not both.
     */
  top_p?: number | null;
  /** A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for.
   */
  tools?: ChatCompletionTool[];
  tool_choice?: ChatCompletionToolChoiceOption;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
  /** Deprecated in favor of `tool_choice`.
    
    Controls which (if any) function is called by the model.
    `none` means the model will not call a function and instead generates a message.
    `auto` means the model can pick between generating a message or calling a function.
    Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
    
    `none` is the default when no functions are present. `auto` is the default if functions are present.
     */
  function_call?: ("none" | "auto") | ChatCompletionFunctionCallOption;
  /** Deprecated in favor of `tools`.
    
    A list of functions the model may generate JSON inputs for.
     */
  functions?: ChatCompletionFunctions[];
};
export type CreateCompletionResponse = {
  /** A unique identifier for the completion. */
  id: string;
  /** The list of completion choices the model generated for the input prompt. */
  choices: {
    /** The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
        `length` if the maximum number of tokens specified in the request was reached,
        or `content_filter` if content was omitted due to a flag from our content filters.
         */
    finish_reason: "stop" | "length" | "content_filter";
    index: number;
    logprobs: {
      text_offset?: number[];
      token_logprobs?: number[];
      tokens?: string[];
      top_logprobs?: {
        [key: string]: number;
      }[];
    } | null;
    text: string;
  }[];
  /** The Unix timestamp (in seconds) of when the completion was created. */
  created: number;
  /** The model used for completion. */
  model: string;
  /** This fingerprint represents the backend configuration that the model runs with.
    
    Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
     */
  system_fingerprint?: string;
  /** The object type, which is always "text_completion" */
  object: "text_completion";
  usage?: CompletionUsage;
};
export type CreateCompletionRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   */
  model: string | ("gpt-3.5-turbo-instruct" | "davinci-002" | "babbage-002");
  /** The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
    
    Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
     */
  prompt:
    | (
        | (string | null)
        | (string[] | null)
        | (number[] | null)
        | (number[][] | null)
      )
    | null;
  /** Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.
    
    When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.
    
    **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     */
  best_of?: number | null;
  /** Echo back the prompt in addition to the completion
   */
  echo?: boolean | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
     */
  frequency_penalty?: number | null;
  /** Modify the likelihood of specified tokens appearing in the completion.
    
    Accepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
    
    As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.
     */
  logit_bias?: {
    [key: string]: number;
  } | null;
  /** Include the log probabilities on the `logprobs` most likely output tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
    
    The maximum value for `logprobs` is 5.
     */
  logprobs?: number | null;
  /** The maximum number of [tokens](/tokenizer) that can be generated in the completion.
    
    The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
     */
  max_tokens?: number | null;
  /** How many completions to generate for each prompt.
    
    **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     */
  n?: number | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
     */
  presence_penalty?: number | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
    
    Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
     */
  seed?: number | null;
  /** Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
   */
  stop?: ((string | null) | (string[] | null)) | null;
  /** Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
   */
  stream?: boolean | null;
  /** The suffix that comes after a completion of inserted text. */
  suffix?: string | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
    
    We generally recommend altering this or `top_p` but not both.
     */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or `temperature` but not both.
     */
  top_p?: number | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
};
export type Image = {
  /** The base64-encoded JSON of the generated image, if `response_format` is `b64_json`. */
  b64_json?: string;
  /** The URL of the generated image, if `response_format` is `url` (default). */
  url?: string;
  /** The prompt that was used to generate the image, if there was any revision to the prompt. */
  revised_prompt?: string;
};
export type ImagesResponse = {
  created: number;
  data: Image[];
};
export type CreateImageRequest = {
  /** A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`. */
  prompt: string;
  /** The model to use for image generation. */
  model?: (string | ("dall-e-2" | "dall-e-3")) | null;
  /** The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported. */
  n?: number | null;
  /** The quality of the image that will be generated. `hd` creates images with finer details and greater consistency across the image. This param is only supported for `dall-e-3`. */
  quality?: "standard" | "hd";
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
  response_format?: ("url" | "b64_json") | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models. */
  size?:
    | ("256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792")
    | null;
  /** The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`. */
  style?: ("vivid" | "natural") | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
};
export type CreateImageEditRequest = {
  /** The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask. */
  image: Blob;
  /** A text description of the desired image(s). The maximum length is 1000 characters. */
  prompt: string;
  /** An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`. */
  mask?: Blob;
  /** The model to use for image generation. Only `dall-e-2` is supported at this time. */
  model?: (string | "dall-e-2") | null;
  /** The number of images to generate. Must be between 1 and 10. */
  n?: number | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
  response_format?: ("url" | "b64_json") | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
};
export type CreateImageVariationRequest = {
  /** The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square. */
  image: Blob;
  /** The model to use for image generation. Only `dall-e-2` is supported at this time. */
  model?: (string | "dall-e-2") | null;
  /** The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported. */
  n?: number | null;
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
  response_format?: ("url" | "b64_json") | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
};
export type Embedding = {
  /** The index of the embedding in the list of embeddings. */
  index: number;
  /** The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](/docs/guides/embeddings).
   */
  embedding: number[];
  /** The object type, which is always "embedding". */
  object: "embedding";
};
export type CreateEmbeddingResponse = {
  /** The list of embeddings generated by the model. */
  data: Embedding[];
  /** The name of the model used to generate the embedding. */
  model: string;
  /** The object type, which is always "list". */
  object: "list";
  /** The usage information for the request. */
  usage: {
    /** The number of tokens used by the prompt. */
    prompt_tokens: number;
    /** The total number of tokens used by the request. */
    total_tokens: number;
  };
};
export type CreateEmbeddingRequest = {
  /** Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
   */
  input: string | string[] | number[] | number[][];
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   */
  model:
    | string
    | (
        | "text-embedding-ada-002"
        | "text-embedding-3-small"
        | "text-embedding-3-large"
      );
  /** The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/). */
  encoding_format?: "float" | "base64";
  /** The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.
   */
  dimensions?: number;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
};
export type CreateSpeechRequest = {
  /** One of the available [TTS models](/docs/models/tts): `tts-1` or `tts-1-hd`
   */
  model: string | ("tts-1" | "tts-1-hd");
  /** The text to generate audio for. The maximum length is 4096 characters. */
  input: string;
  /** The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech/voice-options). */
  voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
  /** The format to return audio in.
    Supported formats are `mp3`, `opus`, `aac`, `flac`, `pcm`, and `wav`.
    
    The `pcm` audio format, similar to `wav` but without a header, utilizes a 24kHz sample rate, mono channel, and 16-bit depth in signed little-endian format. */
  response_format?: "mp3" | "opus" | "aac" | "flac" | "pcm" | "wav";
  /** The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default. */
  speed?: number;
};
export type CreateTranscriptionResponse = {
  text: string;
};
export type CreateTranscriptionRequest = {
  /** The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Blob;
  /** ID of the model to use. Only `whisper-1` is currently available.
   */
  model: string | "whisper-1";
  /** The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
   */
  language?: string;
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
   */
  prompt?: string;
  /** The format of the transcript output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
   */
  response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The timestamp granularities to populate for this transcription. Any of these options: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
   */
  "timestamp_granularities[]"?: ("word" | "segment")[];
};
export type CreateTranslationResponse = {
  text: string;
};
export type CreateTranslationRequest = {
  /** The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Blob;
  /** ID of the model to use. Only `whisper-1` is currently available.
   */
  model: string | "whisper-1";
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
   */
  prompt?: string;
  /** The format of the transcript output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
   */
  response_format?: string;
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
};
export type OpenAiFile = {
  /** The file identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The Unix timestamp (in seconds) for when the file was created. */
  created_at: number;
  /** The name of the file. */
  filename: string;
  /** The object type, which is always `file`. */
  object: "file";
  /** The intended purpose of the file. Supported values are `fine-tune`, `fine-tune-results`, `assistants`, and `assistants_output`. */
  purpose:
    | "fine-tune"
    | "fine-tune-results"
    | "assistants"
    | "assistants_output";
  /** Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`. */
  status: "uploaded" | "processed" | "error";
  /** Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`. */
  status_details?: string;
};
export type ListFilesResponse = {
  data: OpenAiFile[];
  object: "list";
};
export type CreateFileRequest = {
  /** The File object (not file name) to be uploaded.
   */
  file: Blob;
  /** The intended purpose of the uploaded file.
    
    Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning) and "assistants" for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning.
     */
  purpose: "fine-tune" | "assistants";
};
export type DeleteFileResponse = {
  id: string;
  object: "file";
  deleted: boolean;
};
export type FineTuningJob = {
  /** The object identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
  created_at: number;
  /** For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure. */
  error: {
    /** A machine-readable error code. */
    code: string;
    /** A human-readable error message. */
    message: string;
    /** The parameter that was invalid, usually `training_file` or `validation_file`. This field will be null if the failure was not parameter-specific. */
    param: string | null;
  } | null;
  /** The name of the fine-tuned model that is being created. The value will be null if the fine-tuning job is still running. */
  fine_tuned_model: string | null;
  /** The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running. */
  finished_at: number | null;
  /** The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details. */
  hyperparameters: {
    /** The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
        "auto" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs. */
    n_epochs: "auto" | number;
  };
  /** The base model that is being fine-tuned. */
  model: string;
  /** The object type, which is always "fine_tuning.job". */
  object: "fine_tuning.job";
  /** The organization that owns the fine-tuning job. */
  organization_id: string;
  /** The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the [Files API](/docs/api-reference/files/retrieve-contents). */
  result_files: string[];
  /** The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`. */
  status:
    | "validating_files"
    | "queued"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled";
  /** The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running. */
  trained_tokens: number | null;
  /** The file ID used for training. You can retrieve the training data with the [Files API](/docs/api-reference/files/retrieve-contents). */
  training_file: string;
  /** The file ID used for validation. You can retrieve the validation results with the [Files API](/docs/api-reference/files/retrieve-contents). */
  validation_file: string | null;
};
export type CreateFineTuningJobRequest = {
  /** The name of the model to fine-tune. You can select one of the
    [supported models](/docs/guides/fine-tuning/what-models-can-be-fine-tuned).
     */
  model: string | ("babbage-002" | "davinci-002" | "gpt-3.5-turbo");
  /** The ID of an uploaded file that contains training data.
    
    See [upload file](/docs/api-reference/files/upload) for how to upload a file.
    
    Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.
    
    See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
  training_file: string;
  /** The hyperparameters used for the fine-tuning job. */
  hyperparameters?: {
    /** Number of examples in each batch. A larger batch size means that model parameters
        are updated less frequently, but with lower variance.
         */
    batch_size?: "auto" | number;
    /** Scaling factor for the learning rate. A smaller learning rate may be useful to avoid
        overfitting.
         */
    learning_rate_multiplier?: "auto" | number;
    /** The number of epochs to train the model for. An epoch refers to one full cycle
        through the training dataset.
         */
    n_epochs?: "auto" | number;
  };
  /** A string of up to 18 characters that will be added to your fine-tuned model name.
    
    For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-3.5-turbo:openai:custom-model-name:7p4lURel`.
     */
  suffix?: string | null;
  /** The ID of an uploaded file that contains validation data.
    
    If you provide this file, the data is used to generate validation
    metrics periodically during fine-tuning. These metrics can be viewed in
    the fine-tuning results file.
    The same data should not be present in both train and validation files.
    
    Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.
    
    See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
  validation_file?: string | null;
};
export type ListPaginatedFineTuningJobsResponse = {
  data: FineTuningJob[];
  has_more: boolean;
  object: "list";
};
export type FineTuningJobEvent = {
  id: string;
  created_at: number;
  level: "info" | "warn" | "error";
  message: string;
  object: "fine_tuning.job.event";
};
export type ListFineTuningJobEventsResponse = {
  data: FineTuningJobEvent[];
  object: "list";
};
export type Model = {
  /** The model identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) when the model was created. */
  created: number;
  /** The object type, which is always "model". */
  object: "model";
  /** The organization that owns the model. */
  owned_by: string;
};
export type ListModelsResponse = {
  object: "list";
  data: Model[];
};
export type DeleteModelResponse = {
  id: string;
  deleted: boolean;
  object: string;
};
export type CreateModerationResponse = {
  /** The unique identifier for the moderation request. */
  id: string;
  /** The model used to generate the moderation results. */
  model: string;
  /** A list of moderation objects. */
  results: {
    /** Whether the content violates [OpenAI's usage policies](/policies/usage-policies). */
    flagged: boolean;
    /** A list of the categories, and whether they are flagged or not. */
    categories: {
      /** Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment. */
      hate: boolean;
      /** Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. */
      "hate/threatening": boolean;
      /** Content that expresses, incites, or promotes harassing language towards any target. */
      harassment: boolean;
      /** Harassment content that also includes violence or serious harm towards any target. */
      "harassment/threatening": boolean;
      /** Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders. */
      "self-harm": boolean;
      /** Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders. */
      "self-harm/intent": boolean;
      /** Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts. */
      "self-harm/instructions": boolean;
      /** Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness). */
      sexual: boolean;
      /** Sexual content that includes an individual who is under 18 years old. */
      "sexual/minors": boolean;
      /** Content that depicts death, violence, or physical injury. */
      violence: boolean;
      /** Content that depicts death, violence, or physical injury in graphic detail. */
      "violence/graphic": boolean;
    };
    /** A list of the categories along with their scores as predicted by model. */
    category_scores: {
      /** The score for the category 'hate'. */
      hate: number;
      /** The score for the category 'hate/threatening'. */
      "hate/threatening": number;
      /** The score for the category 'harassment'. */
      harassment: number;
      /** The score for the category 'harassment/threatening'. */
      "harassment/threatening": number;
      /** The score for the category 'self-harm'. */
      "self-harm": number;
      /** The score for the category 'self-harm/intent'. */
      "self-harm/intent": number;
      /** The score for the category 'self-harm/instructions'. */
      "self-harm/instructions": number;
      /** The score for the category 'sexual'. */
      sexual: number;
      /** The score for the category 'sexual/minors'. */
      "sexual/minors": number;
      /** The score for the category 'violence'. */
      violence: number;
      /** The score for the category 'violence/graphic'. */
      "violence/graphic": number;
    };
  }[];
};
export type CreateModerationRequest = {
  /** The input text to classify */
  input: string | string[];
  /** Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.
    
    The default is `text-moderation-latest` which will be automatically upgraded over time. This ensures you are always using our most accurate model. If you use `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`.
     */
  model?: string | ("text-moderation-latest" | "text-moderation-stable");
};
export type CodeInterpreterTool = {
  /** The type of tool being defined: `code_interpreter` */
  type: "code_interpreter";
};
export type RetrievalTool = {
  /** The type of tool being defined: `retrieval` */
  type: "retrieval";
};
export type FunctionTool = {
  /** The type of tool being defined: `function` */
  type: "function";
  function: FunctionObject;
};
export type Assistant = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `assistant`. */
  object: "assistant";
  /** The Unix timestamp (in seconds) for when the assistant was created. */
  created_at: number;
  /** The name of the assistant. The maximum length is 256 characters.
   */
  name: string | null;
  /** The description of the assistant. The maximum length is 512 characters.
   */
  description: string | null;
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   */
  model: string;
  /** The system instructions that the assistant uses. The maximum length is 32768 characters.
   */
  instructions: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools: (CodeInterpreterTool | RetrievalTool | FunctionTool)[];
  /** A list of [file](/docs/api-reference/files) IDs attached to this assistant. There can be a maximum of 20 files attached to the assistant. Files are ordered by their creation date in ascending order.
   */
  file_ids: string[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata: object | null;
};
export type ListAssistantsResponse = {
  object: string;
  data: Assistant[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type CreateAssistantRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   */
  model: string;
  /** The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;
  /** The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;
  /** The system instructions that the assistant uses. The maximum length is 32768 characters.
   */
  instructions?: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools?: (CodeInterpreterTool | RetrievalTool | FunctionTool)[];
  /** A list of [file](/docs/api-reference/files) IDs attached to this assistant. There can be a maximum of 20 files attached to the assistant. Files are ordered by their creation date in ascending order.
   */
  file_ids?: string[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type ModifyAssistantRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   */
  model?: string;
  /** The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;
  /** The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;
  /** The system instructions that the assistant uses. The maximum length is 32768 characters.
   */
  instructions?: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools?: (CodeInterpreterTool | RetrievalTool | FunctionTool)[];
  /** A list of [File](/docs/api-reference/files) IDs attached to this assistant. There can be a maximum of 20 files attached to the assistant. Files are ordered by their creation date in ascending order. If a file was previously attached to the list but does not show up in the list, it will be deleted from the assistant.
   */
  file_ids?: string[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type DeleteAssistantResponse = {
  id: string;
  deleted: boolean;
  object: "assistant.deleted";
};
export type Thread = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread`. */
  object: "thread";
  /** The Unix timestamp (in seconds) for when the thread was created. */
  created_at: number;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata: object | null;
};
export type CreateMessageRequest = {
  /** The role of the entity that is creating the message. Currently only `user` is supported. */
  role: "user";
  /** The content of the message. */
  content: string;
  /** A list of [File](/docs/api-reference/files) IDs that the message should use. There can be a maximum of 10 files attached to a message. Useful for tools like `retrieval` and `code_interpreter` that can access and use files. */
  file_ids?: string[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type CreateThreadRequest = {
  /** A list of [messages](/docs/api-reference/messages) to start the thread with. */
  messages?: CreateMessageRequest[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type ModifyThreadRequest = {
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type DeleteThreadResponse = {
  id: string;
  deleted: boolean;
  object: "thread.deleted";
};
export type ImageFile = {
  /** Always `image_file`. */
  type: "image_file";
  image_file: {
    /** The [File](/docs/api-reference/files) ID of the image in the message content. */
    file_id: string;
  };
};
export type FileCitation = {
  /** Always `file_citation`. */
  type: "file_citation";
  /** The text in the message content that needs to be replaced. */
  text: string;
  file_citation: {
    /** The ID of the specific File the citation is from. */
    file_id: string;
    /** The specific quote in the file. */
    quote: string;
  };
  start_index: number;
  end_index: number;
};
export type FilePath = {
  /** Always `file_path`. */
  type: "file_path";
  /** The text in the message content that needs to be replaced. */
  text: string;
  file_path: {
    /** The ID of the file that was generated. */
    file_id: string;
  };
  start_index: number;
  end_index: number;
};
export type Text = {
  /** Always `text`. */
  type: "text";
  text: {
    /** The data that makes up the text. */
    value: string;
    annotations: (FileCitation | FilePath)[];
  };
};
export type TheMessageObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.message`. */
  object: "thread.message";
  /** The Unix timestamp (in seconds) for when the message was created. */
  created_at: number;
  /** The [thread](/docs/api-reference/threads) ID that this message belongs to. */
  thread_id: string;
  /** The entity that produced the message. One of `user` or `assistant`. */
  role: "user" | "assistant";
  /** The content of the message in array of text and/or images. */
  content: (ImageFile | Text)[];
  /** If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message. */
  assistant_id: string | null;
  /** If applicable, the ID of the [run](/docs/api-reference/runs) associated with the authoring of this message. */
  run_id: string | null;
  /** A list of [file](/docs/api-reference/files) IDs that the assistant should use. Useful for tools like retrieval and code_interpreter that can access files. A maximum of 10 files can be attached to a message. */
  file_ids: string[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata: object | null;
};
export type ListMessagesResponse = {
  object: string;
  data: TheMessageObject[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type ModifyMessageRequest = {
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type RunToolCallObject = {
  /** The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint. */
  id: string;
  /** The type of tool call the output is required for. For now, this is always `function`. */
  type: "function";
  /** The function definition. */
  function: {
    /** The name of the function. */
    name: string;
    /** The arguments that the model expects you to pass to the function. */
    arguments: string;
  };
};
export type RunCompletionUsage = {
  /** Number of completion tokens used over the course of the run. */
  completion_tokens: number;
  /** Number of prompt tokens used over the course of the run. */
  prompt_tokens: number;
  /** Total number of tokens used (prompt + completion). */
  total_tokens: number;
} | null;
export type ARunOnAThread = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.run`. */
  object: "thread.run";
  /** The Unix timestamp (in seconds) for when the run was created. */
  created_at: number;
  /** The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. */
  thread_id: string;
  /** The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. */
  assistant_id: string;
  /** The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, or `expired`. */
  status:
    | "queued"
    | "in_progress"
    | "requires_action"
    | "cancelling"
    | "cancelled"
    | "failed"
    | "completed"
    | "expired";
  /** Details on the action required to continue the run. Will be `null` if no action is required. */
  required_action: {
    /** For now, this is always `submit_tool_outputs`. */
    type: "submit_tool_outputs";
    /** Details on the tool outputs needed for this run to continue. */
    submit_tool_outputs: {
      /** A list of the relevant tool calls. */
      tool_calls: RunToolCallObject[];
    };
  } | null;
  /** The last error associated with this run. Will be `null` if there are no errors. */
  last_error: {
    /** One of `server_error` or `rate_limit_exceeded`. */
    code: "server_error" | "rate_limit_exceeded";
    /** A human-readable description of the error. */
    message: string;
  } | null;
  /** The Unix timestamp (in seconds) for when the run will expire. */
  expires_at: number;
  /** The Unix timestamp (in seconds) for when the run was started. */
  started_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was cancelled. */
  cancelled_at: number | null;
  /** The Unix timestamp (in seconds) for when the run failed. */
  failed_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was completed. */
  completed_at: number | null;
  /** The model that the [assistant](/docs/api-reference/assistants) used for this run. */
  model: string;
  /** The instructions that the [assistant](/docs/api-reference/assistants) used for this run. */
  instructions: string;
  /** The list of tools that the [assistant](/docs/api-reference/assistants) used for this run. */
  tools: (CodeInterpreterTool | RetrievalTool | FunctionTool)[];
  /** The list of [File](/docs/api-reference/files) IDs the [assistant](/docs/api-reference/assistants) used for this run. */
  file_ids: string[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata: object | null;
  usage: RunCompletionUsage;
};
export type CreateThreadAndRunRequest = {
  /** The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
  assistant_id: string;
  /** If no thread is provided, an empty thread will be created. */
  thread?: CreateThreadRequest;
  /** The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used. */
  model?: string | null;
  /** Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis. */
  instructions?: string | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
  tools?: (CodeInterpreterTool | RetrievalTool | FunctionTool)[] | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type ListRunsResponse = {
  object: string;
  data: ARunOnAThread[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type CreateRunRequest = {
  /** The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
  assistant_id: string;
  /** The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used. */
  model?: string | null;
  /** Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis. */
  instructions?: string | null;
  /** Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions. */
  additional_instructions?: string | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
  tools?: (CodeInterpreterTool | RetrievalTool | FunctionTool)[] | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type ModifyRunRequest = {
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata?: object | null;
};
export type SubmitToolOutputsRunRequest = {
  /** A list of tools for which the outputs are being submitted. */
  tool_outputs: {
    /** The ID of the tool call in the `required_action` object within the run object the output is being submitted for. */
    tool_call_id?: string;
    /** The output of the tool call to be submitted to continue the run. */
    output?: string;
  }[];
};
export type MessageCreation = {
  /** Always `message_creation`. */
  type: "message_creation";
  message_creation: {
    /** The ID of the message that was created by this run step. */
    message_id: string;
  };
};
export type CodeInterpreterLogOutput = {
  /** Always `logs`. */
  type: "logs";
  /** The text output from the Code Interpreter tool call. */
  logs: string;
};
export type CodeInterpreterImageOutput = {
  /** Always `image`. */
  type: "image";
  image: {
    /** The [file](/docs/api-reference/files) ID of the image. */
    file_id: string;
  };
};
export type CodeInterpreterToolCall = {
  /** The ID of the tool call. */
  id: string;
  /** The type of tool call. This is always going to be `code_interpreter` for this type of tool call. */
  type: "code_interpreter";
  /** The Code Interpreter tool call definition. */
  code_interpreter: {
    /** The input to the Code Interpreter tool call. */
    input: string;
    /** The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type. */
    outputs: (CodeInterpreterLogOutput | CodeInterpreterImageOutput)[];
  };
};
export type RetrievalToolCall = {
  /** The ID of the tool call object. */
  id: string;
  /** The type of tool call. This is always going to be `retrieval` for this type of tool call. */
  type: "retrieval";
  /** For now, this is always going to be an empty object. */
  retrieval: object;
};
export type FunctionToolCall = {
  /** The ID of the tool call object. */
  id: string;
  /** The type of tool call. This is always going to be `function` for this type of tool call. */
  type: "function";
  /** The definition of the function that was called. */
  function: {
    /** The name of the function. */
    name: string;
    /** The arguments passed to the function. */
    arguments: string;
    /** The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet. */
    output: string | null;
  };
};
export type ToolCalls = {
  /** Always `tool_calls`. */
  type: "tool_calls";
  /** An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `retrieval`, or `function`.
   */
  tool_calls: (
    | CodeInterpreterToolCall
    | RetrievalToolCall
    | FunctionToolCall
  )[];
};
export type RunStepCompletionUsage = {
  /** Number of completion tokens used over the course of the run step. */
  completion_tokens: number;
  /** Number of prompt tokens used over the course of the run step. */
  prompt_tokens: number;
  /** Total number of tokens used (prompt + completion). */
  total_tokens: number;
} | null;
export type RunSteps = {
  /** The identifier of the run step, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.run.step`. */
  object: "thread.run.step";
  /** The Unix timestamp (in seconds) for when the run step was created. */
  created_at: number;
  /** The ID of the [assistant](/docs/api-reference/assistants) associated with the run step. */
  assistant_id: string;
  /** The ID of the [thread](/docs/api-reference/threads) that was run. */
  thread_id: string;
  /** The ID of the [run](/docs/api-reference/runs) that this run step is a part of. */
  run_id: string;
  /** The type of run step, which can be either `message_creation` or `tool_calls`. */
  type: "message_creation" | "tool_calls";
  /** The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`. */
  status: "in_progress" | "cancelled" | "failed" | "completed" | "expired";
  /** The details of the run step. */
  step_details: MessageCreation | ToolCalls;
  /** The last error associated with this run step. Will be `null` if there are no errors. */
  last_error: {
    /** One of `server_error` or `rate_limit_exceeded`. */
    code: "server_error" | "rate_limit_exceeded";
    /** A human-readable description of the error. */
    message: string;
  } | null;
  /** The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired. */
  expired_at: number | null;
  /** The Unix timestamp (in seconds) for when the run step was cancelled. */
  cancelled_at: number | null;
  /** The Unix timestamp (in seconds) for when the run step failed. */
  failed_at: number | null;
  /** The Unix timestamp (in seconds) for when the run step completed. */
  completed_at: number | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
   */
  metadata: object | null;
  usage: RunStepCompletionUsage;
};
export type ListRunStepsResponse = {
  object: string;
  data: RunSteps[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type AssistantFiles = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `assistant.file`. */
  object: "assistant.file";
  /** The Unix timestamp (in seconds) for when the assistant file was created. */
  created_at: number;
  /** The assistant ID that the file is attached to. */
  assistant_id: string;
};
export type ListAssistantFilesResponse = {
  object: string;
  data: AssistantFiles[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type CreateAssistantFileRequest = {
  /** A [File](/docs/api-reference/files) ID (with `purpose="assistants"`) that the assistant should use. Useful for tools like `retrieval` and `code_interpreter` that can access files. */
  file_id: string;
};
export type DeleteAssistantFileResponse = {
  id: string;
  deleted: boolean;
  object: "assistant.file.deleted";
};
export type MessageFiles = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.message.file`. */
  object: "thread.message.file";
  /** The Unix timestamp (in seconds) for when the message file was created. */
  created_at: number;
  /** The ID of the [message](/docs/api-reference/messages) that the [File](/docs/api-reference/files) is attached to. */
  message_id: string;
};
export type ListMessageFilesResponse = {
  object: string;
  data: MessageFiles[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export const {
  useCreateChatCompletionMutation,
  useCreateCompletionMutation,
  useCreateImageMutation,
  useCreateImageEditMutation,
  useCreateImageVariationMutation,
  useCreateEmbeddingMutation,
  useCreateSpeechMutation,
  useCreateTranscriptionMutation,
  useCreateTranslationMutation,
  useListFilesQuery,
  useLazyListFilesQuery,
  useCreateFileMutation,
  useDeleteFileMutation,
  useRetrieveFileQuery,
  useLazyRetrieveFileQuery,
  useDownloadFileQuery,
  useLazyDownloadFileQuery,
  useCreateFineTuningJobMutation,
  useListPaginatedFineTuningJobsQuery,
  useLazyListPaginatedFineTuningJobsQuery,
  useRetrieveFineTuningJobQuery,
  useLazyRetrieveFineTuningJobQuery,
  useListFineTuningEventsQuery,
  useLazyListFineTuningEventsQuery,
  useCancelFineTuningJobMutation,
  useListModelsQuery,
  useLazyListModelsQuery,
  useRetrieveModelQuery,
  useLazyRetrieveModelQuery,
  useDeleteModelMutation,
  useCreateModerationMutation,
  useListAssistantsQuery,
  useLazyListAssistantsQuery,
  useCreateAssistantMutation,
  useGetAssistantQuery,
  useLazyGetAssistantQuery,
  useModifyAssistantMutation,
  useDeleteAssistantMutation,
  useCreateThreadMutation,
  useGetThreadQuery,
  useLazyGetThreadQuery,
  useModifyThreadMutation,
  useDeleteThreadMutation,
  useListMessagesQuery,
  useLazyListMessagesQuery,
  useCreateMessageMutation,
  useGetMessageQuery,
  useLazyGetMessageQuery,
  useModifyMessageMutation,
  useCreateThreadAndRunMutation,
  useListRunsQuery,
  useLazyListRunsQuery,
  useCreateRunMutation,
  useGetRunQuery,
  useLazyGetRunQuery,
  useModifyRunMutation,
  useSubmitToolOuputsToRunMutation,
  useCancelRunMutation,
  useListRunStepsQuery,
  useLazyListRunStepsQuery,
  useGetRunStepQuery,
  useLazyGetRunStepQuery,
  useListAssistantFilesQuery,
  useLazyListAssistantFilesQuery,
  useCreateAssistantFileMutation,
  useGetAssistantFileQuery,
  useLazyGetAssistantFileQuery,
  useDeleteAssistantFileMutation,
  useListMessageFilesQuery,
  useLazyListMessageFilesQuery,
  useGetMessageFileQuery,
  useLazyGetMessageFileQuery,
} = injectedRtkApi;
