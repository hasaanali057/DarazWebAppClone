import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shopping-cart.controller';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { APP_GUARD } from '@nestjs/core';
import { ShoppingCartService } from './shopping-cart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shopping_Cart_Item } from 'models/shopping Cart/CartItem.model';
import { Shopping_Cart } from 'models/shopping Cart/Cart.model';
import { ProductService } from 'src/product/product.service';
import { Product } from 'models/product/Product.model';
import { Product_Item } from 'models/product/ProductItem.model';
import { Catagory } from 'models/product/Catagory.model';

@Module({
  imports: [SequelizeModule.forFeature([
    Shopping_Cart_Item, 
    Shopping_Cart, 
    Product, 
    Product_Item, 
    Catagory
  ])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService, ProductService, 
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }
  ]
})
export class ShoppingCartModule {}
