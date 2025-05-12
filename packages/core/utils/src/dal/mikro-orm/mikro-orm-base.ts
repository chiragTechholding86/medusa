import { Context } from "@medusajs/types"

export class MikroOrmBase {
  readonly manager_: any

  protected constructor({ manager }) {
    this.manager_ = manager
  }

  protected getContext(context?: Context): Context {
    return {
      ...context,
      manager: context?.manager ?? this.manager_,
    }
  }

  getFreshManager<TManager = unknown>(): TManager {
    return (this.manager_.fork
      ? this.manager_.fork()
      : this.manager_) as unknown as TManager
  }

  getActiveManager<TManager = unknown>(context: Context = {}): TManager {
    const ctx = this.getContext(context)
    const activeManager = (ctx.transactionManager ?? ctx.manager ?? this.getFreshManager()) as TManager
    return activeManager
  }
} 