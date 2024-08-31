import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Post('fix-problems')
  async fixProblems() {
    const count = await this.userService.fixProblems();
    return { message: `Updated problems flag to false for all users. Number of users with problems: ${count}` };
  }
}
