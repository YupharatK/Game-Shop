// src/app/user/profile/profile.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth'; // <-- ตรวจสอบ Path ให้ถูกต้อง
import { User } from '../../models/user.model';     // <-- ตรวจสอบ Path ให้ถูกต้อง
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../core/services/modal';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  // 1. สร้างตัวแปรเปล่าๆ เพื่อรอรับข้อมูลจริง
  user: User | null = null;
  faPencilAlt = faPencilAlt;


  private userSubscription: Subscription | undefined;

  // ข้อมูล Transaction สามารถเก็บไว้เป็นข้อมูลจำลองก่อนได้
  transactionHistory = [
     { date: '2025-09-21', type: 'Purchase', description: 'Game: \'Cosmic Conquest\'', amount: -350 },
     { date: '2025-09-22', type: 'Top-up', description: 'Added funds to wallet', amount: 500 },
  ];

  // 2. ฉีด AuthService เข้ามาเพื่อใช้งาน
  constructor(
    private authService: AuthService,
    private modalService: ModalService // 2. Inject ModalService
  ) {}

  ngOnInit(): void {
    // 3. ดึงข้อมูลผู้ใช้ล่าสุดจาก AuthService มาใส่ในตัวแปร user ของเรา
    this.userSubscription = this.authService.currentUser$.subscribe(currentUser => {
      this.user = currentUser;
      console.log('Current user received in ProfileComponent:', this.user);
    });
  }

  editProfile(): void {
    console.log('Edit profile button clicked!');
    this.modalService.open('editProfileModal');
  }

  // 4. เพิ่มฟังก์ชัน logout เข้ามา
  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    // 5. Unsubscribe เพื่อคืน Memory ให้กับระบบ
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}