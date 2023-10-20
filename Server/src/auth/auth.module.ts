import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'models/user/User.model';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User_Search } from 'models/user/UserSearch.model';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './guards/jwt.guard';

@Module({
  imports:[
    SequelizeModule.forFeature([User, User_Search]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }]
})
export class AuthModule {}
