import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async fixProblems(): Promise<number> {
    const count = await this.userModel.count({ where: { hasProblems: true } });
    await this.userModel.update({ hasProblems: false }, { where: {} });
    return count;
  }
}
