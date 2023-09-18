import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    EditProductComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
