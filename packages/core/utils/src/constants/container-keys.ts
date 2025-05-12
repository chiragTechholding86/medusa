type ContainerKeys = {
  readonly PG_CONNECTION: "__pg_connection__"
  readonly MANAGER: "manager"
  readonly CONFIG_MODULE: "configModule"
  readonly LOGGER: "logger"
  readonly REMOTE_QUERY: "remoteQuery"
  readonly QUERY: "query"
  readonly REMOTE_LINK: "remoteLink"
  readonly LINK: "link"
  readonly FEATURE_FLAG_ROUTER: "featureFlagRouter"
  readonly TENANT_CONNECTION_MANAGER: "__tenant_connection_manager__"
}

export const ContainerRegistrationKeys: ContainerKeys = {
  PG_CONNECTION: "__pg_connection__",
  MANAGER: "manager",
  CONFIG_MODULE: "configModule",
  LOGGER: "logger",
  REMOTE_QUERY: "remoteQuery",
  QUERY: "query",
  REMOTE_LINK: "remoteLink",
  LINK: "link",
  FEATURE_FLAG_ROUTER: "featureFlagRouter",
  TENANT_CONNECTION_MANAGER: "__tenant_connection_manager__",
}

export type ContainerRegistrationKeysType = typeof ContainerRegistrationKeys 