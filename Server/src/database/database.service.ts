import { Sequelize } from 'sequelize-typescript';
import { Customer } from 'src/auth/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '2212528',
        database: 'daraz_web_app',
      });
      sequelize.addModels([Customer]);
      await sequelize.sync({
        alter: true
      });
      return sequelize;
    },
  },
];