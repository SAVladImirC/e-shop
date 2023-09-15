import { Cart } from "./cart";
import { Product } from "./product";

export class ProductInCart{
    product: Product;
    cart: Cart;
    quantity: number;

	constructor($product: Product, $cart: Cart, $quantity: number) {
		this.product = $product;
		this.cart = $cart;
		this.quantity = $quantity;
	}
}