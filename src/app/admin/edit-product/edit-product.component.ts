import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  model: Product = new Product("", "", 0, new Blob(), false, 0);

  constructor(private productsService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var temp = this.productsService.getById(params['id']);
      this.model = new Product(temp.name, temp.description, temp.price, temp.image, temp.isPopular, temp.category);
    })
  }


  onSubmit(){
    this.productsService.edit(this.model);
  }
}
