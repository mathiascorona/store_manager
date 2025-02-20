import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDTO } from './dto/login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  login(@Body() { username, password }: LoginDTO) {
    return this.loginService.login(username, password);
  }
}
