import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  items: any[] = [];

  add(product: any) {
    const item = this.items.find((i) => i.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  increase(item: any) {
    item.quantity++;
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.remove(item);
    }
  }

  remove(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  get totalCount() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  get totalPrice() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}