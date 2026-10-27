
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-service';
import { CartService } from '../services/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private CartService:CartService
  ) {
    this.route.params.subscribe((params) => {
      const category = params['category'];

      if (category === 'men') {
        this.service.getMen().subscribe((data) => this.setProducts(data));
      } else if (category === 'women') {
        this.service.getWomen().subscribe((data) => this.setProducts(data));
      } else if (category === 'accessories') {
        this.service.getAccessories().subscribe((data) => this.setProducts(data));
      } else {
        this.service.getAll().subscribe((data) => this.setProducts(data));
      }
    });
  }

  setProducts(list: any[]) {
    this.products = list;
    this.cdr.detectChanges();
  }
 addToCart(product: any) {
  this.CartService.add(product);
}
}