import { HttpClient } from '@angular/common/http';
import { Injectable, createEnvironmentInjector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllPrpducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getAllCategories () {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getPrpductsByCategory(Keyword:string) {
    return this.http.get('https://fakestoreapi.com/products/category/'+Keyword)
  }
}