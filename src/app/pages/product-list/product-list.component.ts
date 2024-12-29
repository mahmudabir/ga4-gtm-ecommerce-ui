import {Component} from '@angular/core';
import {PRODUCTS} from '../../data';
import {CartService} from '../../services/cart.service';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})
export class ProductListComponent {
  products = PRODUCTS;

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart.`);
  }
}
