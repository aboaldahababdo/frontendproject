
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  styleUrl: './add-product-component.css',
  templateUrl: './add-product-component.html',
})

export class AddProduct {
  product = {
    title: '',
    description: '',
    price: null,
    category: '',
    thumbnail: ''
  };

  message = '';

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.addProduct(this.product).subscribe({
      next: (res) => {
        console.log('Added:', res);
        this.message = 'Product added successfully';
        this.product = { title: '', description: '', price: null, category: '', thumbnail: '' };
      },
      error: () => {
        this.message = 'erorr ,try again';
      }
    });
  }
}
