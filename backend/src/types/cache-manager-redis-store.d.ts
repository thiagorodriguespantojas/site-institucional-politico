declare module "cache-manager-redis-store" {
  import { Store } from "cache-manager";

  interface RedisStoreOptions {
    host?: string;
    port?: number;
    ttl?: number;
    db?: number;
    password?: string;
  }

  const redisStore: (options?: RedisStoreOptions) => Store;

  export = redisStore;
}
