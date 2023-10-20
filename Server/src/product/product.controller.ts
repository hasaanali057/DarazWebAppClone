import { 
  Body, 
  Controller, 
  Get, 
  HttpException, 
  HttpStatus, 
  Post, 
  Query, 
  UploadedFile, 
  UseInterceptors,
  Request 
} from '@nestjs/common';
import { ProductService } from './product.service';
import { AddProductDto } from './dto/product.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AddCatagoryDto } from './dto/catagory.dto';
import { Public } from 'src/decorators/public.decorator';
import { ShoppingCartItemDto } from 'src/shopping-cart/dto/shoppingCartItem.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ShoppingCartService } from 'src/shopping-cart/shopping-cart.service';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    private cloudinaryService: CloudinaryService,
    private shoppingcartservice: ShoppingCartService  
  ){}

  
  @Post('addProduct')
  @UseInterceptors(FileInterceptor('file'))
  async addProduct(@UploadedFile() file: any, @Body() dto: AddProductDto){
    try {
      if(!file){
        throw new HttpException('No File Found', HttpStatus.BAD_REQUEST)
      }
      const secureUrl = await this.cloudinaryService.uploadFile(file);
      dto.productImage = secureUrl.secure_url;
      // const image = await this.cloudinaryService.uploadFile()
      return await this.productService.addProduct(dto);
    } catch (error) {
      throw new HttpException('Error: ' + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Public()
  @Get('allproducts')
  async getproducts(@Query('page') page: number, @Query('pageSize') pageSize: number){

    const products = await this.productService.getAllProducts(page, pageSize);

    if(products[0] !== null) return products;

    throw new HttpException('No products Available', HttpStatus.NOT_FOUND);
  }

  @Public()
  @Get('getCatagories')
  async getCatagories(){
    try {
      const catagories = await this.productService.getAllCatagories();
      if(catagories) return catagories;
      throw new HttpException('Catagories Not Found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException('Server Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('addCatagory')
  async addCatagories(@Body() dto: AddCatagoryDto){
    try {
      const catagories = await this.productService.addCatagory(dto);
      if(catagories) return {
        msg: 'Catagory Added',
        status: 201
      }
    } catch (error) {
      throw new HttpException('Server Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);

    }
  }

  @Post('addToCart')
  async addItemToCart (@Body() dto: ShoppingCartItemDto, @Request() req){
    try {
      const cartid = await this.shoppingcartservice.createCart(req.user.sub);
      
      await this.shoppingcartservice.addcartItem(dto.quantity, cartid, dto.product_item_Id);
    } catch (error) {
      
    }
  }
}
