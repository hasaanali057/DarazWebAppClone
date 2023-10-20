import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from 'models/address/Address.model';
import { AddUserAddressDto } from './dto/address.dto';
import { User_Address } from 'models/address/UserAddress.model';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address) private address: typeof Address,
    @InjectModel(User_Address) private user_address: typeof User_Address
  ){}

  async saveAddress (dto: AddUserAddressDto, userId: number){
    try {
      const res = await this.findAddress(dto);
      if(res){
        const address = await this.address.create({
          houseNo: dto.houseNo,
          streetNo: dto.streetNo,
          address: dto.address,
          city: dto.city,
          postalCode: dto.postalCode
        });
        if(address){
          await this.saveUserAddress(address.id, userId, dto.isdefault);
        }
      }else{
        return { msg: 'Address Already Exists', status: HttpStatus.BAD_REQUEST }
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async saveUserAddress (addressId: number, userId: number, isDefault: boolean){
    try {
      await this.user_address.create({
        isDefault: isDefault,
        user_id: userId,
        address_id: addressId
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  async findAddress(dto: AddUserAddressDto){
    return await this.address.findOne({
      where:{
        houseNo: dto.houseNo,
        streetNo: dto.streetNo,
        address: dto.address,
        city: dto.city,
        postalCode: dto.postalCode
      }
    });
  }
}
