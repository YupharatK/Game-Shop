// src/app/user/shopping-cart/shopping-cart.component.ts
import { Component } from '@angular/core';
import { CartService } from '../../shared/cart'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrls: ['./shopping-cart.scss']
})
export class ShoppingCartComponent {
  items$: Observable<any[]>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.items$;
  }

  get subtotal(): number {
    return this.cartService.getSubtotal();
  }

  // สมมติว่ามีส่วนลด
  get discount(): number {
    return 200;
  }

  get total(): number {
    return this.subtotal - this.discount;
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }
}