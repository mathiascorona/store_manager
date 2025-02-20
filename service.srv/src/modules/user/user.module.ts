import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UsernameValidator } from './validator/username.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UsernameValidator],
  exports: [UserService],
})
export class UserModule {}
