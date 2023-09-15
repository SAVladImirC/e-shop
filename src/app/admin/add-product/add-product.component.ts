import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  model: Product = new Product("", "", 0, new Blob(), false, 0);

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productsService.products.push(this.model);
  }

}
