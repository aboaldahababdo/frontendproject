import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  private url = 'https://dummyjson.com/products/category/';

 
  private getCategories(names: string[]) {
    const requests = names.map((n) => this.http.get<any>(this.url + n));
    return forkJoin(requests).pipe(map((results) => results.flatMap((r) => r.products)));
  }

  getMen() {
    return this.getCategories(['mens-shirts', 'mens-shoes']);
  }

  getWomen() {
    return this.getCategories(['womens-dresses', 'womens-shoes', 'womens-bags', 'tops']);
  }

  getAccessories() {
    return this.getCategories(['sunglasses', 'womens-jewellery', 'mens-watches', 'womens-watches']);
  }

  getAll() {
    return this.getCategories([
      'mens-shirts', 'mens-shoes',
      'womens-dresses', 'womens-shoes', 'womens-bags', 'tops',
      'sunglasses', 'womens-jewellery', 'mens-watches', 'womens-watches',
    ]);
  }
  addProduct(product: any) {
  return this.http.post<any>('https://dummyjson.com/products/add', product);
}
getProductById(id: number) {
  return this.http.get<any>(`https://dummyjson.com/products/${id}`);
}

}