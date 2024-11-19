import { baseApi as api } from "../baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    createBatch: build.mutation<CreateBatchApiResponse, CreateBatchApiArg>({
      query: (queryArg) => ({
        url: `/batches`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    listBatches: build.query<ListBatchesApiResponse, ListBatchesApiArg>({
      query: (queryArg) => ({
        url: `/batches`,
        params: { after: queryArg.after, limit: queryArg.limit },
      }),
    }),
    retrieveBatch: build.query<RetrieveBatchApiResponse, RetrieveBatchApiArg>({
      query: (queryArg) => ({ url: `/batches/${queryArg.batchId}` }),
    }),
    cancelBatch: build.mutation<CancelBatchApiResponse, CancelBatchApiArg>({
      query: (queryArg) => ({
        url: `/batches/${queryArg.batchId}/cancel`,
        method: "POST",
      }),
    }),
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
    listFiles: build.query<ListFilesApiResponse, ListFilesApiArg>({
      query: (queryArg) => ({
        url: `/files`,
        params: {
          purpose: queryArg.purpose,
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
        },
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
    cancelFineTuningJob: build.mutation<
      CancelFineTuningJobApiResponse,
      CancelFineTuningJobApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}/cancel`,
        method: "POST",
      }),
    }),
    listFineTuningJobCheckpoints: build.query<
      ListFineTuningJobCheckpointsApiResponse,
      ListFineTuningJobCheckpointsApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}/checkpoints`,
        params: { after: queryArg.after, limit: queryArg.limit },
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
    createImage: build.mutation<CreateImageApiResponse, CreateImageApiArg>({
      query: (queryArg) => ({
        url: `/images/generations`,
        method: "POST",
        body: queryArg.createImageRequest,
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
    getOrganizationAuditLogs: build.query<
      GetOrganizationAuditLogsApiResponse,
      GetOrganizationAuditLogsApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/audit_logs`,
        params: {
          effective_at: queryArg.effectiveAt,
          project_ids: queryArg.projectIds,
          event_types: queryArg.eventTypes,
          actor_ids: queryArg.actorIds,
          actor_emails: queryArg.actorEmails,
          resource_ids: queryArg.resourceIds,
          limit: queryArg.limit,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    getOrganizationInvites: build.query<
      GetOrganizationInvitesApiResponse,
      GetOrganizationInvitesApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/invites`,
        params: { limit: queryArg.limit, after: queryArg.after },
      }),
    }),
    inviteUser: build.mutation<InviteUserApiResponse, InviteUserApiArg>({
      query: (queryArg) => ({
        url: `/organization/invites`,
        method: "POST",
        body: queryArg.inviteRequest,
      }),
    }),
    getOrganizationInvitesByInviteId: build.query<
      GetOrganizationInvitesByInviteIdApiResponse,
      GetOrganizationInvitesByInviteIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/invites/${queryArg.inviteId}`,
      }),
    }),
    deleteOrganizationInvitesByInviteId: build.mutation<
      DeleteOrganizationInvitesByInviteIdApiResponse,
      DeleteOrganizationInvitesByInviteIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/invites/${queryArg.inviteId}`,
        method: "DELETE",
      }),
    }),
    getOrganizationProjects: build.query<
      GetOrganizationProjectsApiResponse,
      GetOrganizationProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects`,
        params: {
          limit: queryArg.limit,
          after: queryArg.after,
          include_archived: queryArg.includeArchived,
        },
      }),
    }),
    postOrganizationProjects: build.mutation<
      PostOrganizationProjectsApiResponse,
      PostOrganizationProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects`,
        method: "POST",
        body: queryArg.projectCreateRequest,
      }),
    }),
    getOrganizationProjectsByProjectId: build.query<
      GetOrganizationProjectsByProjectIdApiResponse,
      GetOrganizationProjectsByProjectIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}`,
      }),
    }),
    postOrganizationProjectsByProjectId: build.mutation<
      PostOrganizationProjectsByProjectIdApiResponse,
      PostOrganizationProjectsByProjectIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}`,
        method: "POST",
        body: queryArg.projectUpdateRequest,
      }),
    }),
    getOrganizationProjectsByProjectIdApiKeys: build.query<
      GetOrganizationProjectsByProjectIdApiKeysApiResponse,
      GetOrganizationProjectsByProjectIdApiKeysApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/api_keys`,
        params: { limit: queryArg.limit, after: queryArg.after },
      }),
    }),
    getOrganizationProjectsByProjectIdApiKeysAndKeyId: build.query<
      GetOrganizationProjectsByProjectIdApiKeysAndKeyIdApiResponse,
      GetOrganizationProjectsByProjectIdApiKeysAndKeyIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/api_keys/${queryArg.keyId}`,
      }),
    }),
    deleteOrganizationProjectsByProjectIdApiKeysAndKeyId: build.mutation<
      DeleteOrganizationProjectsByProjectIdApiKeysAndKeyIdApiResponse,
      DeleteOrganizationProjectsByProjectIdApiKeysAndKeyIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/api_keys/${queryArg.keyId}`,
        method: "DELETE",
      }),
    }),
    postOrganizationProjectsByProjectIdArchive: build.mutation<
      PostOrganizationProjectsByProjectIdArchiveApiResponse,
      PostOrganizationProjectsByProjectIdArchiveApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/archive`,
        method: "POST",
      }),
    }),
    getOrganizationProjectsByProjectIdRateLimits: build.query<
      GetOrganizationProjectsByProjectIdRateLimitsApiResponse,
      GetOrganizationProjectsByProjectIdRateLimitsApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/rate_limits`,
        params: {
          limit: queryArg.limit,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    postOrganizationProjectsByProjectIdRateLimitsAndRateLimitId: build.mutation<
      PostOrganizationProjectsByProjectIdRateLimitsAndRateLimitIdApiResponse,
      PostOrganizationProjectsByProjectIdRateLimitsAndRateLimitIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/rate_limits/${queryArg.rateLimitId}`,
        method: "POST",
        body: queryArg.projectRateLimitUpdateRequest,
      }),
    }),
    getOrganizationProjectsByProjectIdServiceAccounts: build.query<
      GetOrganizationProjectsByProjectIdServiceAccountsApiResponse,
      GetOrganizationProjectsByProjectIdServiceAccountsApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/service_accounts`,
        params: { limit: queryArg.limit, after: queryArg.after },
      }),
    }),
    postOrganizationProjectsByProjectIdServiceAccounts: build.mutation<
      PostOrganizationProjectsByProjectIdServiceAccountsApiResponse,
      PostOrganizationProjectsByProjectIdServiceAccountsApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/service_accounts`,
        method: "POST",
        body: queryArg.projectServiceAccountCreateRequest,
      }),
    }),
    getOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountId:
      build.query<
        GetOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiResponse,
        GetOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organization/projects/${queryArg.projectId}/service_accounts/${queryArg.serviceAccountId}`,
        }),
      }),
    deleteOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountId:
      build.mutation<
        DeleteOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiResponse,
        DeleteOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organization/projects/${queryArg.projectId}/service_accounts/${queryArg.serviceAccountId}`,
          method: "DELETE",
        }),
      }),
    getOrganizationProjectsByProjectIdUsers: build.query<
      GetOrganizationProjectsByProjectIdUsersApiResponse,
      GetOrganizationProjectsByProjectIdUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/users`,
        params: { limit: queryArg.limit, after: queryArg.after },
      }),
    }),
    postOrganizationProjectsByProjectIdUsers: build.mutation<
      PostOrganizationProjectsByProjectIdUsersApiResponse,
      PostOrganizationProjectsByProjectIdUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/users`,
        method: "POST",
        body: queryArg.projectUserCreateRequest,
      }),
    }),
    getOrganizationProjectsByProjectIdUsersAndUserId: build.query<
      GetOrganizationProjectsByProjectIdUsersAndUserIdApiResponse,
      GetOrganizationProjectsByProjectIdUsersAndUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/users/${queryArg.userId}`,
      }),
    }),
    postOrganizationProjectsByProjectIdUsersAndUserId: build.mutation<
      PostOrganizationProjectsByProjectIdUsersAndUserIdApiResponse,
      PostOrganizationProjectsByProjectIdUsersAndUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/users/${queryArg.userId}`,
        method: "POST",
        body: queryArg.projectUserUpdateRequest,
      }),
    }),
    deleteOrganizationProjectsByProjectIdUsersAndUserId: build.mutation<
      DeleteOrganizationProjectsByProjectIdUsersAndUserIdApiResponse,
      DeleteOrganizationProjectsByProjectIdUsersAndUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/projects/${queryArg.projectId}/users/${queryArg.userId}`,
        method: "DELETE",
      }),
    }),
    getOrganizationUsers: build.query<
      GetOrganizationUsersApiResponse,
      GetOrganizationUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/users`,
        params: { limit: queryArg.limit, after: queryArg.after },
      }),
    }),
    getOrganizationUsersByUserId: build.query<
      GetOrganizationUsersByUserIdApiResponse,
      GetOrganizationUsersByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/organization/users/${queryArg.userId}` }),
    }),
    postOrganizationUsersByUserId: build.mutation<
      PostOrganizationUsersByUserIdApiResponse,
      PostOrganizationUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/users/${queryArg.userId}`,
        method: "POST",
        body: queryArg.userRoleUpdateRequest,
      }),
    }),
    deleteOrganizationUsersByUserId: build.mutation<
      DeleteOrganizationUsersByUserIdApiResponse,
      DeleteOrganizationUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/organization/users/${queryArg.userId}`,
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
          run_id: queryArg.runId,
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
    deleteMessage: build.mutation<
      DeleteMessageApiResponse,
      DeleteMessageApiArg
    >({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/messages/${queryArg.messageId}`,
        method: "DELETE",
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
        params: { include: queryArg.include },
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
          include: queryArg.include,
        },
      }),
    }),
    getRunStep: build.query<GetRunStepApiResponse, GetRunStepApiArg>({
      query: (queryArg) => ({
        url: `/threads/${queryArg.threadId}/runs/${queryArg.runId}/steps/${queryArg.stepId}`,
        params: { include: queryArg.include },
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
    createUpload: build.mutation<CreateUploadApiResponse, CreateUploadApiArg>({
      query: (queryArg) => ({
        url: `/uploads`,
        method: "POST",
        body: queryArg.createUploadRequest,
      }),
    }),
    cancelUpload: build.mutation<CancelUploadApiResponse, CancelUploadApiArg>({
      query: (queryArg) => ({
        url: `/uploads/${queryArg.uploadId}/cancel`,
        method: "POST",
      }),
    }),
    completeUpload: build.mutation<
      CompleteUploadApiResponse,
      CompleteUploadApiArg
    >({
      query: (queryArg) => ({
        url: `/uploads/${queryArg.uploadId}/complete`,
        method: "POST",
        body: queryArg.completeUploadRequest,
      }),
    }),
    addUploadPart: build.mutation<
      AddUploadPartApiResponse,
      AddUploadPartApiArg
    >({
      query: (queryArg) => ({
        url: `/uploads/${queryArg.uploadId}/parts`,
        method: "POST",
        body: queryArg.addUploadPartRequest,
      }),
    }),
    listVectorStores: build.query<
      ListVectorStoresApiResponse,
      ListVectorStoresApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
        },
      }),
    }),
    createVectorStore: build.mutation<
      CreateVectorStoreApiResponse,
      CreateVectorStoreApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores`,
        method: "POST",
        body: queryArg.createVectorStoreRequest,
      }),
    }),
    getVectorStore: build.query<
      GetVectorStoreApiResponse,
      GetVectorStoreApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}`,
      }),
    }),
    modifyVectorStore: build.mutation<
      ModifyVectorStoreApiResponse,
      ModifyVectorStoreApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}`,
        method: "POST",
        body: queryArg.updateVectorStoreRequest,
      }),
    }),
    deleteVectorStore: build.mutation<
      DeleteVectorStoreApiResponse,
      DeleteVectorStoreApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}`,
        method: "DELETE",
      }),
    }),
    createVectorStoreFileBatch: build.mutation<
      CreateVectorStoreFileBatchApiResponse,
      CreateVectorStoreFileBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/file_batches`,
        method: "POST",
        body: queryArg.createVectorStoreFileBatchRequest,
      }),
    }),
    getVectorStoreFileBatch: build.query<
      GetVectorStoreFileBatchApiResponse,
      GetVectorStoreFileBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/file_batches/${queryArg.batchId}`,
      }),
    }),
    cancelVectorStoreFileBatch: build.mutation<
      CancelVectorStoreFileBatchApiResponse,
      CancelVectorStoreFileBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/file_batches/${queryArg.batchId}/cancel`,
        method: "POST",
      }),
    }),
    listFilesInVectorStoreBatch: build.query<
      ListFilesInVectorStoreBatchApiResponse,
      ListFilesInVectorStoreBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/file_batches/${queryArg.batchId}/files`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
          filter: queryArg.filter,
        },
      }),
    }),
    listVectorStoreFiles: build.query<
      ListVectorStoreFilesApiResponse,
      ListVectorStoreFilesApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/files`,
        params: {
          limit: queryArg.limit,
          order: queryArg.order,
          after: queryArg.after,
          before: queryArg.before,
          filter: queryArg.filter,
        },
      }),
    }),
    createVectorStoreFile: build.mutation<
      CreateVectorStoreFileApiResponse,
      CreateVectorStoreFileApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/files`,
        method: "POST",
        body: queryArg.createVectorStoreFileRequest,
      }),
    }),
    getVectorStoreFile: build.query<
      GetVectorStoreFileApiResponse,
      GetVectorStoreFileApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/files/${queryArg.fileId}`,
      }),
    }),
    deleteVectorStoreFile: build.mutation<
      DeleteVectorStoreFileApiResponse,
      DeleteVectorStoreFileApiArg
    >({
      query: (queryArg) => ({
        url: `/vector_stores/${queryArg.vectorStoreId}/files/${queryArg.fileId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as ApiProvider };
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
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
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
export type CreateSpeechApiResponse = unknown;
export type CreateSpeechApiArg = {
  createSpeechRequest: CreateSpeechRequest;
};
export type CreateTranscriptionApiResponse = /** status 200 OK */
  | CreateTranscriptionResponseJson
  | CreateTranscriptionResponseVerboseJson;
