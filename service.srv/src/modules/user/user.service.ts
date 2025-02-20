import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }

  async createUser(user: CreateUserDTO) {
    const createdUser = await this.prisma.user.create({ data: user });
    return createdUser;
  }

  async findUserByUsername(username: string) {
    const userFounded = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (userFounded === null) {
      throw new NotFoundException(`User with username: ${username} not found.`);
    }

    return userFounded;
  }
}
