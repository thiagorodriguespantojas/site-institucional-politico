declare module 'cache-manager-redis-store' {
  import { Store } from 'cache-manager';

  interface RedisStoreOptions {
    host?: string;
    port?: number;
    ttl?: number;
    db?: number;
    password?: string;
  }

  const redisStore: (options?: RedisStoreOptions) => Store;

  export default redisStore;
}
declare module 'cache-manager' {
  interface CacheManagerOptions {
    store?: string | ((options: any) => Store);
    isGlobal?: boolean;
    ttl?: number;
  }

  interface CacheManager {
    get<T>(key: string): Promise<T | undefined>;
    set(key: string, value: any, options?: CacheManagerOptions): Promise<void>;
    del(key: string): Promise<void>;
  }
}
declare module '@nestjs/common' {
  import { CacheManager } from 'cache-manager';

  interface CacheModuleOptions {
    store?: string | ((options: any) => CacheManager);
    isGlobal?: boolean;
    ttl?: number;
  }

  export function CacheModule(options: CacheModuleOptions): ClassDecorator;
}
declare module '@nestjs/core' {
  interface NestApplicationOptions {
    cache?: CacheManager;
  }
  interface NestApplication {
    getCacheManager(): CacheManager;
    enableShutdownHooks(): void;
    close(): Promise<void>;
  }
  interface NestModule {
    configure(nestApplication: NestApplication): void;
  }
  interface NestMiddleware {
    use(req: any, res: any, next: () => void): void;
  }
  interface NestInterceptor {
    intercept(context: any, next: () => Promise<any>): Promise<any>;
  }
  interface NestGuard {
    canActivate(context: any): Promise<boolean> | boolean;
  }
  interface NestPipe {
    transform(value: any, metadata: any): any;
  }
  interface NestExceptionFilter {
    catch(exception: any, host: any): void;
  }
  interface NestModuleMetadata {
    imports?: any[];