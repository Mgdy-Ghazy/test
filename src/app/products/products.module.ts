import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDsdetailsComponent } from './components/product-dsdetails/product-dsdetails.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDsdetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
