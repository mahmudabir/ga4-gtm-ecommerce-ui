import {Injectable} from '@angular/core';
import {DataLayerService} from './data-layer.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor(private dataLayerService: DataLayerService) {}

  addToCart(product: any): void {
    this.cart.push(product);

    this.dataLayerService.push({
      event: "product_added_to_cart",
      page_url: `/products`,
      product_page_url: `/products/${product.id}`,
      product_id: `${product.id}`,
      product_name: product.name,
      product_price: product.price,
      product: product,
    });
  }

  getCart(): any[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
