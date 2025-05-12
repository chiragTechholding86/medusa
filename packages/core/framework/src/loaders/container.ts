import { asValue } from "awilix"
import { ContainerRegistrationKeys } from "@medusajs/utils"
import { TenantConnectionManager } from "../tenant/tenant-connection-manager"

export default async ({ 
  container,
}) => {
  container.register(
    ContainerRegistrationKeys.TENANT_CONNECTION_MANAGER,
    asValue(TenantConnectionManager.getInstance())
  )
} 