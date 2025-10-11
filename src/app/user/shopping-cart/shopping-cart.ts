// src/app/user/shopping-cart/shopping-cart.component.ts
import { Component } from '@angular/core';
import { CartService } from '../../shared/cart';
import { OrderService } from '../../services/order'; // 1. Import OrderService
import { Router } from '@angular/router';                   // 2. Import Router
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrls: ['./shopping-cart.scss']
})
export class ShoppingCartComponent {
  items$: Observable<any[]>;

  // 3. Inject OrderService และ Router เข้ามาใน constructor
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.items$ = this.cartService.items$;
  }

  get subtotal(): number {
    return this.cartService.getSubtotal();
  }

  // สมมติว่ามีส่วนลด (ส่วนนี้ยังเป็นข้อมูลจำลอง)
  get discount(): number {
    return 0; // ควรเริ่มที่ 0 ก่อน
  }

  get total(): number {
    return this.subtotal - this.discount;
  }

  removeItem(item: any): void {
    this.cartService.removeItem(item);
  }

  // 4. เพิ่มเมธอดสำหรับปุ่ม "Proceed to Checkout"
  proceedToCheckout(): void {
    // ดึงรายการสินค้าปัจจุบันจาก CartService
    const items = this.cartService.getCurrentItems();

    // ป้องกันการ checkout ตะกร้าเปล่า
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // เรียกใช้ OrderService เพื่อยิง API
    this.orderService.checkout(items).subscribe({
      next: (response) => {
        console.log('Checkout successful!', response);
        alert('Purchase successful!');
        
        // ล้างตะกร้าเมื่อซื้อสำเร็จ
        this.cartService.clearCart();
        
        // นำทางผู้ใช้ไปยังหน้า "My Games"
        this.router.navigate(['/my-games']);
      },
      error: (err) => {
        console.error('Checkout failed:', err);
        // แสดงข้อความ Error ที่ได้จาก Backend ให้ผู้ใช้เห็น
        alert(err.error.message || 'An error occurred during checkout. Please try again.');
      }
    });
  }
}