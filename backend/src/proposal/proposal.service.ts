import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ProposalService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.proposal.findMany();
  }

  create(data: { title: string; description: string }) {
    return this.prisma.proposal.create({ data });
  }

  delete(id: number) {
    return this.prisma.proposal.delete({ where: { id } });
  }
}
