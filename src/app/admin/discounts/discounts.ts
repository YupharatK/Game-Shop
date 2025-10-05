// src/app/admin/discounts/discounts.component.ts
import { Component } from '@angular/core';
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discounts',
  standalone: false,
  templateUrl: './discounts.html',
  styleUrls: ['./discounts.scss']
})
export class DiscountsComponent {
  faPlus = faPlus;
  faEdit = faPenToSquare;
  faDelete = faTrash;

  // ข้อมูลโค้ดส่วนลดจำลอง
  discounts = [
    { codeName: 'NEWYEAR2025', value: '15%', totalUses: 100, remainingUses: 45, expirationDate: '2025-01-31' },
    { codeName: 'GAMERTH', value: '100 Baht', totalUses: 50, remainingUses: 12, expirationDate: '2025-12-31' },
    { codeName: 'WELCOME10', value: '10%', totalUses: 1000, remainingUses: 854, expirationDate: 'N/A' },
    { codeName: 'FLASH99', value: '99 Baht', totalUses: 200, remainingUses: 0, expirationDate: '2025-09-30' },
  ];


  isDiscountFormOpen = false;
  currentDiscountForEdit: any | null = null;

  openDiscountForm(discount: any | null = null): void {
    this.currentDiscountForEdit = discount;
    this.isDiscountFormOpen = true;
  }

  closeDiscountForm(): void {
    this.isDiscountFormOpen = false;
    this.currentDiscountForEdit = null;
  }

  handleFormSave(formData: any): void {
    if (this.currentDiscountForEdit) {
      console.log('Updating discount:', this.currentDiscountForEdit, 'with', formData);
    } else {
      console.log('Adding new discount:', formData);
    }
    this.closeDiscountForm();
  }
}