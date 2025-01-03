import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QueryParamService } from '../../services/query-param-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, public queryParamService: QueryParamService) {

  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    alert('Cart has been cleared.');
  }
}
