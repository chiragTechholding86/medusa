import { tenantMiddleware } from "../middleware/tenant"
import { tenantContextMiddleware } from "../middleware/tenant-context"

export default ({ app, configModule }) => {
  app.use(tenantMiddleware())
  app.use(tenantContextMiddleware())
} 