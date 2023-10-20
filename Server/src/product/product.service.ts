import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'models/product/Product.model';
import { AddProductDto } from './dto/product.dto';
import { Catagory } from 'models/product/Catagory.model';
import { HTTP_CODE_METADATA } from '@nestjs/common/constants';
import { AddCatagoryDto } from './dto/catagory.dto';
import { Product_Item } from 'models/product/ProductItem.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,

    @InjectModel(Product_Item)
    private productItemModel: typeof Product_Item,

    @InjectModel(Catagory)
    private catagoryModel: typeof Catagory
  ){}

  async addProduct(dto: AddProductDto){
    try {
      const catagoryID = await this.getproductCatagory(dto.CatagoryName);
      console.log(typeof(catagoryID));
      await this.productModel.create({
        productName: dto.productName,
        productDescription: dto.productDescription,
        productImage: dto.productImage,
        catagoryID: catagoryID
      });
      return {msg: 'Product Added.', status: HttpStatus.CREATED}; 
    } catch (error) {
      throw new HttpException('Could not add Product. Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async addCatagory(dto: AddCatagoryDto){
    try {
      return await this.catagoryModel.create({
        CatagoryName: dto.catagoryName
      });
    } catch (error) {
      throw new HttpException('Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getproductCatagory(name:string){
    try {
      const cat = await this.catagoryModel.findOne({
        where:{
          CatagoryName: name
        }
      });
      return cat? cat.id : null;
    } catch (error) {
      throw new HttpException('Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllCatagories(){
    try {
      return await this.catagoryModel.findAll()
    } catch (error) {
      throw new HttpException('Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllProducts(page: number, pageSize: number){
    try {
      const offSet = (page-1) * pageSize;
      const products = await this.productModel.findAll({
        limit: pageSize,
        offset: offSet
      });
      return products;
    } catch (error) {
      throw new HttpException('Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getProductItemById(id:number, qty: number){
    const productItem = await this.productItemModel.findOne({
     where: {
      id: id
     }
    });
    if(productItem){
      if(productItem.Quantity> qty){  
        return productItem;
      }
      return {msg: 'Required Quantity Not Available', status: 400}
    }
    else{
      return {msg: 'Item Not Available', status: 404}
    }
  }
}