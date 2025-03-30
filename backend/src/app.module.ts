import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ProposalModule } from "./proposal/proposal.module";
import { VoteModule } from "./vote/vote.module";
import { MetricsModule } from "./metrics/metrics.module";
import { CacheModule } from "@nestjs/cache-manager";
import * as redisStore from "cache-manager-ioredis";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: "redis",
      port: 6379,
    }),
    AuthModule,
    ProposalModule,
    VoteModule,
    MetricsModule,
  ],
})
export class AppModule {}
