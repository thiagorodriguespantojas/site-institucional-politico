import { Controller, Get, Post } from '@nestjs/common';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get()
  getVotes() {
    return this.voteService.getCount();
  }

  @Post()
  addVote() {
    return this.voteService.increment();
  }
}
