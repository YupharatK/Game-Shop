// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- 1. Import RouterModule เพิ่ม
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CartComponent } from './cart/cart';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog'; 
import { NavbarComponent } from '../core/components/navbar/navbar';

@NgModule({
  declarations: [
    CartComponent,
    ConfirmDialogComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule // <-- 3. เพิ่ม FontAwesomeModule เข้าไปใน imports array
  ],
  exports: [
    CartComponent,
    ConfirmDialogComponent,
    NavbarComponent
  ]
})
export class SharedModule { }