export type CreateTranscriptionApiArg = {
  createTranscriptionRequest: CreateTranscriptionRequest;
};
export type CreateTranslationApiResponse = /** status 200 OK */
  | CreateTranslationResponseJson
  | CreateTranslationResponseVerboseJson;
export type CreateTranslationApiArg = {
  createTranslationRequest: CreateTranslationRequest;
};
export type CreateBatchApiResponse =
  /** status 200 Batch created successfully. */ Batch;
export type CreateBatchApiArg = {
  body: {
    /** The ID of an uploaded file that contains requests for the new batch.
        
        See [upload file](/docs/api-reference/files/create) for how to upload a file.
        
        Your input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose `batch`. The file can contain up to 50,000 requests, and can be up to 200 MB in size.
         */
    input_file_id: string;
    /** The endpoint to be used for all requests in the batch. Currently `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch. */
    endpoint: "/v1/chat/completions" | "/v1/embeddings" | "/v1/completions";
    /** The time frame within which the batch should be processed. Currently only `24h` is supported. */
    completion_window: "24h";
    /** Optional custom metadata for the batch. */
    metadata?: {
      [key: string]: string;
    } | null;
  };
};
export type ListBatchesApiResponse =
  /** status 200 Batch listed successfully. */ ListBatchesResponse;
export type ListBatchesApiArg = {
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
};
export type RetrieveBatchApiResponse =
  /** status 200 Batch retrieved successfully. */ Batch;
export type RetrieveBatchApiArg = {
  /** The ID of the batch to retrieve. */
  batchId: string;
};
export type CancelBatchApiResponse =
  /** status 200 Batch is cancelling. Returns the cancelling batch's details. */ Batch;
export type CancelBatchApiArg = {
  /** The ID of the batch to cancel. */
  batchId: string;
};
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
export type CreateEmbeddingApiResponse =
  /** status 200 OK */ CreateEmbeddingResponse;
export type CreateEmbeddingApiArg = {
  createEmbeddingRequest: CreateEmbeddingRequest;
};
export type ListFilesApiResponse = /** status 200 OK */ ListFilesResponse;
export type ListFilesApiArg = {
  /** Only return files with the given purpose. */
  purpose?: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
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
export type CancelFineTuningJobApiResponse = /** status 200 OK */ FineTuningJob;
export type CancelFineTuningJobApiArg = {
  /** The ID of the fine-tuning job to cancel.
   */
  fineTuningJobId: string;
};
export type ListFineTuningJobCheckpointsApiResponse =
  /** status 200 OK */ ListFineTuningJobCheckpointsResponse;
export type ListFineTuningJobCheckpointsApiArg = {
  /** The ID of the fine-tuning job to get checkpoints for.
   */
  fineTuningJobId: string;
  /** Identifier for the last checkpoint ID from the previous pagination request. */
  after?: string;
  /** Number of checkpoints to retrieve. */
  limit?: number;
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
export type CreateImageEditApiResponse = /** status 200 OK */ ImagesResponse;
export type CreateImageEditApiArg = {
  createImageEditRequest: CreateImageEditRequest;
};
export type CreateImageApiResponse = /** status 200 OK */ ImagesResponse;
export type CreateImageApiArg = {
  createImageRequest: CreateImageRequest;
};
export type CreateImageVariationApiResponse =
  /** status 200 OK */ ImagesResponse;
export type CreateImageVariationApiArg = {
  createImageVariationRequest: CreateImageVariationRequest;
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
export type GetOrganizationAuditLogsApiResponse =
  /** status 200 Audit logs listed successfully. */ ListAuditLogsResponse;
export type GetOrganizationAuditLogsApiArg = {
  /** Return only events whose `effective_at` (Unix seconds) is in this range. */
  effectiveAt?: {
    /** Return only events whose `effective_at` (Unix seconds) is greater than this value. */
    gt?: number;
    /** Return only events whose `effective_at` (Unix seconds) is greater than or equal to this value. */
    gte?: number;
    /** Return only events whose `effective_at` (Unix seconds) is less than this value. */
    lt?: number;
    /** Return only events whose `effective_at` (Unix seconds) is less than or equal to this value. */
    lte?: number;
  };
  projectIds?: {
    ""?: string[];
  };
  eventTypes?: {
    ""?: AuditLogEventType[];
  };
  actorIds?: {
    ""?: string[];
  };
  actorEmails?: {
    ""?: string[];
  };
  resourceIds?: {
    ""?: string[];
  };
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type GetOrganizationInvitesApiResponse =
  /** status 200 Invites listed successfully. */ InviteListResponse;
export type GetOrganizationInvitesApiArg = {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
};
export type InviteUserApiResponse =
  /** status 200 User invited successfully. */ Invite;
export type InviteUserApiArg = {
  /** The invite request payload. */
  inviteRequest: InviteRequest;
};
export type GetOrganizationInvitesByInviteIdApiResponse =
  /** status 200 Invite retrieved successfully. */ Invite;
export type GetOrganizationInvitesByInviteIdApiArg = {
  /** The ID of the invite to retrieve. */
  inviteId: string;
};
export type DeleteOrganizationInvitesByInviteIdApiResponse =
  /** status 200 Invite deleted successfully. */ InviteDeleteResponse;
export type DeleteOrganizationInvitesByInviteIdApiArg = {
  /** The ID of the invite to delete. */
  inviteId: string;
};
export type GetOrganizationProjectsApiResponse =
  /** status 200 Projects listed successfully. */ ProjectListResponse;
export type GetOrganizationProjectsApiArg = {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** If `true` returns all projects including those that have been `archived`. Archived projects are not included by default. */
  includeArchived?: boolean;
};
export type PostOrganizationProjectsApiResponse =
  /** status 200 Project created successfully. */ Project;
export type PostOrganizationProjectsApiArg = {
  /** The project create request payload. */
  projectCreateRequest: ProjectCreateRequest;
};
export type GetOrganizationProjectsByProjectIdApiResponse =
  /** status 200 Project retrieved successfully. */ Project;
export type GetOrganizationProjectsByProjectIdApiArg = {
  /** The ID of the project. */
  projectId: string;
};
export type PostOrganizationProjectsByProjectIdApiResponse =
  /** status 200 Project updated successfully. */ Project;
export type PostOrganizationProjectsByProjectIdApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The project update request payload. */
  projectUpdateRequest: ProjectUpdateRequest;
};
export type GetOrganizationProjectsByProjectIdApiKeysApiResponse =
  /** status 200 Project API keys listed successfully. */ ProjectApiKeyListResponse;
export type GetOrganizationProjectsByProjectIdApiKeysApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
};
export type GetOrganizationProjectsByProjectIdApiKeysAndKeyIdApiResponse =
  /** status 200 Project API key retrieved successfully. */ ProjectApiKey;
export type GetOrganizationProjectsByProjectIdApiKeysAndKeyIdApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The ID of the API key. */
  keyId: string;
};
export type DeleteOrganizationProjectsByProjectIdApiKeysAndKeyIdApiResponse =
  /** status 200 Project API key deleted successfully. */ ProjectApiKeyDeleteResponse;
export type DeleteOrganizationProjectsByProjectIdApiKeysAndKeyIdApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The ID of the API key. */
  keyId: string;
};
export type PostOrganizationProjectsByProjectIdArchiveApiResponse =
  /** status 200 Project archived successfully. */ Project;
export type PostOrganizationProjectsByProjectIdArchiveApiArg = {
  /** The ID of the project. */
  projectId: string;
};
export type GetOrganizationProjectsByProjectIdRateLimitsApiResponse =
  /** status 200 Project rate limits listed successfully. */ ProjectRateLimitListResponse;
export type GetOrganizationProjectsByProjectIdRateLimitsApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** A limit on the number of objects to be returned. The default is 100.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type PostOrganizationProjectsByProjectIdRateLimitsAndRateLimitIdApiResponse =
  /** status 200 Project rate limit updated successfully. */ ProjectRateLimit;
export type PostOrganizationProjectsByProjectIdRateLimitsAndRateLimitIdApiArg =
  {
    /** The ID of the project. */
    projectId: string;
    /** The ID of the rate limit. */
    rateLimitId: string;
    /** The project rate limit update request payload. */
    projectRateLimitUpdateRequest: ProjectRateLimitUpdateRequest;
  };
export type GetOrganizationProjectsByProjectIdServiceAccountsApiResponse =
  /** status 200 Project service accounts listed successfully. */ ProjectServiceAccountListResponse;
export type GetOrganizationProjectsByProjectIdServiceAccountsApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
};
export type PostOrganizationProjectsByProjectIdServiceAccountsApiResponse =
  /** status 200 Project service account created successfully. */ ProjectServiceAccountCreateResponse;
export type PostOrganizationProjectsByProjectIdServiceAccountsApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The project service account create request payload. */
  projectServiceAccountCreateRequest: ProjectServiceAccountCreateRequest;
};
export type GetOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiResponse =
  /** status 200 Project service account retrieved successfully. */ ProjectServiceAccount;
export type GetOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiArg =
  {
    /** The ID of the project. */
    projectId: string;
    /** The ID of the service account. */
    serviceAccountId: string;
  };
export type DeleteOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiResponse =
  /** status 200 Project service account deleted successfully. */ ProjectServiceAccountDeleteResponse;
export type DeleteOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdApiArg =
  {
    /** The ID of the project. */
    projectId: string;
    /** The ID of the service account. */
    serviceAccountId: string;
  };
export type GetOrganizationProjectsByProjectIdUsersApiResponse =
  /** status 200 Project users listed successfully. */ ProjectUserListResponse;
export type GetOrganizationProjectsByProjectIdUsersApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
};
export type PostOrganizationProjectsByProjectIdUsersApiResponse =
  /** status 200 User added to project successfully. */ ProjectUser;
export type PostOrganizationProjectsByProjectIdUsersApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The project user create request payload. */
  projectUserCreateRequest: ProjectUserCreateRequest;
};
export type GetOrganizationProjectsByProjectIdUsersAndUserIdApiResponse =
  /** status 200 Project user retrieved successfully. */ ProjectUser;
export type GetOrganizationProjectsByProjectIdUsersAndUserIdApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The ID of the user. */
  userId: string;
};
export type PostOrganizationProjectsByProjectIdUsersAndUserIdApiResponse =
  /** status 200 Project user's role updated successfully. */ ProjectUser;
export type PostOrganizationProjectsByProjectIdUsersAndUserIdApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The ID of the user. */
  userId: string;
  /** The project user update request payload. */
  projectUserUpdateRequest: ProjectUserUpdateRequest;
};
export type DeleteOrganizationProjectsByProjectIdUsersAndUserIdApiResponse =
  /** status 200 Project user deleted successfully. */ ProjectUserDeleteResponse;
export type DeleteOrganizationProjectsByProjectIdUsersAndUserIdApiArg = {
  /** The ID of the project. */
  projectId: string;
  /** The ID of the user. */
  userId: string;
};
export type GetOrganizationUsersApiResponse =
  /** status 200 Users listed successfully. */ UserListResponse;
