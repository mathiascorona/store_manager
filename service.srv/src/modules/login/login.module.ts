import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
      global: true,
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
