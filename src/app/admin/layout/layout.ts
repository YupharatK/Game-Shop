// src/app/admin/layout/layout.component.ts
import { Component } from '@angular/core';
// Import ไอคอนที่ต้องการใช้จาก library
import { faTachometerAlt, faGamepad, faUsers, faCreditCard, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class LayoutComponent { // หรือ class Layout ตามที่คุณใช้
  // สร้างตัวแปรเพื่อเก็บไอคอนแต่ละตัว
  faDashboard = faTachometerAlt;
  faGames = faGamepad;
  faUsers = faUsers;
  faTransaction = faCreditCard;
  faDiscounts = faTag;
}