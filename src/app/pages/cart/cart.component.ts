import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    NgOptimizedImage
  ]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    alert('Cart has been cleared.');
  }

  checkout(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    alert('Checkout complete.');
  }
}
