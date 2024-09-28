import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: IProduct[] = [];

  constructor(private cartSrv: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartSrv.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  clearCart(): void {
    this.cartSrv.clearCart();
    this.cartItems = [];
  }

  checkout(): void {
    this.cartSrv.clearCart();
    this.cartItems = [];
    alert('Thank you for shopping at Tech Core!');
  }
}
