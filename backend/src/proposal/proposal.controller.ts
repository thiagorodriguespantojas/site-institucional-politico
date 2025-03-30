import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { ProposalService } from "./proposal.service";

@Controller("proposals")
export class ProposalController {
  constructor(private readonly proposalService: ProposalService) {}

  @Get()
  findAll() {
    return this.proposalService.findAll();
  }

  @Post()
  create(@Body() body: { title: string; description: string }) {
    return this.proposalService.create(body);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.proposalService.delete(Number(id));
  }
}
