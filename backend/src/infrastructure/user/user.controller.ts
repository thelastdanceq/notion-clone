import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../../application/user/user.service';
import { CreateUserDto } from '../../application/user/dto/create-user.dto';
import { User } from '../../domain/model/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
}
