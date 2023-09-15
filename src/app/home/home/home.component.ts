import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductCategory } from 'src/app/core/models/product.category';
import { ProductService } from 'src/app/core/services/product.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeProducts: Product[] = [];
  sportProducts: Product[] = [];
  cosmeticsProducts: Product[] = [];
  foodProducts: Product[] = [];

  constructor(private productService: ProductService, private session: SessionService) { }

  ngOnInit(): void {
    this.productService.getProducts().then(products => {
      this.homeProducts = products.filter(p => p.isPopular && p.category == ProductCategory.HOME);
      this.sportProducts = products.filter(p => p.isPopular && p.category == ProductCategory.SPORT);
      this.cosmeticsProducts = products.filter(p => p.isPopular && p.category == ProductCategory.COSMETICS);
      this.foodProducts = products.filter(p => p.isPopular && p.category == ProductCategory.FOOD);
    })
  }

  addToCart(product: Product){
    this.session.addToCart(product);
  }
}
