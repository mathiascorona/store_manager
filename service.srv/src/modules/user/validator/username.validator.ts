import { Injectable, NotFoundException } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class UsernameValidator implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  async validate(value: string): Promise<boolean> {
    try {
      const userFounded = await this.userService.findUserByUsername(value);
      return !userFounded;
    } catch (err) {
      if (err instanceof NotFoundException) {
        return true;
      }

      throw err;
    }
  }
}

export const UsernameValidate = (validationOptions: ValidationOptions) => {
  return (obj: object, prop: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: prop,
      options: validationOptions,
      constraints: [],
      validator: UsernameValidator,
    });
  };
};
