import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: IProduct[] = [];

  addToCart(product: IProduct): void {
    this.cartItems.push(product);
  }

  getCartItems(): IProduct[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
