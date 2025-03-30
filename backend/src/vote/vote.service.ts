import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  async getCount() {
    return this.prisma.vote.count();
  }

  async increment() {
    return this.prisma.vote.create({ data: {} });
  }
}
