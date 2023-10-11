
import { Customer } from './user.entity';

export const authProviders = [
  {
    provide: 'CUSTOMER_REPOSITORY',
    useValue: Customer,
  },
];