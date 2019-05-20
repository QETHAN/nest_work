import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users.service';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User> {
    let id = parseInt(params.id);

    if (isNaN(id) || typeof id !== 'number' || id <= 0) {
      // throw new HttpException('用户编号错误', HttpStatus.BAD_REQUEST);
      throw new ApiException(
        '用户ID无效',
        ApiErrorCode.USER_ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.usersService.findOne(params.id);
  }

  @Post()
  async create() {
    return await this.usersService.create();
  }

  @Put()
  async edit() {
    return await this.usersService.edit();
  }

  @Delete()
  async remove() {
    return await this.usersService.remove();
  }
}
