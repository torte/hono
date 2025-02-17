import { HonoBase } from '../hono-base.ts'
import { LinearRouter } from '../router/linear-router/index.ts'
import { SmartRouter } from '../router/smart-router/index.ts'
import { TrieRouter } from '../router/trie-router/index.ts'
import type { Env } from '../types.ts'

export class Hono<E extends Env = Env, S = {}, BasePath extends string = '/'> extends HonoBase<
  E,
  S,
  BasePath
> {
  constructor(init: Partial<Pick<Hono, 'getPath'> & { strict: boolean }> = {}) {
    super(init)
    this.router = new SmartRouter({
      routers: [new LinearRouter(), new TrieRouter()],
    })
  }
}
