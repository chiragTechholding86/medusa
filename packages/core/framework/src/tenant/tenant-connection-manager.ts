import { Knex } from "@mikro-orm/knex"
import { TenantConfiguration } from "../types/tenant"
import { pgConnectionLoader } from "../database"

export class TenantConnectionManager {
  private static instance: TenantConnectionManager
  private tenantConnections: Map<string, Knex> = new Map()
  private tenantConfigs: Map<string, TenantConfiguration> = new Map()

  private constructor() {}

  public static getInstance(): TenantConnectionManager {
    if (!TenantConnectionManager.instance) {
      TenantConnectionManager.instance = new TenantConnectionManager()
    }
    return TenantConnectionManager.instance
  }

  public async registerTenant(config: TenantConfiguration): Promise<void> {
    if (this.tenantConfigs.has(config.id)) {
      throw new Error(`Tenant ${config.id} is already registered`)
    }

    this.tenantConfigs.set(config.id, config)
  }

  public getConnection(tenantId: string): Knex {
    if (this.tenantConnections.has(tenantId)) {
      return this.tenantConnections.get(tenantId)!
    }

    const config = this.tenantConfigs.get(tenantId)
    if (!config) {
      throw new Error(`Tenant ${tenantId} is not registered`)
    }

    const connection = pgConnectionLoader()
    connection.client.config.connection = {
      connectionString: config.database.clientUrl,
    }

    this.tenantConnections.set(tenantId, connection)
    return connection
  }

  public async closeConnection(tenantId: string): Promise<void> {
    const connection = this.tenantConnections.get(tenantId)
    if (connection) {
      await connection.destroy()
      this.tenantConnections.delete(tenantId)
    }
  }

  public async closeAllConnections(): Promise<void> {
    for (const [tenantId] of this.tenantConnections) {
      await this.closeConnection(tenantId)
    }
  }

  public getTenantConfig(tenantId: string): TenantConfiguration | undefined {
    return this.tenantConfigs.get(tenantId)
  }
} 