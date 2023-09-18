import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'category', 'actions'];
  dataSource: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().then(result => {
      this.dataSource = result;
    });
  }

  delete(product: Product) {
    this.productService.delete(product.id);
    this.getProducts();
  }

  edit(product: Product) {
    this.router.navigate(['admin/edit-product/' + product.id]);
  }

}