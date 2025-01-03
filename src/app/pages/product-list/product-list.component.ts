import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../data';
import { CartService } from '../../services/cart.service';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataLayerService } from '../../services/data-layer.service';
import { QueryParamService } from '../../services/query-param-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})
export class ProductListComponent implements OnInit {
  products = PRODUCTS;

  constructor(private cartService: CartService,
              private dataLayerService: DataLayerService,
              public queryParamService: QueryParamService) {

    this.dataLayerService.push({
      event: "product_list_page_view",
      page_url: "/products",
      products_count: `${this.products.length}`,
      visited_on: new Date().toLocaleDateString(),
      visited_at: new Date().toLocaleTimeString()
    });

  }

  ngOnInit(): void {

  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart.`);
  }
}
