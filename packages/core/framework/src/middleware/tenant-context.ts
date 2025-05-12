import { NextFunction, Request, Response } from "express"
import { Context } from "@medusajs/types"

declare global {
  namespace Express {
    interface Request {
      context: Context
    }
  }
}

export function tenantContextMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Initialize context if it doesn't exist
    req.context = req.context || {}
    
    // Get tenant ID from header
    const tenantId = req.get("x-tenant-id")
    if (tenantId) {
      req.context.tenantId = tenantId
    }
    
    next()
  }
} 