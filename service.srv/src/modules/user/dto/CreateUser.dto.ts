import { IsNotEmpty, MinLength } from 'class-validator';
import { UsernameValidate } from '../validator/username.validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @UsernameValidate({ message: 'Username already exist' })
  username: string;

  @MinLength(8)
  password: string;
}
