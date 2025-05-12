import { ModuleServiceInitializeOptions } from "@medusajs/types"

export interface TenantConfiguration {
  id: string
  database: ModuleServiceInitializeOptions["database"]
}

export interface TenantContext {
  tenantId: string
}

export const TENANT_CONTEXT_KEY = "tenant" 