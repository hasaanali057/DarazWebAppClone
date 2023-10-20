import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Shopping_Cart } from "models/shopping Cart/Cart.model";
import { Shopping_Cart_Item } from "models/shopping Cart/CartItem.model";
import { ProductService } from "src/product/product.service";

@Injectable()
export class ShoppingCartService{

  constructor(
    @InjectModel(Shopping_Cart_Item) 
    private shoppingCartItem: typeof Shopping_Cart_Item,
    @InjectModel(Shopping_Cart)
    private shoppingCart: typeof Shopping_Cart,

    private productService: ProductService
  ){}
  
  async createCart(id: number){
    const cart = await this.shoppingCart.create({
      userID: id
    });
    if(cart)
      return cart.id;
    throw new HttpException('Cart Not Created', HttpStatus.INTERNAL_SERVER_ERROR);
  }
  
  async addcartItem(qty: number, cartId: number, productItemId: number){
    try {
      const productitemid = await this.productService.getProductItemById(productItemId, qty);
      await this.shoppingCartItem.create({
        quantity: qty,
        shopping_cart_iD: cartId,
        product_item_Id: productitemid
      });
      return { msg: 'Item Added To Cart', status:HttpStatus.CREATED };
    } catch (error) {
      throw new HttpException('Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}