// src/@types/cache-manager-redis-store.d.ts

declare module "cache-manager-redis-store" {
  import { Store } from "cache-manager";

  interface RedisStoreOptions {
    host?: string;
    port?: number;
    ttl?: number;
    db?: number;
    password?: string;
  }

  function redisStore(options?: RedisStoreOptions): Store;

  export = redisStore;
}
