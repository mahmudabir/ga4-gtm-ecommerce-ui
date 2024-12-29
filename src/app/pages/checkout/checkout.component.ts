import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [
    FormsModule
  ],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  checkoutData = {
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  };

  constructor(private router: Router, private cartService: CartService) {
  }

  onSubmit(): void {
    alert(`Thank you for your order, ${this.checkoutData.name}!`);
    // Navigate to home or products page after confirmation
    this.router.navigate(['/']).then(x=> this.checkout());
  }

  checkout(): void {
    this.cartService.clearCart();
    alert('Checkout complete.');
  }
}
