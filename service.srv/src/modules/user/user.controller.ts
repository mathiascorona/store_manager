import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { HashPasswordPipe } from 'src/core/pipes/hash-password.pipe';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Post()
  async createUser(
    @Body() { ...user }: CreateUserDTO,
    @Body('password', HashPasswordPipe) hashedPass: string,
  ) {
    const createdUser = await this.userService.createUser({
      ...user,
      password: hashedPass,
    });

    return createdUser;
  }
}
