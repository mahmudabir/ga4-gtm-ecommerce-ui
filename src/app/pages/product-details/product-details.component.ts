import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../data';
import { CartService } from '../../services/cart.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  imports: [
    NgOptimizedImage
  ]
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find(p => p.id === id);
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    alert(`${this.product.name} has been added to the cart.`);
  }
}
