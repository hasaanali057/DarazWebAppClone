import { 
  Body,
  Controller, 
  Post,
  Request
} from '@nestjs/common';
import { AddUserAddressDto } from './dto/address.dto';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService){

  }

  @Post('postAddress')
  async postUserAdress(@Body() dto: AddUserAddressDto, @Request() req){
    await this.addressService.saveAddress(dto, req.user.sub);
  }
}
