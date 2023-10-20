
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'models/user/User.model';
import { User_Search } from 'models/user/UserSearch.model';

@Module({
  imports: [AuthModule, SequelizeModule.forFeature([User, User_Search])],
  providers: [ UserService],
  controllers: [UserController],
  exports:[SequelizeModule]
})

export class UserModule{}