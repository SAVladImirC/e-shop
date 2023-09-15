import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { ProductInCart } from '../models/product-in-cart';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: User;
  cart: Cart;

  productsInCart: ProductInCart[] = [];

  constructor() { 
    this.user = new User("", "", "", "", "");
    this.cart = new Cart(this.user);
  }

  addToCart(product: Product){
    this.productsInCart.push(new ProductInCart(product, this.cart, 1));
  }
}