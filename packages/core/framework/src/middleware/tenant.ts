import { NextFunction, Request, Response } from "express"
import { TENANT_CONTEXT_KEY } from "../types/tenant"

export function tenantMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    const tenantId = req.get("x-tenant-id")
    if (tenantId) {
      req[TENANT_CONTEXT_KEY] = { tenantId }
    }
    next()
  }
} 