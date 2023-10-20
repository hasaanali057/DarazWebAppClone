import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from 'models/product/Product.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Catagory } from 'models/product/Catagory.model';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ShoppingCartService } from 'src/shopping-cart/shopping-cart.service';
import { Shopping_Cart_Item } from 'models/shopping Cart/CartItem.model';
import { Shopping_Cart } from 'models/shopping Cart/Cart.model';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { APP_GUARD } from '@nestjs/core';
import { Product_Item } from 'models/product/ProductItem.model';

@Module({
  imports:[SequelizeModule.forFeature([ 
    Product, 
    Catagory, 
    Product_Item,
    Shopping_Cart_Item, 
    Shopping_Cart 
  ]),],
  providers: [ProductService, CloudinaryService, ShoppingCartService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }
  ],
  controllers: [ProductController]
})
export class ProductModule {}
