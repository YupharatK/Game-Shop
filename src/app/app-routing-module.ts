// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// ** ไม่ต้อง import HomepageComponent, Shop, MyGames ฯลฯ ที่นี่อีกต่อไป **

const routes: Routes = [
  // --- Auth Routes (สำหรับ Login/Register) ---
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },

  // --- Admin Routes (ตัวอย่าง) ---
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule),
  },
  
  // --- User Routes (นี่คือส่วนที่ UserModule จะมารับผิดชอบทั้งหมด) ---
  {
    path: '', // ให้ UserModule จัดการทุก path ที่ไม่มี prefix อื่นๆ (เช่น homepage, shop)
    loadChildren: () => import('./user/user-module').then(m => m.UserModule)
  }
  
  // ** ลบ path 'homepage', 'shop', 'my-games', 'profile' ออกจากไฟล์นี้ให้หมด **
  // ** ลบ Redirects (** และ path: '') ออกไปก่อน เพื่อให้ UserModule จัดการ **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }