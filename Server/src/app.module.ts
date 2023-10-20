import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { Product } from 'models/product/Product.model';
import { Catagory } from 'models/product/Catagory.model';
import { Shopping_Cart } from 'models/shopping Cart/Cart.model';
import { Shopping_Cart_Item } from 'models/shopping Cart/CartItem.model';
import { User } from 'models/user/User.model';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { User_Address } from 'models/address/UserAddress.model';
import { User_Review } from 'models/userReviews/UserReview.model';
import { Product_Item } from 'models/product/ProductItem.model';
import { Variation } from 'models/product/Variations.model';
import { Address } from 'models/address/Address.model';
import { Order_Line } from 'models/order/OrderLine.model';
import { Variation_Options } from 'models/product/VariationOptions.model';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { User_Search } from 'models/user/UserSearch.model';
import { ProductReviewsModule } from './product-reviews/product-reviews.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: 'daraz_web_app',
      models: [
        User,
        User_Search, 
        Product, 
        Shopping_Cart, 
        Shopping_Cart_Item, 
        Catagory, 
        User_Address,
        User_Review,
        Product_Item,
        Variation,
        Address,
        Order_Line,
        Variation_Options
      ],
      autoLoadModels: true,
      synchronize:true,
    }),
    ProductModule,
    CloudinaryModule,
    ProductReviewsModule,
    ShoppingCartModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