export type GetOrganizationUsersApiArg = {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
};
export type GetOrganizationUsersByUserIdApiResponse =
  /** status 200 User retrieved successfully. */ User;
export type GetOrganizationUsersByUserIdApiArg = {
  /** The ID of the user. */
  userId: string;
};
export type PostOrganizationUsersByUserIdApiResponse =
  /** status 200 User role updated successfully. */ User;
export type PostOrganizationUsersByUserIdApiArg = {
  /** The ID of the user. */
  userId: string;
  /** The new user role to modify. This must be one of `owner` or `member`. */
  userRoleUpdateRequest: UserRoleUpdateRequest;
};
export type DeleteOrganizationUsersByUserIdApiResponse =
  /** status 200 User deleted successfully. */ UserDeleteResponse;
export type DeleteOrganizationUsersByUserIdApiArg = {
  /** The ID of the user. */
  userId: string;
};
export type CreateThreadApiResponse = /** status 200 OK */ Thread;
export type CreateThreadApiArg = {
  createThreadRequest: CreateThreadRequest;
};
export type CreateThreadAndRunApiResponse = /** status 200 OK */ ARunOnAThread;
export type CreateThreadAndRunApiArg = {
  createThreadAndRunRequest: CreateThreadAndRunRequest;
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
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
  /** Filter messages by the run ID that generated them.
   */
  runId?: string;
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
export type DeleteMessageApiResponse =
  /** status 200 OK */ DeleteMessageResponse;
export type DeleteMessageApiArg = {
  /** The ID of the thread to which this message belongs. */
  threadId: string;
  /** The ID of the message to delete. */
  messageId: string;
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
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type CreateRunApiResponse = /** status 200 OK */ ARunOnAThread;
export type CreateRunApiArg = {
  /** The ID of the thread to run. */
  threadId: string;
  include?: {
    ""?: "step_details.tool_calls[*].file_search.results[*].content"[];
  };
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
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
  include?: {
    ""?: "step_details.tool_calls[*].file_search.results[*].content"[];
  };
};
export type GetRunStepApiResponse = /** status 200 OK */ RunSteps;
export type GetRunStepApiArg = {
  /** The ID of the thread to which the run and run step belongs. */
  threadId: string;
  /** The ID of the run to which the run step belongs. */
  runId: string;
  /** The ID of the run step to retrieve. */
  stepId: string;
  include?: {
    ""?: "step_details.tool_calls[*].file_search.results[*].content"[];
  };
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
export type CreateUploadApiResponse = /** status 200 OK */ Upload;
export type CreateUploadApiArg = {
  createUploadRequest: CreateUploadRequest;
};
export type CancelUploadApiResponse = /** status 200 OK */ Upload;
export type CancelUploadApiArg = {
  /** The ID of the Upload.
   */
  uploadId: string;
};
export type CompleteUploadApiResponse = /** status 200 OK */ Upload;
export type CompleteUploadApiArg = {
  /** The ID of the Upload.
   */
  uploadId: string;
  completeUploadRequest: CompleteUploadRequest;
};
export type AddUploadPartApiResponse = /** status 200 OK */ UploadPart;
export type AddUploadPartApiArg = {
  /** The ID of the Upload.
   */
  uploadId: string;
  addUploadPartRequest: AddUploadPartRequest;
};
export type ListVectorStoresApiResponse =
  /** status 200 OK */ ListVectorStoresResponse;
export type ListVectorStoresApiArg = {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
};
export type CreateVectorStoreApiResponse = /** status 200 OK */ VectorStore;
export type CreateVectorStoreApiArg = {
  createVectorStoreRequest: CreateVectorStoreRequest;
};
export type GetVectorStoreApiResponse = /** status 200 OK */ VectorStore;
export type GetVectorStoreApiArg = {
  /** The ID of the vector store to retrieve. */
  vectorStoreId: string;
};
export type ModifyVectorStoreApiResponse = /** status 200 OK */ VectorStore;
export type ModifyVectorStoreApiArg = {
  /** The ID of the vector store to modify. */
  vectorStoreId: string;
  updateVectorStoreRequest: UpdateVectorStoreRequest;
};
export type DeleteVectorStoreApiResponse =
  /** status 200 OK */ DeleteVectorStoreResponse;
export type DeleteVectorStoreApiArg = {
  /** The ID of the vector store to delete. */
  vectorStoreId: string;
};
export type CreateVectorStoreFileBatchApiResponse =
  /** status 200 OK */ VectorStoreFileBatch;
export type CreateVectorStoreFileBatchApiArg = {
  /** The ID of the vector store for which to create a File Batch.
   */
  vectorStoreId: string;
  createVectorStoreFileBatchRequest: CreateVectorStoreFileBatchRequest;
};
export type GetVectorStoreFileBatchApiResponse =
  /** status 200 OK */ VectorStoreFileBatch;
export type GetVectorStoreFileBatchApiArg = {
  /** The ID of the vector store that the file batch belongs to. */
  vectorStoreId: string;
  /** The ID of the file batch being retrieved. */
  batchId: string;
};
export type CancelVectorStoreFileBatchApiResponse =
  /** status 200 OK */ VectorStoreFileBatch;
export type CancelVectorStoreFileBatchApiArg = {
  /** The ID of the vector store that the file batch belongs to. */
  vectorStoreId: string;
  /** The ID of the file batch to cancel. */
  batchId: string;
};
export type ListFilesInVectorStoreBatchApiResponse =
  /** status 200 OK */ ListVectorStoreFilesResponse;
export type ListFilesInVectorStoreBatchApiArg = {
  /** The ID of the vector store that the files belong to. */
  vectorStoreId: string;
  /** The ID of the file batch that the files belong to. */
  batchId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
  /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
  filter?: "in_progress" | "completed" | "failed" | "cancelled";
};
export type ListVectorStoreFilesApiResponse =
  /** status 200 OK */ ListVectorStoreFilesResponse;
export type ListVectorStoreFilesApiArg = {
  /** The ID of the vector store that the files belong to. */
  vectorStoreId: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
  /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
  filter?: "in_progress" | "completed" | "failed" | "cancelled";
};
export type CreateVectorStoreFileApiResponse =
  /** status 200 OK */ VectorStoreFiles;
export type CreateVectorStoreFileApiArg = {
  /** The ID of the vector store for which to create a File.
   */
  vectorStoreId: string;
  createVectorStoreFileRequest: CreateVectorStoreFileRequest;
};
export type GetVectorStoreFileApiResponse =
  /** status 200 OK */ VectorStoreFiles;
export type GetVectorStoreFileApiArg = {
  /** The ID of the vector store that the file belongs to. */
  vectorStoreId: string;
  /** The ID of the file being retrieved. */
  fileId: string;
};
export type DeleteVectorStoreFileApiResponse =
  /** status 200 OK */ DeleteVectorStoreFileResponse;
export type DeleteVectorStoreFileApiArg = {
  /** The ID of the vector store that the file belongs to. */
  vectorStoreId: string;
  /** The ID of the file to delete. */
  fileId: string;
};
export type CodeInterpreterTool = {
  /** The type of tool being defined: `code_interpreter` */
  type: "code_interpreter";
};
export type FileSearchToolCallRankingOptions = {
  /** The ranker to use for the file search. If not specified will use the `auto` ranker. */
  ranker?: "auto" | "default_2024_08_21";
  /** The score threshold for the file search. All values must be a floating point number between 0 and 1. */
  score_threshold: number;
};
export type FileSearchTool = {
  /** The type of tool being defined: `file_search` */
  type: "file_search";
  /** Overrides for the file search tool. */
  file_search?: {
    /** The maximum number of results the file search tool should output. The default is 20 for `gpt-4*` models and 5 for `gpt-3.5-turbo`. This number should be between 1 and 50 inclusive.
        
        Note that the file search tool may output fewer than `max_num_results` results. See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         */
    max_num_results?: number;
    ranking_options?: FileSearchToolCallRankingOptions;
  };
};
export type FunctionParameters = {
  [key: string]: any;
};
export type FunctionObject = {
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  parameters?: FunctionParameters;
  /** Whether to enable strict schema adherence when generating the function call. If set to true, the model will follow the exact schema defined in the `parameters` field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn more about Structured Outputs in the [function calling guide](docs/guides/function-calling). */
  strict?: boolean | null;
};
export type FunctionTool = {
  /** The type of tool being defined: `function` */
  type: "function";
  function: FunctionObject;
};
export type ResponseFormatText = {
  /** The type of response format being defined: `text` */
  type: "text";
};
export type ResponseFormatJsonObject = {
  /** The type of response format being defined: `json_object` */
  type: "json_object";
};
export type ResponseFormatJsonSchemaSchema = {
  [key: string]: any;
};
export type ResponseFormatJsonSchema = {
  /** The type of response format being defined: `json_schema` */
  type: "json_schema";
  json_schema: {
    /** A description of what the response format is for, used by the model to determine how to respond in the format. */
    description?: string;
    /** The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
    name: string;
    schema?: ResponseFormatJsonSchemaSchema;
    /** Whether to enable strict schema adherence when generating the output. If set to true, the model will always follow the exact schema defined in the `schema` field. Only a subset of JSON Schema is supported when `strict` is `true`. To learn more, read the [Structured Outputs guide](/docs/guides/structured-outputs). */
    strict?: boolean | null;
  };
};
export type AssistantsApiResponseFormatOption =
  | "auto"
  | ResponseFormatText
  | ResponseFormatJsonObject
  | ResponseFormatJsonSchema;
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
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
   */
  model: string;
  /** The system instructions that the assistant uses. The maximum length is 256,000 characters.
   */
  instructions: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
   */
  tools: (CodeInterpreterTool | FileSearchTool | FunctionTool)[];
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: {
    code_interpreter?: {
      /** A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter`` tool. There can be a maximum of 20 files associated with the tool.
       */
      file_ids?: string[];
    };
    file_search?: {
      /** The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
       */
      vector_store_ids?: string[];
    };
  } | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata: object | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or temperature but not both.
     */
  top_p?: number | null;
  response_format?: AssistantsApiResponseFormatOption;
};
export type ListAssistantsResponse = {
  object: string;
  data: Assistant[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type CreateAssistantRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
   */
  model:
    | string
    | (
        | "gpt-4o"
        | "gpt-4o-2024-08-06"
        | "gpt-4o-2024-05-13"
        | "gpt-4o-2024-08-06"
        | "gpt-4o-mini"
        | "gpt-4o-mini-2024-07-18"
        | "gpt-4-turbo"
        | "gpt-4-turbo-2024-04-09"
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
        | "gpt-3.5-turbo-0613"
        | "gpt-3.5-turbo-1106"
        | "gpt-3.5-turbo-0125"
        | "gpt-3.5-turbo-16k-0613"
      );
  /** The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;
  /** The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;
  /** The system instructions that the assistant uses. The maximum length is 256,000 characters.
   */
  instructions?: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
   */
  tools?: (CodeInterpreterTool | FileSearchTool | FunctionTool)[];
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: {
    code_interpreter?: {
      /** A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
       */
      file_ids?: string[];
    };
    file_search?:
      | {
          /** The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           */
          vector_store_ids: string[];
          /** A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           */
          vector_stores?: {
            /** A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
             */
            file_ids?: string[];
            /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
            chunking_strategy?:
              | {
                  /** Always `auto`. */
                  type: "auto";
                }
              | {
                  /** Always `static`. */
                  type: "static";
                  static: {
                    /** The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                    max_chunk_size_tokens: number;
                    /** The number of tokens that overlap between chunks. The default value is `400`.
                        
                        Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                         */
                    chunk_overlap_tokens: number;
                  };
                };
            /** Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
             */
            metadata?: object;
          }[];
        }
      | {
          /** The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           */
          vector_store_ids?: string[];
          /** A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           */
          vector_stores: {
            /** A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
             */
            file_ids?: string[];
            /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
            chunking_strategy?:
              | {
                  /** Always `auto`. */
                  type: "auto";
                }
              | {
                  /** Always `static`. */
                  type: "static";
                  static: {
                    /** The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                    max_chunk_size_tokens: number;
                    /** The number of tokens that overlap between chunks. The default value is `400`.
                        
                        Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                         */
                    chunk_overlap_tokens: number;
                  };
                };
            /** Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
             */
            metadata?: object;
          }[];
        };
  } | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or temperature but not both.
     */
  top_p?: number | null;
  response_format?: AssistantsApiResponseFormatOption;
};
export type ModifyAssistantRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
   */
  model?: string;
  /** The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;
  /** The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;
  /** The system instructions that the assistant uses. The maximum length is 256,000 characters.
   */
  instructions?: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
   */
  tools?: (CodeInterpreterTool | FileSearchTool | FunctionTool)[];
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: {
    code_interpreter?: {
      /** Overrides the list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
       */
      file_ids?: string[];
    };
    file_search?: {
      /** Overrides the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
       */
      vector_store_ids?: string[];
    };
  } | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or temperature but not both.
     */
  top_p?: number | null;
  response_format?: AssistantsApiResponseFormatOption;
};
export type DeleteAssistantResponse = {
  id: string;
  deleted: boolean;
  object: "assistant.deleted";
};
export type CreateSpeechRequest = {
  /** One of the available [TTS models](/docs/models#tts): `tts-1` or `tts-1-hd`
   */
  model: string | ("tts-1" | "tts-1-hd");
  /** The text to generate audio for. The maximum length is 4096 characters. */
  input: string;
  /** The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech#voice-options). */
  voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
  /** The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. */
  response_format?: "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
  /** The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default. */
  speed?: number;
};
export type CreateTranscriptionResponseJson = {
  /** The transcribed text. */
  text: string;
};
export type TranscriptionWord = {
  /** The text content of the word. */
  word: string;
  /** Start time of the word in seconds. */
  start: number;
  /** End time of the word in seconds. */
  end: number;
};
export type TranscriptionSegment = {
  /** Unique identifier of the segment. */
  id: number;
  /** Seek offset of the segment. */
  seek: number;
  /** Start time of the segment in seconds. */
  start: number;
  /** End time of the segment in seconds. */
  end: number;
  /** Text content of the segment. */
  text: string;
  /** Array of token IDs for the text content. */
  tokens: number[];
  /** Temperature parameter used for generating the segment. */
  temperature: number;
  /** Average logprob of the segment. If the value is lower than -1, consider the logprobs failed. */
  avg_logprob: number;
  /** Compression ratio of the segment. If the value is greater than 2.4, consider the compression failed. */
  compression_ratio: number;
  /** Probability of no speech in the segment. If the value is higher than 1.0 and the `avg_logprob` is below -1, consider this segment silent. */
  no_speech_prob: number;
};
export type CreateTranscriptionResponseVerboseJson = {
  /** The language of the input audio. */
  language: string;
  /** The duration of the input audio. */
  duration: string;
  /** The transcribed text. */
  text: string;
  /** Extracted words and their corresponding timestamps. */
  words?: TranscriptionWord[];
  /** Segments of the transcribed text and their corresponding details. */
  segments?: TranscriptionSegment[];
};
export type AudioResponseFormat =
  | "json"
  | "text"
  | "srt"
  | "verbose_json"
  | "vtt";
export type CreateTranscriptionRequest = {
  /** The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Blob;
  /** ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
   */
  model: string | "whisper-1";
  /** The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
   */
  language?: string;
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should match the audio language.
   */
  prompt?: string;
  response_format?: AudioResponseFormat;
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The timestamp granularities to populate for this transcription. `response_format` must be set `verbose_json` to use timestamp granularities. Either or both of these options are supported: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
   */
  "timestamp_granularities[]"?: ("word" | "segment")[];
};
export type CreateTranslationResponseJson = {
  text: string;
};
export type CreateTranslationResponseVerboseJson = {
  /** The language of the output translation (always `english`). */
  language: string;
  /** The duration of the input audio. */
  duration: string;
  /** The translated text. */
  text: string;
  /** Segments of the translated text and their corresponding details. */
  segments?: TranscriptionSegment[];
};
export type CreateTranslationRequest = {
  /** The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Blob;
  /** ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
   */
  model: string | "whisper-1";
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should be in English.
   */
  prompt?: string;
  response_format?: AudioResponseFormat;
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
};
export type Batch = {
  id: string;
  /** The object type, which is always `batch`. */
  object: "batch";
  /** The OpenAI API endpoint used by the batch. */
  endpoint: string;
  errors?: {
    /** The object type, which is always `list`. */
    object?: string;
    data?: {
      /** An error code identifying the error type. */
      code?: string;
      /** A human-readable message providing more details about the error. */
      message?: string;
      /** The name of the parameter that caused the error, if applicable. */
      param?: string | null;
      /** The line number of the input file where the error occurred, if applicable. */
      line?: number | null;
    }[];
  };
  /** The ID of the input file for the batch. */
  input_file_id: string;
  /** The time frame within which the batch should be processed. */
  completion_window: string;
  /** The current status of the batch. */
  status:
    | "validating"
    | "failed"
    | "in_progress"
    | "finalizing"
    | "completed"
    | "expired"
    | "cancelling"
    | "cancelled";
  /** The ID of the file containing the outputs of successfully executed requests. */
  output_file_id?: string;
  /** The ID of the file containing the outputs of requests with errors. */
  error_file_id?: string;
  /** The Unix timestamp (in seconds) for when the batch was created. */
  created_at: number;
  /** The Unix timestamp (in seconds) for when the batch started processing. */
  in_progress_at?: number;
  /** The Unix timestamp (in seconds) for when the batch will expire. */
  expires_at?: number;
  /** The Unix timestamp (in seconds) for when the batch started finalizing. */
  finalizing_at?: number;
  /** The Unix timestamp (in seconds) for when the batch was completed. */
  completed_at?: number;
  /** The Unix timestamp (in seconds) for when the batch failed. */
  failed_at?: number;
  /** The Unix timestamp (in seconds) for when the batch expired. */
  expired_at?: number;
  /** The Unix timestamp (in seconds) for when the batch started cancelling. */
  cancelling_at?: number;
  /** The Unix timestamp (in seconds) for when the batch was cancelled. */
  cancelled_at?: number;
  /** The request counts for different statuses within the batch. */
  request_counts?: {
    /** Total number of requests in the batch. */
    total: number;
    /** Number of requests that have been completed successfully. */
    completed: number;
    /** Number of requests that have failed. */
    failed: number;
  };
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
};
export type ListBatchesResponse = {
  data: Batch[];
  first_id?: string;
  last_id?: string;
  has_more: boolean;
  object: "list";
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
  /** The refusal message generated by the model. */
  refusal: string | null;
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
  /** If the audio output modality is requested, this object contains data
    about the audio response from the model. [Learn more](/docs/guides/audio).
     */
  audio?: {
    /** Unique identifier for this audio response. */
    id: string;
    /** The Unix timestamp (in seconds) for when this audio response will
        no longer be accessible on the server for use in multi-turn
        conversations.
         */
    expires_at: number;
    /** Base64 encoded audio bytes generated by the model, in the format
        specified in the request.
         */
    data: string;
    /** Transcript of the audio generated by the model. */
    transcript: string;
  } | null;
};
export type ChatCompletionTokenLogprob = {
  /** The token. */
  token: string;
  /** The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
  bytes: number[] | null;
  /** List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned. */
  top_logprobs: {
    /** The token. */
    token: string;
    /** The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
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
  /** Breakdown of tokens used in a completion. */
  completion_tokens_details?: {
    /** When using Predicted Outputs, the number of tokens in the
        prediction that appeared in the completion.
         */
    accepted_prediction_tokens?: number;
    /** Audio input tokens generated by the model. */
    audio_tokens?: number;
    /** Tokens generated by the model for reasoning. */
    reasoning_tokens?: number;
    /** When using Predicted Outputs, the number of tokens in the
        prediction that did not appear in the completion. However, like
        reasoning tokens, these tokens are still counted in the total
        completion tokens for purposes of billing, output, and context window
        limits.
         */
    rejected_prediction_tokens?: number;
  };
  /** Breakdown of tokens used in the prompt. */
  prompt_tokens_details?: {
    /** Audio input tokens present in the prompt. */
    audio_tokens?: number;
    /** Cached tokens present in the prompt. */
    cached_tokens?: number;
  };
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
      /** A list of message refusal tokens with log probability information. */
      refusal: ChatCompletionTokenLogprob[] | null;
    } | null;
  }[];
  /** The Unix timestamp (in seconds) of when the chat completion was created. */
  created: number;
  /** The model used for the chat completion. */
  model: string;
  /** The service tier used for processing the request. This field is only included if the `service_tier` parameter is specified in the request. */
  service_tier?: ("scale" | "default") | null;
  /** This fingerprint represents the backend configuration that the model runs with.
    
    Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
     */
  system_fingerprint?: string;
  /** The object type, which is always `chat.completion`. */
  object: "chat.completion";
  usage?: CompletionUsage;
};
export type TextContentPart = {
  /** The type of the content part. */
  type: "text";
  /** The text content. */
  text: string;
};
export type ChatCompletionRequestSystemMessageContentPart = TextContentPart;
export type SystemMessage = {
  /** The contents of the system message. */
  content: string | ChatCompletionRequestSystemMessageContentPart[];
  /** The role of the messages author, in this case `system`. */
  role: "system";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
};
export type ImageContentPart = {
  /** The type of the content part. */
  type: "image_url";
  image_url: {
    /** Either a URL of the image or the base64 encoded image data. */
    url: string;
    /** Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision#low-or-high-fidelity-image-understanding). */
    detail?: "auto" | "low" | "high";
  };
};
export type AudioContentPart = {
  /** The type of the content part. Always `input_audio`. */
  type: "input_audio";
  input_audio: {
    /** Base64 encoded audio data. */
    data: string;
    /** The format of the encoded audio data. Currently supports "wav" and "mp3".
     */
    format: "wav" | "mp3";
  };
};
export type ChatCompletionRequestUserMessageContentPart =
  | TextContentPart
  | ImageContentPart
  | AudioContentPart;
export type UserMessage = {
  /** The contents of the user message.
   */
  content: string | ChatCompletionRequestUserMessageContentPart[];
  /** The role of the messages author, in this case `user`. */
  role: "user";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
};
export type RefusalContentPart = {
  /** The type of the content part. */
  type: "refusal";
  /** The refusal message generated by the model. */
  refusal: string;
};
export type ChatCompletionRequestAssistantMessageContentPart =
  | TextContentPart
  | RefusalContentPart;
export type AssistantMessage = {
  /** The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.
   */
  content?:
    | (
        | (string | null)
        | (ChatCompletionRequestAssistantMessageContentPart[] | null)
      )
    | null;
  /** The refusal message by the assistant. */
  refusal?: string | null;
  /** The role of the messages author, in this case `assistant`. */
  role: "assistant";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
  /** Data about a previous audio response from the model.
    [Learn more](/docs/guides/audio).
     */
  audio?: {
    /** Unique identifier for a previous audio response from the model.
     */
    id: string;
  } | null;
  tool_calls?: ChatCompletionMessageToolCalls;
  /** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
  function_call?: {
    /** The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
    arguments: string;
    /** The name of the function to call. */
    name: string;
  } | null;
};
export type ChatCompletionRequestToolMessageContentPart = TextContentPart;
export type ToolMessage = {
  /** The role of the messages author, in this case `tool`. */
  role: "tool";
  /** The contents of the tool message. */
  content: string | ChatCompletionRequestToolMessageContentPart[];
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
export type ChatCompletionModalities = ("text" | "audio")[] | null;
export type StaticContent = {
  /** The type of the predicted content you want to provide. This type is
    currently always `content`.
     */
  type: "content";
  /** The content that should be matched when generating a model response.
    If generated tokens would match this content, the entire model response
    can be returned much more quickly.
     */
  content: string | TextContentPart[];
};
export type ChatCompletionStreamOptions = {
  /** If set, an additional chunk will be streamed before the `data: [DONE]` message. The `usage` field on this chunk shows the token usage statistics for the entire request, and the `choices` field will always be an empty array. All other chunks will also include a `usage` field, but with a null value.
   */
  include_usage?: boolean;
} | null;
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
  | ("none" | "auto" | "required")
  | ChatCompletionNamedToolChoice;
export type ParallelToolCalls = boolean;
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
  /** A list of messages comprising the conversation so far. Depending on the
    [model](/docs/models) you use, different message types (modalities) are
    supported, like [text](/docs/guides/text-generation),
    [images](/docs/guides/vision), and [audio](/docs/guides/audio).
     */
  messages: ChatCompletionRequestMessage[];
  /** ID of the model to use. See the [model endpoint compatibility](/docs/models#model-endpoint-compatibility) table for details on which models work with the Chat API. */
  model:
    | string
    | (
        | "o1-preview"
        | "o1-preview-2024-09-12"
        | "o1-mini"
        | "o1-mini-2024-09-12"
        | "gpt-4o"
        | "gpt-4o-2024-08-06"
        | "gpt-4o-2024-05-13"
        | "gpt-4o-2024-08-06"
        | "gpt-4o-realtime-preview"
        | "gpt-4o-realtime-preview-2024-10-01"
        | "gpt-4o-audio-preview"
        | "gpt-4o-audio-preview-2024-10-01"
        | "chatgpt-4o-latest"
        | "gpt-4o-mini"
        | "gpt-4o-mini-2024-07-18"
        | "gpt-4-turbo"
        | "gpt-4-turbo-2024-04-09"
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
  /** Whether or not to store the output of this chat completion request
    for use in our [model distillation](/docs/guides/distillation) or [evals](/docs/guides/evals) products.
     */
  store?: boolean | null;
  /** Developer-defined tags and values used for filtering completions
    in the [dashboard](https://platform.openai.com/chat-completions).
     */
  metadata?: {
    [key: string]: string;
  } | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation)
     */
  frequency_penalty?: number | null;
  /** Modify the likelihood of specified tokens appearing in the completion.
    
    Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
     */
  logit_bias?: {
    [key: string]: number;
  } | null;
  /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`. */
  logprobs?: boolean | null;
  /** An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used. */
  top_logprobs?: number | null;
  /** The maximum number of [tokens](/tokenizer) that can be generated in the chat completion. This value can be used to control [costs](https://openai.com/api/pricing/) for text generated via API.
    
    This value is now deprecated in favor of `max_completion_tokens`, and is not compatible with [o1 series models](/docs/guides/reasoning).
     */
  max_tokens?: number | null;
  /** An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
   */
  max_completion_tokens?: number | null;
  /** How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs. */
  n?: number | null;
  modalities?: ChatCompletionModalities;
  /** Configuration for a [Predicted Output](/docs/guides/predicted-outputs),
    which can greatly improve response times when large parts of the model
    response are known ahead of time. This is most common when you are
    regenerating a file with only minor changes to most of the content.
     */
  prediction?: StaticContent | null;
  /** Parameters for audio output. Required when audio output is requested with
    `modalities: ["audio"]`. [Learn more](/docs/guides/audio).
     */
  audio?: {
    /** The voice the model uses to respond. Supported voices are `alloy`,
        `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer`, and `verse`.
         */
    voice:
      | "alloy"
      | "ash"
      | "ballad"
      | "coral"
      | "echo"
      | "sage"
      | "shimmer"
      | "verse";
    /** Specifies the output audio format. Must be one of `wav`, `mp3`, `flac`,
        `opus`, or `pcm16`.
         */
    format: "wav" | "mp3" | "flac" | "opus" | "pcm16";
  } | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation)
     */
  presence_penalty?: number | null;
  /** An object specifying the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4o mini](/docs/models#gpt-4o-mini), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4) and all GPT-3.5 Turbo models newer than `gpt-3.5-turbo-1106`.
    
    Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
    
    Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
    
    **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
     */
  response_format?:
    | ResponseFormatText
    | ResponseFormatJsonObject
    | ResponseFormatJsonSchema;
  /** This feature is in Beta.
    If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
    Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
     */
  seed?: number | null;
  /** Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
      - If set to 'auto', and the Project is Scale tier enabled, the system will utilize scale tier credits until they are exhausted.
      - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
      - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
      - When not set, the default behavior is 'auto'.
    
      When this parameter is set, the response body will include the `service_tier` utilized.
     */
  service_tier?: ("auto" | "default") | null;
  /** Up to 4 sequences where the API will stop generating further tokens.
   */
  stop?: (string | null) | string[];
  /** If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
   */
  stream?: boolean | null;
  stream_options?: ChatCompletionStreamOptions;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
    
    We generally recommend altering this or `top_p` but not both.
     */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or `temperature` but not both.
     */
  top_p?: number | null;
  /** A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 128 functions are supported.
   */
  tools?: ChatCompletionTool[];
  tool_choice?: ChatCompletionToolChoiceOption;
  parallel_tool_calls?: ParallelToolCalls;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
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
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
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
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation)
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
    
    [See more information about frequency and presence penalties.](/docs/guides/text-generation)
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
  stream_options?: ChatCompletionStreamOptions;
  /** The suffix that comes after a completion of inserted text.
    
    This parameter is only supported for `gpt-3.5-turbo-instruct`.
     */
  suffix?: string | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
    
    We generally recommend altering this or `top_p` but not both.
     */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or `temperature` but not both.
     */
  top_p?: number | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
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
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
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
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
   */
  user?: string;
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
  /** The intended purpose of the file. Supported values are `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results` and `vision`. */
  purpose:
    | "assistants"
    | "assistants_output"
    | "batch"
    | "batch_output"
    | "fine-tune"
    | "fine-tune-results"
    | "vision";
  /** Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`. */
  status: "uploaded" | "processed" | "error";
  /** Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`. */
  status_details?: string;
};
export type ListFilesResponse = {
  object: string;
  data: OpenAiFile[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type CreateFileRequest = {
  /** The File object (not file name) to be uploaded.
   */
  file: Blob;
  /** The intended purpose of the uploaded file.
    
    Use "assistants" for [Assistants](/docs/api-reference/assistants) and [Message](/docs/api-reference/messages) files, "vision" for Assistants image file inputs, "batch" for [Batch API](/docs/guides/batch), and "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning).
     */
  purpose: "assistants" | "batch" | "fine-tune" | "vision";
};
export type DeleteFileResponse = {
  id: string;
  object: "file";
  deleted: boolean;
};
export type FineTuningJobIntegration = {
  /** The type of the integration being enabled for the fine-tuning job */
  type: "wandb";
  /** The settings for your integration with Weights and Biases. This payload specifies the project that
    metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
    to your run, and set a default entity (team, username, etc) to be associated with your run.
     */
  wandb: {
    /** The name of the project that the new run will be created under.
     */
    project: string;
    /** A display name to set for the run. If not set, we will use the Job ID as the name.
     */
    name?: string | null;
    /** The entity to use for the run. This allows you to set the team or username of the WandB user that you would
        like associated with the run. If not set, the default entity for the registered WandB API key is used.
         */
    entity?: string | null;
    /** A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
        default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
         */
    tags?: string[];
  };
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
  /** A list of integrations to enable for this fine-tuning job. */
  integrations?: FineTuningJobIntegration[] | null;
  /** The seed used for the fine-tuning job. */
  seed: number;
  /** The Unix timestamp (in seconds) for when the fine-tuning job is estimated to finish. The value will be null if the fine-tuning job is not running. */
  estimated_finish?: number | null;
};
export type CreateFineTuningJobRequest = {
  /** The name of the model to fine-tune. You can select one of the
    [supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).
     */
  model:
    | string
    | ("babbage-002" | "davinci-002" | "gpt-3.5-turbo" | "gpt-4o-mini");
  /** The ID of an uploaded file that contains training data.
    
    See [upload file](/docs/api-reference/files/create) for how to upload a file.
    
    Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.
    
    The contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) format.
    
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
  /** A string of up to 64 characters that will be added to your fine-tuned model name.
    
    For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-4o-mini:openai:custom-model-name:7p4lURel`.
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
  /** A list of integrations to enable for your fine-tuning job. */
  integrations?:
    | {
        /** The type of integration to enable. Currently, only "wandb" (Weights and Biases) is supported.
         */
        type: "wandb";
        /** The settings for your integration with Weights and Biases. This payload specifies the project that
        metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
        to your run, and set a default entity (team, username, etc) to be associated with your run.
         */
        wandb: {
          /** The name of the project that the new run will be created under.
           */
          project: string;
          /** A display name to set for the run. If not set, we will use the Job ID as the name.
           */
          name?: string | null;
          /** The entity to use for the run. This allows you to set the team or username of the WandB user that you would
            like associated with the run. If not set, the default entity for the registered WandB API key is used.
             */
          entity?: string | null;
          /** A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
            default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
             */
          tags?: string[];
        };
      }[]
    | null;
  /** The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases.
    If a seed is not specified, one will be generated for you.
     */
  seed?: number | null;
};
export type ListPaginatedFineTuningJobsResponse = {
  data: FineTuningJob[];
  has_more: boolean;
  object: "list";
};
export type FineTuningJobCheckpoint = {
  /** The checkpoint identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the checkpoint was created. */
  created_at: number;
  /** The name of the fine-tuned checkpoint model that is created. */
  fine_tuned_model_checkpoint: string;
  /** The step number that the checkpoint was created at. */
  step_number: number;
  /** Metrics at the step number during the fine-tuning job. */
  metrics: {
    step?: number;
    train_loss?: number;
    train_mean_token_accuracy?: number;
    valid_loss?: number;
    valid_mean_token_accuracy?: number;
    full_valid_loss?: number;
    full_valid_mean_token_accuracy?: number;
  };
  /** The name of the fine-tuning job that this checkpoint was created from. */
  fine_tuning_job_id: string;
  /** The object type, which is always "fine_tuning.job.checkpoint". */
  object: "fine_tuning.job.checkpoint";
};
export type ListFineTuningJobCheckpointsResponse = {
  data: FineTuningJobCheckpoint[];
  object: "list";
  first_id?: string | null;
  last_id?: string | null;
  has_more: boolean;
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
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. */
  response_format?: ("url" | "b64_json") | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
   */
  user?: string;
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
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. */
  response_format?: ("url" | "b64_json") | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models. */
  size?:
    | ("256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792")
    | null;
  /** The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`. */
  style?: ("vivid" | "natural") | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
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
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. */
  response_format?: ("url" | "b64_json") | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
   */
  user?: string;
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
    /** Whether any of the below categories are flagged. */
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
      /** Content that includes instructions or advice that facilitate the planning or execution of wrongdoing, or that gives advice or instruction on how to commit illicit acts. For example, "how to shoplift" would fit this category. */
      illicit: boolean;
      /** Content that includes instructions or advice that facilitate the planning or execution of wrongdoing that also includes violence, or that gives advice or instruction on the procurement of any weapon. */
      "illicit/violent": boolean;
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
      /** The score for the category 'illicit'. */
      illicit: number;
      /** The score for the category 'illicit/violent'. */
      "illicit/violent": number;
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
    /** A list of the categories along with the input type(s) that the score applies to. */
    category_applied_input_types: {
      /** The applied input type(s) for the category 'hate'. */
      hate: "text"[];
      /** The applied input type(s) for the category 'hate/threatening'. */
      "hate/threatening": "text"[];
      /** The applied input type(s) for the category 'harassment'. */
      harassment: "text"[];
      /** The applied input type(s) for the category 'harassment/threatening'. */
      "harassment/threatening": "text"[];
      /** The applied input type(s) for the category 'illicit'. */
      illicit: "text"[];
      /** The applied input type(s) for the category 'illicit/violent'. */
      "illicit/violent": "text"[];
      /** The applied input type(s) for the category 'self-harm'. */
      "self-harm": ("text" | "image")[];
      /** The applied input type(s) for the category 'self-harm/intent'. */
      "self-harm/intent": ("text" | "image")[];
      /** The applied input type(s) for the category 'self-harm/instructions'. */
      "self-harm/instructions": ("text" | "image")[];
      /** The applied input type(s) for the category 'sexual'. */
      sexual: ("text" | "image")[];
      /** The applied input type(s) for the category 'sexual/minors'. */
      "sexual/minors": "text"[];
      /** The applied input type(s) for the category 'violence'. */
      violence: ("text" | "image")[];
      /** The applied input type(s) for the category 'violence/graphic'. */
      "violence/graphic": ("text" | "image")[];
    };
  }[];
};
export type CreateModerationRequest = {
  /** Input (or inputs) to classify. Can be a single string, an array of strings, or
    an array of multi-modal input objects similar to other models.
     */
  input:
    | string
    | string[]
    | (
        | {
            /** Always `image_url`. */
            type: "image_url";
            /** Contains either an image URL or a data URL for a base64 encoded image. */
            image_url: {
              /** Either a URL of the image or the base64 encoded image data. */
              url: string;
            };
          }
        | {
            /** Always `text`. */
            type: "text";
            /** A string of text to classify. */
            text: string;
          }
      )[];
  /** The content moderation model you would like to use. Learn more in
    [the moderation guide](/docs/guides/moderation), and learn about
    available models [here](/docs/models#moderation).
     */
  model?:
    | string
    | (
        | "omni-moderation-latest"
        | "omni-moderation-2024-09-26"
        | "text-moderation-latest"
        | "text-moderation-stable"
      );
};
export type AuditLogEventType =
  | "api_key.created"
  | "api_key.updated"
  | "api_key.deleted"
  | "invite.sent"
  | "invite.accepted"
  | "invite.deleted"
  | "login.succeeded"
  | "login.failed"
  | "logout.succeeded"
  | "logout.failed"
  | "organization.updated"
  | "project.created"
  | "project.updated"
  | "project.archived"
  | "service_account.created"
  | "service_account.updated"
  | "service_account.deleted"
  | "rate_limit.updated"
  | "rate_limit.deleted"
  | "user.added"
  | "user.updated"
  | "user.deleted";
export type AuditLogActorUser = {
  /** The user id. */
  id?: string;
  /** The user email. */
  email?: string;
};
export type AuditLogActorSession = {
  user?: AuditLogActorUser;
  /** The IP address from which the action was performed. */
  ip_address?: string;
};
export type AuditLogActorServiceAccount = {
  /** The service account id. */
  id?: string;
};
export type AuditLogActorApiKey = {
  /** The tracking id of the API key. */
  id?: string;
  /** The type of API key. Can be either `user` or `service_account`. */
  type?: "user" | "service_account";
  user?: AuditLogActorUser;
  service_account?: AuditLogActorServiceAccount;
};
export type AuditLogActor = {
  /** The type of actor. Is either `session` or `api_key`. */
  type?: "session" | "api_key";
  session?: AuditLogActorSession;
  api_key?: AuditLogActorApiKey;
};
export type AuditLog = {
  /** The ID of this log. */
  id: string;
  type: AuditLogEventType;
  /** The Unix timestamp (in seconds) of the event. */
  effective_at: number;
  /** The project that the action was scoped to. Absent for actions not scoped to projects. */
  project?: {
    /** The project ID. */
    id?: string;
    /** The project title. */
    name?: string;
  };
  actor: AuditLogActor;
  /** The details for events with this `type`. */
  "api_key.created"?: {
    /** The tracking ID of the API key. */
    id?: string;
    /** The payload used to create the API key. */
    data?: {
      /** A list of scopes allowed for the API key, e.g. `["api.model.request"]` */
      scopes?: string[];
    };
  };
  /** The details for events with this `type`. */
  "api_key.updated"?: {
    /** The tracking ID of the API key. */
    id?: string;
    /** The payload used to update the API key. */
    changes_requested?: {
      /** A list of scopes allowed for the API key, e.g. `["api.model.request"]` */
      scopes?: string[];
    };
  };
  /** The details for events with this `type`. */
  "api_key.deleted"?: {
    /** The tracking ID of the API key. */
    id?: string;
  };
  /** The details for events with this `type`. */
  "invite.sent"?: {
    /** The ID of the invite. */
    id?: string;
    /** The payload used to create the invite. */
    data?: {
      /** The email invited to the organization. */
      email?: string;
      /** The role the email was invited to be. Is either `owner` or `member`. */
      role?: string;
    };
  };
  /** The details for events with this `type`. */
  "invite.accepted"?: {
    /** The ID of the invite. */
    id?: string;
  };
  /** The details for events with this `type`. */
  "invite.deleted"?: {
    /** The ID of the invite. */
    id?: string;
  };
  /** The details for events with this `type`. */
  "login.failed"?: {
    /** The error code of the failure. */
    error_code?: string;
    /** The error message of the failure. */
    error_message?: string;
  };
  /** The details for events with this `type`. */
  "logout.failed"?: {
    /** The error code of the failure. */
    error_code?: string;
    /** The error message of the failure. */
    error_message?: string;
  };
  /** The details for events with this `type`. */
  "organization.updated"?: {
    /** The organization ID. */
    id?: string;
    /** The payload used to update the organization settings. */
    changes_requested?: {
      /** The organization title. */
      title?: string;
      /** The organization description. */
      description?: string;
      /** The organization name. */
      name?: string;
      settings?: {
        /** Visibility of the threads page which shows messages created with the Assistants API and Playground. One of `ANY_ROLE`, `OWNERS`, or `NONE`. */
        threads_ui_visibility?: string;
        /** Visibility of the usage dashboard which shows activity and costs for your organization. One of `ANY_ROLE` or `OWNERS`. */
        usage_dashboard_visibility?: string;
      };
    };
  };
  /** The details for events with this `type`. */
  "project.created"?: {
    /** The project ID. */
    id?: string;
    /** The payload used to create the project. */
    data?: {
      /** The project name. */
      name?: string;
      /** The title of the project as seen on the dashboard. */
      title?: string;
    };
  };
  /** The details for events with this `type`. */
  "project.updated"?: {
    /** The project ID. */
    id?: string;
    /** The payload used to update the project. */
    changes_requested?: {
      /** The title of the project as seen on the dashboard. */
      title?: string;
    };
  };
  /** The details for events with this `type`. */
  "project.archived"?: {
    /** The project ID. */
    id?: string;
  };
  /** The details for events with this `type`. */
  "rate_limit.updated"?: {
    /** The rate limit ID */
    id?: string;
    /** The payload used to update the rate limits. */
    changes_requested?: {
      /** The maximum requests per minute. */
      max_requests_per_1_minute?: number;
      /** The maximum tokens per minute. */
      max_tokens_per_1_minute?: number;
      /** The maximum images per minute. Only relevant for certain models. */
      max_images_per_1_minute?: number;
      /** The maximum audio megabytes per minute. Only relevant for certain models. */
      max_audio_megabytes_per_1_minute?: number;
      /** The maximum requests per day. Only relevant for certain models. */
      max_requests_per_1_day?: number;
      /** The maximum batch input tokens per day. Only relevant for certain models. */
      batch_1_day_max_input_tokens?: number;
    };
  };
  /** The details for events with this `type`. */
  "rate_limit.deleted"?: {
    /** The rate limit ID */
    id?: string;
  };
  /** The details for events with this `type`. */
  "service_account.created"?: {
    /** The service account ID. */
    id?: string;
    /** The payload used to create the service account. */
    data?: {
      /** The role of the service account. Is either `owner` or `member`. */
      role?: string;
    };
  };
  /** The details for events with this `type`. */
  "service_account.updated"?: {
    /** The service account ID. */
    id?: string;
    /** The payload used to updated the service account. */
    changes_requested?: {
      /** The role of the service account. Is either `owner` or `member`. */
      role?: string;
    };
  };
  /** The details for events with this `type`. */
  "service_account.deleted"?: {
    /** The service account ID. */
    id?: string;
  };
  /** The details for events with this `type`. */
  "user.added"?: {
    /** The user ID. */
    id?: string;
    /** The payload used to add the user to the project. */
    data?: {
      /** The role of the user. Is either `owner` or `member`. */
      role?: string;
    };
  };
  /** The details for events with this `type`. */
  "user.updated"?: {
    /** The project ID. */
    id?: string;
    /** The payload used to update the user. */
    changes_requested?: {
      /** The role of the user. Is either `owner` or `member`. */
      role?: string;
    };
  };
  /** The details for events with this `type`. */
  "user.deleted"?: {
    /** The user ID. */
    id?: string;
  };
};
export type ListAuditLogsResponse = {
  object: "list";
  data: AuditLog[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type Invite = {
  /** The object type, which is always `organization.invite` */
  object: "organization.invite";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The email address of the individual to whom the invite was sent */
  email: string;
  /** `owner` or `reader` */
  role: "owner" | "reader";
  /** `accepted`,`expired`, or `pending` */
  status: "accepted" | "expired" | "pending";
  /** The Unix timestamp (in seconds) of when the invite was sent. */
  invited_at: number;
  /** The Unix timestamp (in seconds) of when the invite expires. */
  expires_at: number;
  /** The Unix timestamp (in seconds) of when the invite was accepted. */
  accepted_at?: number;
};
export type InviteListResponse = {
  /** The object type, which is always `list` */
  object: "list";
  data: Invite[];
  /** The first `invite_id` in the retrieved `list` */
  first_id?: string;
  /** The last `invite_id` in the retrieved `list` */
  last_id?: string;
  /** The `has_more` property is used for pagination to indicate there are additional results. */
  has_more?: boolean;
};
export type InviteRequest = {
  /** Send an email to this address */
  email: string;
  /** `owner` or `reader` */
  role: "reader" | "owner";
};
export type InviteDeleteResponse = {
  /** The object type, which is always `organization.invite.deleted` */
  object: "organization.invite.deleted";
  id: string;
  deleted: boolean;
};
export type Project = {
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The object type, which is always `organization.project` */
  object: "organization.project";
  /** The name of the project. This appears in reporting. */
  name: string;
  /** The Unix timestamp (in seconds) of when the project was created. */
  created_at: number;
  /** The Unix timestamp (in seconds) of when the project was archived or `null`. */
  archived_at?: number | null;
  /** `active` or `archived` */
  status: "active" | "archived";
};
export type ProjectListResponse = {
  object: "list";
  data: Project[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type ProjectCreateRequest = {
  /** The friendly name of the project, this name appears in reports. */
  name: string;
};
export type Error = {
  code: string | null;
  message: string;
  param: string | null;
  type: string;
};
export type ErrorResponse = {
  error: Error;
};
export type ProjectUpdateRequest = {
  /** The updated name of the project, this name appears in reports. */
  name: string;
};
export type ProjectUser = {
  /** The object type, which is always `organization.project.user` */
  object: "organization.project.user";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the user */
  name: string;
  /** The email address of the user */
  email: string;
  /** `owner` or `member` */
  role: "owner" | "member";
  /** The Unix timestamp (in seconds) of when the project was added. */
  added_at: number;
};
export type ProjectServiceAccount = {
  /** The object type, which is always `organization.project.service_account` */
  object: "organization.project.service_account";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the service account */
  name: string;
  /** `owner` or `member` */
  role: "owner" | "member";
  /** The Unix timestamp (in seconds) of when the service account was created */
  created_at: number;
};
export type ProjectApiKey = {
  /** The object type, which is always `organization.project.api_key` */
  object: "organization.project.api_key";
  /** The redacted value of the API key */
  redacted_value: string;
  /** The name of the API key */
  name: string;
  /** The Unix timestamp (in seconds) of when the API key was created */
  created_at: number;
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  owner: {
    /** `user` or `service_account` */
    type?: "user" | "service_account";
    user?: ProjectUser;
    service_account?: ProjectServiceAccount;
  };
};
export type ProjectApiKeyListResponse = {
  object: "list";
  data: ProjectApiKey[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type ProjectApiKeyDeleteResponse = {
  object: "organization.project.api_key.deleted";
  id: string;
  deleted: boolean;
};
export type ProjectRateLimit = {
  /** The object type, which is always `project.rate_limit` */
  object: "project.rate_limit";
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The model this rate limit applies to. */
  model: string;
  /** The maximum requests per minute. */
  max_requests_per_1_minute: number;
  /** The maximum tokens per minute. */
  max_tokens_per_1_minute: number;
  /** The maximum images per minute. Only present for relevant models. */
  max_images_per_1_minute?: number;
  /** The maximum audio megabytes per minute. Only present for relevant models. */
  max_audio_megabytes_per_1_minute?: number;
  /** The maximum requests per day. Only present for relevant models. */
  max_requests_per_1_day?: number;
  /** The maximum batch input tokens per day. Only present for relevant models. */
  batch_1_day_max_input_tokens?: number;
};
export type ProjectRateLimitListResponse = {
  object: "list";
  data: ProjectRateLimit[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type ProjectRateLimitUpdateRequest = {
  /** The maximum requests per minute. */
  max_requests_per_1_minute?: number;
  /** The maximum tokens per minute. */
  max_tokens_per_1_minute?: number;
  /** The maximum images per minute. Only relevant for certain models. */
  max_images_per_1_minute?: number;
  /** The maximum audio megabytes per minute. Only relevant for certain models. */
  max_audio_megabytes_per_1_minute?: number;
  /** The maximum requests per day. Only relevant for certain models. */
  max_requests_per_1_day?: number;
  /** The maximum batch input tokens per day. Only relevant for certain models. */
  batch_1_day_max_input_tokens?: number;
};
export type ProjectServiceAccountListResponse = {
  object: "list";
  data: ProjectServiceAccount[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type ProjectServiceAccountApiKey = {
  /** The object type, which is always `organization.project.service_account.api_key` */
  object: "organization.project.service_account.api_key";
  value: string;
  name: string;
  created_at: number;
  id: string;
};
export type ProjectServiceAccountCreateResponse = {
  object: "organization.project.service_account";
  id: string;
  name: string;
  /** Service accounts can only have one role of type `member` */
  role: "member";
  created_at: number;
  api_key: ProjectServiceAccountApiKey;
};
export type ProjectServiceAccountCreateRequest = {
  /** The name of the service account being created. */
  name: string;
};
export type ProjectServiceAccountDeleteResponse = {
  object: "organization.project.service_account.deleted";
  id: string;
  deleted: boolean;
};
export type ProjectUserListResponse = {
  object: string;
  data: ProjectUser[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type ProjectUserCreateRequest = {
  /** The ID of the user. */
  user_id: string;
  /** `owner` or `member` */
  role: "owner" | "member";
};
export type ProjectUserUpdateRequest = {
  /** `owner` or `member` */
  role: "owner" | "member";
};
export type ProjectUserDeleteResponse = {
  object: "organization.project.user.deleted";
  id: string;
  deleted: boolean;
};
export type User = {
  /** The object type, which is always `organization.user` */
  object: "organization.user";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the user */
  name: string;
  /** The email address of the user */
  email: string;
  /** `owner` or `reader` */
  role: "owner" | "reader";
  /** The Unix timestamp (in seconds) of when the user was added. */
  added_at: number;
};
export type UserListResponse = {
  object: "list";
  data: User[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type UserRoleUpdateRequest = {
  /** `owner` or `reader` */
  role: "owner" | "reader";
};
export type UserDeleteResponse = {
  object: "organization.user.deleted";
  id: string;
  deleted: boolean;
};
export type Thread = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread`. */
  object: "thread";
  /** The Unix timestamp (in seconds) for when the thread was created. */
  created_at: number;
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources: {
    code_interpreter?: {
      /** A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
       */
      file_ids?: string[];
    };
    file_search?: {
      /** The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
       */
      vector_store_ids?: string[];
    };
  } | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata: object | null;
};
export type ImageFile = {
  /** Always `image_file`. */
  type: "image_file";
  image_file: {
    /** The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. */
    file_id: string;
    /** Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`. */
    detail?: "auto" | "low" | "high";
  };
};
export type ImageUrl = {
  /** The type of the content part. */
  type: "image_url";
  image_url: {
    /** The external URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp. */
    url: string;
    /** Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. Default value is `auto` */
    detail?: "auto" | "low" | "high";
  };
};
export type Text = {
  /** Always `text`. */
  type: "text";
  /** Text content to be sent to the model */
  text: string;
};
export type FileSearchTool2 = {
  /** The type of tool being defined: `file_search` */
  type: "file_search";
};
export type CreateMessageRequest = {
  /** The role of the entity that is creating the message. Allowed values include:
    - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
    - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.
     */
  role: "user" | "assistant";
  content: string | (ImageFile | ImageUrl | Text)[];
  /** A list of files attached to the message, and the tools they should be added to. */
  attachments?:
    | {
        /** The ID of the file to attach to the message. */
        file_id?: string;
        /** The tools to add this file to. */
        tools?: (CodeInterpreterTool | FileSearchTool2)[];
      }[]
    | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
};
export type CreateThreadRequest = {
  /** A list of [messages](/docs/api-reference/messages) to start the thread with. */
  messages?: CreateMessageRequest[];
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: {
    code_interpreter?: {
      /** A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
       */
      file_ids?: string[];
    };
    file_search?:
      | {
          /** The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
           */
          vector_store_ids: string[];
          /** A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.
           */
          vector_stores?: {
            /** A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
             */
            file_ids?: string[];
            /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
            chunking_strategy?:
              | {
                  /** Always `auto`. */
                  type: "auto";
                }
              | {
                  /** Always `static`. */
                  type: "static";
                  static: {
                    /** The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                    max_chunk_size_tokens: number;
                    /** The number of tokens that overlap between chunks. The default value is `400`.
                        
                        Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                         */
                    chunk_overlap_tokens: number;
                  };
                };
            /** Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
             */
            metadata?: object;
          }[];
        }
      | {
          /** The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
           */
          vector_store_ids?: string[];
          /** A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.
           */
          vector_stores: {
            /** A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
             */
            file_ids?: string[];
            /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
            chunking_strategy?:
              | {
                  /** Always `auto`. */
                  type: "auto";
                }
              | {
                  /** Always `static`. */
                  type: "static";
                  static: {
                    /** The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                    max_chunk_size_tokens: number;
                    /** The number of tokens that overlap between chunks. The default value is `400`.
                        
                        Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                         */
                    chunk_overlap_tokens: number;
                  };
                };
            /** Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
             */
            metadata?: object;
          }[];
        };
  } | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
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
export type ThreadTruncationControls = {
  /** The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will be truncated to the n most recent messages in the thread. When set to `auto`, messages in the middle of the thread will be dropped to fit the context length of the model, `max_prompt_tokens`. */
  type: "auto" | "last_messages";
  /** The number of most recent messages from the thread when constructing the context for the run. */
  last_messages?: number | null;
};
export type AssistantsNamedToolChoice = {
  /** The type of the tool. If type is `function`, the function name must be set */
  type: "function" | "code_interpreter" | "file_search";
  function?: {
    /** The name of the function to call. */
    name: string;
  };
};
export type AssistantsApiToolChoiceOption =
  | ("none" | "auto" | "required")
  | AssistantsNamedToolChoice;
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
  /** The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`. */
  status:
    | "queued"
    | "in_progress"
    | "requires_action"
    | "cancelling"
    | "cancelled"
    | "failed"
    | "completed"
    | "incomplete"
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
    /** One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`. */
    code: "server_error" | "rate_limit_exceeded" | "invalid_prompt";
    /** A human-readable description of the error. */
    message: string;
  } | null;
  /** The Unix timestamp (in seconds) for when the run will expire. */
  expires_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was started. */
  started_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was cancelled. */
  cancelled_at: number | null;
  /** The Unix timestamp (in seconds) for when the run failed. */
  failed_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was completed. */
  completed_at: number | null;
  /** Details on why the run is incomplete. Will be `null` if the run is not incomplete. */
  incomplete_details: {
    /** The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run. */
    reason?: "max_completion_tokens" | "max_prompt_tokens";
  } | null;
  /** The model that the [assistant](/docs/api-reference/assistants) used for this run. */
  model: string;
  /** The instructions that the [assistant](/docs/api-reference/assistants) used for this run. */
  instructions: string;
  /** The list of tools that the [assistant](/docs/api-reference/assistants) used for this run. */
  tools: (CodeInterpreterTool | FileSearchTool | FunctionTool)[];
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata: object | null;
  usage: RunCompletionUsage;
  /** The sampling temperature used for this run. If not set, defaults to 1. */
  temperature?: number | null;
  /** The nucleus sampling value used for this run. If not set, defaults to 1. */
  top_p?: number | null;
  /** The maximum number of prompt tokens specified to have been used over the course of the run.
   */
  max_prompt_tokens: number | null;
  /** The maximum number of completion tokens specified to have been used over the course of the run.
   */
  max_completion_tokens: number | null;
  truncation_strategy: ThreadTruncationControls;
  tool_choice: AssistantsApiToolChoiceOption;
  parallel_tool_calls: ParallelToolCalls;
  response_format: AssistantsApiResponseFormatOption;
};
export type CreateThreadAndRunRequest = {
  /** The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
  assistant_id: string;
  /** If no thread is provided, an empty thread will be created. */
  thread?: CreateThreadRequest;
  /** The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used. */
  model?:
    | (
        | string
        | (
            | "gpt-4o"
            | "gpt-4o-2024-08-06"
            | "gpt-4o-2024-05-13"
            | "gpt-4o-2024-08-06"
            | "gpt-4o-mini"
            | "gpt-4o-mini-2024-07-18"
            | "gpt-4-turbo"
            | "gpt-4-turbo-2024-04-09"
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
            | "gpt-3.5-turbo-0613"
            | "gpt-3.5-turbo-1106"
            | "gpt-3.5-turbo-0125"
            | "gpt-3.5-turbo-16k-0613"
          )
      )
    | null;
  /** Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis. */
  instructions?: string | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
  tools?: (CodeInterpreterTool | FileSearchTool | FunctionTool)[] | null;
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: {
    code_interpreter?: {
      /** A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
       */
      file_ids?: string[];
    };
    file_search?: {
      /** The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
       */
      vector_store_ids?: string[];
    };
  } | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or temperature but not both.
     */
  top_p?: number | null;
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
   */
  stream?: boolean | null;
  /** The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_prompt_tokens?: number | null;
  /** The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_completion_tokens?: number | null;
  truncation_strategy?: ThreadTruncationControls;
  tool_choice?: AssistantsApiToolChoiceOption;
  parallel_tool_calls?: ParallelToolCalls;
  response_format?: AssistantsApiResponseFormatOption;
};
export type ModifyThreadRequest = {
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: {
    code_interpreter?: {
      /** A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
       */
      file_ids?: string[];
    };
    file_search?: {
      /** The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
       */
      vector_store_ids?: string[];
    };
  } | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
};
export type DeleteThreadResponse = {
  id: string;
  deleted: boolean;
  object: "thread.deleted";
};
export type FileCitation = {
  /** Always `file_citation`. */
  type: "file_citation";
  /** The text in the message content that needs to be replaced. */
  text: string;
  file_citation: {
    /** The ID of the specific File the citation is from. */
    file_id: string;
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
export type Text2 = {
  /** Always `text`. */
  type: "text";
  text: {
    /** The data that makes up the text. */
    value: string;
    annotations: (FileCitation | FilePath)[];
  };
};
export type Refusal = {
  /** Always `refusal`. */
  type: "refusal";
  refusal: string;
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
  /** The status of the message, which can be either `in_progress`, `incomplete`, or `completed`. */
  status: "in_progress" | "incomplete" | "completed";
  /** On an incomplete message, details about why the message is incomplete. */
  incomplete_details: {
    /** The reason the message is incomplete. */
    reason:
      | "content_filter"
      | "max_tokens"
      | "run_cancelled"
      | "run_expired"
      | "run_failed";
  } | null;
  /** The Unix timestamp (in seconds) for when the message was completed. */
  completed_at: number | null;
  /** The Unix timestamp (in seconds) for when the message was marked as incomplete. */
  incomplete_at: number | null;
  /** The entity that produced the message. One of `user` or `assistant`. */
  role: "user" | "assistant";
  /** The content of the message in array of text and/or images. */
  content: (ImageFile | ImageUrl | Text2 | Refusal)[];
  /** If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message. */
  assistant_id: string | null;
  /** The ID of the [run](/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints. */
  run_id: string | null;
  /** A list of files attached to the message, and the tools they were added to. */
  attachments:
    | {
        /** The ID of the file to attach to the message. */
        file_id?: string;
        /** The tools to add this file to. */
        tools?: (CodeInterpreterTool | FileSearchTool2)[];
      }[]
    | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
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
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
};
export type DeleteMessageResponse = {
  id: string;
  deleted: boolean;
  object: "thread.message.deleted";
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
  model?:
    | (
        | string
        | (
            | "gpt-4o"
            | "gpt-4o-2024-08-06"
            | "gpt-4o-2024-05-13"
            | "gpt-4o-2024-08-06"
            | "gpt-4o-mini"
            | "gpt-4o-mini-2024-07-18"
            | "gpt-4-turbo"
            | "gpt-4-turbo-2024-04-09"
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
            | "gpt-3.5-turbo-0613"
            | "gpt-3.5-turbo-1106"
            | "gpt-3.5-turbo-0125"
            | "gpt-3.5-turbo-16k-0613"
          )
      )
    | null;
  /** Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis. */
  instructions?: string | null;
  /** Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions. */
  additional_instructions?: string | null;
  /** Adds additional messages to the thread before creating the run. */
  additional_messages?: CreateMessageRequest[] | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
  tools?: (CodeInterpreterTool | FileSearchTool | FunctionTool)[] | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    
    We generally recommend altering this or temperature but not both.
     */
  top_p?: number | null;
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
   */
  stream?: boolean | null;
  /** The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_prompt_tokens?: number | null;
  /** The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_completion_tokens?: number | null;
  truncation_strategy?: ThreadTruncationControls;
  tool_choice?: AssistantsApiToolChoiceOption;
  parallel_tool_calls?: ParallelToolCalls;
  response_format?: AssistantsApiResponseFormatOption;
};
export type ModifyRunRequest = {
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
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
export type FileSearchToolCallRankingOptions2 = {
  /** The ranker used for the file search. */
  ranker: "default_2024_08_21";
  /** The score threshold for the file search. All values must be a floating point number between 0 and 1. */
  score_threshold: number;
};
export type FileSearchToolCallResult = {
  /** The ID of the file that result was found in. */
  file_id: string;
  /** The name of the file that result was found in. */
  file_name: string;
  /** The score of the result. All values must be a floating point number between 0 and 1. */
  score: number;
  /** The content of the result that was found. The content is only included if requested via the include query parameter. */
  content?: {
    /** The type of the content. */
    type?: "text";
    /** The text content of the file. */
    text?: string;
  }[];
};
export type FileSearchToolCall = {
  /** The ID of the tool call object. */
  id: string;
  /** The type of tool call. This is always going to be `file_search` for this type of tool call. */
  type: "file_search";
  /** For now, this is always going to be an empty object. */
  file_search: {
    ranking_options?: FileSearchToolCallRankingOptions2;
    /** The results of the file search. */
    results?: FileSearchToolCallResult[];
  };
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
  /** An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
   */
  tool_calls: (
    | CodeInterpreterToolCall
    | FileSearchToolCall
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
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
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
export type SubmitToolOutputsRunRequest = {
  /** A list of tools for which the outputs are being submitted. */
  tool_outputs: {
    /** The ID of the tool call in the `required_action` object within the run object the output is being submitted for. */
    tool_call_id?: string;
    /** The output of the tool call to be submitted to continue the run. */
    output?: string;
  }[];
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
   */
  stream?: boolean | null;
};
export type Upload = {
  /** The Upload unique identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the Upload was created. */
  created_at: number;
  /** The name of the file to be uploaded. */
  filename: string;
  /** The intended number of bytes to be uploaded. */
  bytes: number;
  /** The intended purpose of the file. [Please refer here](/docs/api-reference/files/object#files/object-purpose) for acceptable values. */
  purpose: string;
  /** The status of the Upload. */
  status: "pending" | "completed" | "cancelled" | "expired";
  /** The Unix timestamp (in seconds) for when the Upload was created. */
  expires_at: number;
  /** The object type, which is always "upload". */
  object?: "upload";
  /** The ready File object after the Upload is completed. */
  file?: OpenAiFile;
};
export type CreateUploadRequest = {
  /** The name of the file to upload.
   */
  filename: string;
  /** The intended purpose of the uploaded file.
    
    See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).
     */
  purpose: "assistants" | "batch" | "fine-tune" | "vision";
  /** The number of bytes in the file you are uploading.
   */
  bytes: number;
  /** The MIME type of the file.
    
    This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.
     */
  mime_type: string;
};
export type CompleteUploadRequest = {
  /** The ordered list of Part IDs.
   */
  part_ids: string[];
  /** The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.
   */
  md5?: string;
};
export type UploadPart = {
  /** The upload Part unique identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the Part was created. */
  created_at: number;
  /** The ID of the Upload object that this Part was added to. */
  upload_id: string;
  /** The object type, which is always `upload.part`. */
  object: "upload.part";
};
export type AddUploadPartRequest = {
  /** The chunk of bytes for this Part.
   */
  data: Blob;
};
export type VectorStoreExpirationPolicy = {
  /** Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. */
  anchor: "last_active_at";
  /** The number of days after the anchor time that the vector store will expire. */
  days: number;
};
export type VectorStore = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store`. */
  object: "vector_store";
  /** The Unix timestamp (in seconds) for when the vector store was created. */
  created_at: number;
  /** The name of the vector store. */
  name: string;
  /** The total number of bytes used by the files in the vector store. */
  usage_bytes: number;
  file_counts: {
    /** The number of files that are currently being processed. */
    in_progress: number;
    /** The number of files that have been successfully processed. */
    completed: number;
    /** The number of files that have failed to process. */
    failed: number;
    /** The number of files that were cancelled. */
    cancelled: number;
    /** The total number of files. */
    total: number;
  };
  /** The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use. */
  status: "expired" | "in_progress" | "completed";
  expires_after?: VectorStoreExpirationPolicy;
  /** The Unix timestamp (in seconds) for when the vector store will expire. */
  expires_at?: number | null;
  /** The Unix timestamp (in seconds) for when the vector store was last active. */
  last_active_at: number | null;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata: object | null;
};
export type ListVectorStoresResponse = {
  object: string;
  data: VectorStore[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type AutoChunkingStrategy = {
  /** Always `auto`. */
  type: "auto";
};
export type StaticChunkingStrategy2 = {
  /** The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
  max_chunk_size_tokens: number;
  /** The number of tokens that overlap between chunks. The default value is `400`.
    
    Note that the overlap must not exceed half of `max_chunk_size_tokens`.
     */
  chunk_overlap_tokens: number;
};
export type StaticChunkingStrategy = {
  /** Always `static`. */
  type: "static";
  static: StaticChunkingStrategy2;
};
export type CreateVectorStoreRequest = {
  /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_ids?: string[];
  /** The name of the vector store. */
  name?: string;
  expires_after?: VectorStoreExpirationPolicy;
  /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty. */
  chunking_strategy?: AutoChunkingStrategy | StaticChunkingStrategy;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
};
export type UpdateVectorStoreRequest = {
  /** The name of the vector store. */
  name?: string | null;
  expires_after?: VectorStoreExpirationPolicy;
  /** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   */
  metadata?: object | null;
};
export type DeleteVectorStoreResponse = {
  id: string;
  deleted: boolean;
  object: "vector_store.deleted";
};
export type VectorStoreFileBatch = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file_batch`. */
  object: "vector_store.files_batch";
  /** The Unix timestamp (in seconds) for when the vector store files batch was created. */
  created_at: number;
  /** The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
  vector_store_id: string;
  /** The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. */
  status: "in_progress" | "completed" | "cancelled" | "failed";
  file_counts: {
    /** The number of files that are currently being processed. */
    in_progress: number;
    /** The number of files that have been processed. */
    completed: number;
    /** The number of files that have failed to process. */
    failed: number;
    /** The number of files that where cancelled. */
    cancelled: number;
    /** The total number of files. */
    total: number;
  };
};
export type ChunkingStrategyRequestParam =
  | AutoChunkingStrategy
  | StaticChunkingStrategy;
export type CreateVectorStoreFileBatchRequest = {
  /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_ids: string[];
  chunking_strategy?: ChunkingStrategyRequestParam;
};
export type StaticChunkingStrategy3 = {
  /** Always `static`. */
  type: "static";
  static: StaticChunkingStrategy2;
};
export type OtherChunkingStrategy = {
  /** Always `other`. */
  type: "other";
};
export type VectorStoreFiles = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file`. */
  object: "vector_store.file";
  /** The total vector store usage in bytes. Note that this may be different from the original file size. */
  usage_bytes: number;
  /** The Unix timestamp (in seconds) for when the vector store file was created. */
  created_at: number;
  /** The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
  vector_store_id: string;
  /** The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use. */
  status: "in_progress" | "completed" | "cancelled" | "failed";
  /** The last error associated with this vector store file. Will be `null` if there are no errors. */
  last_error: {
    /** One of `server_error` or `rate_limit_exceeded`. */
    code: "server_error" | "unsupported_file" | "invalid_file";
    /** A human-readable description of the error. */
    message: string;
  } | null;
  /** The strategy used to chunk the file. */
  chunking_strategy?: StaticChunkingStrategy3 | OtherChunkingStrategy;
};
export type ListVectorStoreFilesResponse = {
  object: string;
  data: VectorStoreFiles[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};
export type CreateVectorStoreFileRequest = {
  /** A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_id: string;
  chunking_strategy?: ChunkingStrategyRequestParam;
};
export type DeleteVectorStoreFileResponse = {
  id: string;
  deleted: boolean;
  object: "vector_store.file.deleted";
};
export const {
  useListAssistantsQuery,
  useLazyListAssistantsQuery,
  useCreateAssistantMutation,
  useGetAssistantQuery,
  useLazyGetAssistantQuery,
  useModifyAssistantMutation,
  useDeleteAssistantMutation,
  useCreateSpeechMutation,
  useCreateTranscriptionMutation,
  useCreateTranslationMutation,
  useCreateBatchMutation,
  useListBatchesQuery,
  useLazyListBatchesQuery,
  useRetrieveBatchQuery,
  useLazyRetrieveBatchQuery,
  useCancelBatchMutation,
  useCreateChatCompletionMutation,
  useCreateCompletionMutation,
  useCreateEmbeddingMutation,
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
  useCancelFineTuningJobMutation,
  useListFineTuningJobCheckpointsQuery,
  useLazyListFineTuningJobCheckpointsQuery,
  useListFineTuningEventsQuery,
  useLazyListFineTuningEventsQuery,
  useCreateImageEditMutation,
  useCreateImageMutation,
  useCreateImageVariationMutation,
  useListModelsQuery,
  useLazyListModelsQuery,
  useRetrieveModelQuery,
  useLazyRetrieveModelQuery,
  useDeleteModelMutation,
  useCreateModerationMutation,
  useGetOrganizationAuditLogsQuery,
  useLazyGetOrganizationAuditLogsQuery,
  useGetOrganizationInvitesQuery,
  useLazyGetOrganizationInvitesQuery,
  useInviteUserMutation,
  useGetOrganizationInvitesByInviteIdQuery,
  useLazyGetOrganizationInvitesByInviteIdQuery,
  useDeleteOrganizationInvitesByInviteIdMutation,
  useGetOrganizationProjectsQuery,
  useLazyGetOrganizationProjectsQuery,
  usePostOrganizationProjectsMutation,
  useGetOrganizationProjectsByProjectIdQuery,
  useLazyGetOrganizationProjectsByProjectIdQuery,
  usePostOrganizationProjectsByProjectIdMutation,
  useGetOrganizationProjectsByProjectIdApiKeysQuery,
  useLazyGetOrganizationProjectsByProjectIdApiKeysQuery,
  useGetOrganizationProjectsByProjectIdApiKeysAndKeyIdQuery,
  useLazyGetOrganizationProjectsByProjectIdApiKeysAndKeyIdQuery,
  useDeleteOrganizationProjectsByProjectIdApiKeysAndKeyIdMutation,
  usePostOrganizationProjectsByProjectIdArchiveMutation,
  useGetOrganizationProjectsByProjectIdRateLimitsQuery,
  useLazyGetOrganizationProjectsByProjectIdRateLimitsQuery,
  usePostOrganizationProjectsByProjectIdRateLimitsAndRateLimitIdMutation,
  useGetOrganizationProjectsByProjectIdServiceAccountsQuery,
  useLazyGetOrganizationProjectsByProjectIdServiceAccountsQuery,
  usePostOrganizationProjectsByProjectIdServiceAccountsMutation,
  useGetOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdQuery,
  useLazyGetOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdQuery,
  useDeleteOrganizationProjectsByProjectIdServiceAccountsAndServiceAccountIdMutation,
  useGetOrganizationProjectsByProjectIdUsersQuery,
  useLazyGetOrganizationProjectsByProjectIdUsersQuery,
  usePostOrganizationProjectsByProjectIdUsersMutation,
  useGetOrganizationProjectsByProjectIdUsersAndUserIdQuery,
  useLazyGetOrganizationProjectsByProjectIdUsersAndUserIdQuery,
  usePostOrganizationProjectsByProjectIdUsersAndUserIdMutation,
  useDeleteOrganizationProjectsByProjectIdUsersAndUserIdMutation,
  useGetOrganizationUsersQuery,
  useLazyGetOrganizationUsersQuery,
  useGetOrganizationUsersByUserIdQuery,
  useLazyGetOrganizationUsersByUserIdQuery,
  usePostOrganizationUsersByUserIdMutation,
  useDeleteOrganizationUsersByUserIdMutation,
  useCreateThreadMutation,
  useCreateThreadAndRunMutation,
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
  useDeleteMessageMutation,
  useListRunsQuery,
  useLazyListRunsQuery,
  useCreateRunMutation,
  useGetRunQuery,
  useLazyGetRunQuery,
  useModifyRunMutation,
  useCancelRunMutation,
  useListRunStepsQuery,
  useLazyListRunStepsQuery,
  useGetRunStepQuery,
  useLazyGetRunStepQuery,
  useSubmitToolOuputsToRunMutation,
  useCreateUploadMutation,
  useCancelUploadMutation,
  useCompleteUploadMutation,
  useAddUploadPartMutation,
  useListVectorStoresQuery,
  useLazyListVectorStoresQuery,
  useCreateVectorStoreMutation,
  useGetVectorStoreQuery,
  useLazyGetVectorStoreQuery,
  useModifyVectorStoreMutation,
  useDeleteVectorStoreMutation,
  useCreateVectorStoreFileBatchMutation,
  useGetVectorStoreFileBatchQuery,
  useLazyGetVectorStoreFileBatchQuery,
  useCancelVectorStoreFileBatchMutation,
  useListFilesInVectorStoreBatchQuery,
  useLazyListFilesInVectorStoreBatchQuery,
  useListVectorStoreFilesQuery,
  useLazyListVectorStoreFilesQuery,
  useCreateVectorStoreFileMutation,
  useGetVectorStoreFileQuery,
  useLazyGetVectorStoreFileQuery,
  useDeleteVectorStoreFileMutation,
} = injectedRtkApi;
