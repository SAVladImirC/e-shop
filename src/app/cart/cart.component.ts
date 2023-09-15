import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInCart } from '../core/models/product-in-cart';
import { SessionService } from '../core/services/session.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  getCartItems(): ProductInCart[] {
    return this.session.productsInCart.filter(i => i.cart.id == this.session.cart.id);
  }

  quantityUp(item: ProductInCart) {
    item.quantity = item.quantity + 1;
  }

  quantityDown(item: ProductInCart) {
    item.quantity = item.quantity - 1;
    if (item.quantity == 0) {
      this.session.productsInCart = this.session.productsInCart.filter(i => i.product.id != item.product.id)
    }
  }

  calculateTotal() {
    return this.session.productsInCart.map(i => i.product.price * i.quantity).reduce((acc, curr) => acc + curr, 0)
  }

  pay() {
    if (this.session.user.email == '')
      this.router.navigate(['auth/login']);
  }

}
