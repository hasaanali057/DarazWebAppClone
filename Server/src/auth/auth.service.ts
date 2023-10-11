import { Inject, Injectable } from '@nestjs/common';
import { Customer } from './user.entity';

@Injectable()
export class AuthService{
  
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: typeof Customer
  ) {}

  async getUser(): Promise<Customer[]>{
    return this.customerRepository.findAll<Customer>();
  }

  addUser(): string{
    return 'New User Added.';
  }
}