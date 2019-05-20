import { Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user-service.interface';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService implements IUserService {
  async findAll(): Promise<User[]> {
    return [];
  }
  async findOne(id: number): Promise<User> {
    return {
      id,
      name: '小明',
      age: 18,
    };
  }
  async create() {
    throw new Error('Method not implemented.');
  }
  async edit() {
    throw new Error('Method not implemented.');
  }
  async remove() {
    throw new Error('Method not implemented.');
  }
}
