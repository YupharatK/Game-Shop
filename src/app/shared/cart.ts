// src/app/shared/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // ใช้ BehaviorSubject เพื่อเก็บสถานะของตะกร้าและแจ้งเตือนเมื่อมีการเปลี่ยนแปลง
  private itemsSubject = new BehaviorSubject<any[]>([]);
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);

  // สร้าง Observable ให้ Component อื่นๆ สามารถติดตาม (subscribe) สถานะได้
  items$ = this.itemsSubject.asObservable();
  isCartOpen$ = this.isCartOpenSubject.asObservable();

  constructor() { }

  // เมธอดสำหรับเพิ่มเกมลงในตะกร้า
  addItem(item: any) {
    const currentItems = this.itemsSubject.getValue();
    this.itemsSubject.next([...currentItems, item]);
    // เมื่อเพิ่มของ ให้เปิดตะกร้าโดยอัตโนมัติ
    this.openCart();
  }

  // เมธอดสำหรับลบเกมออกจากตะกร้า
  removeItem(itemToRemove: any) {
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item !== itemToRemove);
    this.itemsSubject.next(updatedItems);
  }

  // เมธอดสำหรับเปิด/ปิดตะกร้า
  toggleCart() {
    this.isCartOpenSubject.next(!this.isCartOpenSubject.getValue());
  }

  openCart() {
    this.isCartOpenSubject.next(true);
  }

  closeCart() {
    this.isCartOpenSubject.next(false);
  }

  // เมธอดสำหรับคำนวณราคารวม (เราจะใช้ในอนาคต)
  getSubtotal() {
    // This logic needs to be implemented based on your item structure
    return this.itemsSubject.getValue().reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, '')), 0);
  }
}