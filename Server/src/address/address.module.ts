import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from 'models/address/Address.model';
import { User_Address } from 'models/address/UserAddress.model';

@Module({
  imports: [SequelizeModule.forFeature([Address, User_Address])],
  controllers: [AddressController],
  providers: [AddressService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }
  ]
})
export class AddressModule {}
