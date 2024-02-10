import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  products:any[] = [];
  Categories:any[] = [];
  constructor(private service:ProductsService) {}

  ngOnInit(): void {
    this.getproducts()
    this.getCategorie()
  }

  getproducts() {
    this.service.getAllPrpducts().subscribe((res:any) => {
      this.products = res
    } , error => {
     alert(error)
    })
  }

  getCategorie() {
    this.service.getAllCategories().subscribe((res:any) => {
      console.log(res)
      this.Categories = res
    } , error => {
      alert(error)
    })
  }

  filterCategory(event:any) {
    let value = event.target.value;
    if (value == "all") {
      this.getproducts()
    } else {
      this.getproductsCategory(value)
    }
  }

  getproductsCategory(Keyword:string) {
    this.service. getPrpductsByCategory(Keyword).subscribe((res:any) => {
      this.products = res
    })
  }
}