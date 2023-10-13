import { Inject, Injectable } from '@nestjs/common';
import { Customer } from './user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService{
  
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: typeof Customer,
    private jwtService: JwtService
  ) {}

  async getUser(emailPhone:string  , password: string) {
    const user =await this.customerRepository.findOne({
      where: {
        email: emailPhone
      }
    });
    if(user){
      if(user.password === password){
        const payload = { id: user.id, name: user.name };
        return { 
          token: await this.jwtService.signAsync(payload) 
        }
      }
      throw new Error('Invalid Password');
    }else{
      throw new Error('Invalid Cradentials');
    }
  }

  addUser(): string{
    return 'New User Added.';
  }
}