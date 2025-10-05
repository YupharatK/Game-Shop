// src/app/admin/discounts/discount-form/discount-form.component.ts
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discount-form',
  standalone: false,
  templateUrl: './discount-form.html',
  styleUrls: ['./discount-form.scss']
})
export class DiscountFormComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() discountToEdit: any | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveDiscount = new EventEmitter<any>();

  discountForm: FormGroup;
  faCalendar = faCalendarAlt;

  constructor(private fb: FormBuilder) {
    this.discountForm = this.fb.group({
      codeName: ['', Validators.required],
      value: ['', Validators.required],
      totalUses: ['', Validators.required],
      expirationDate: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.discountToEdit) {
      this.discountForm.patchValue(this.discountToEdit);
    } else {
      this.discountForm.reset();
    }
  }

  onSave(): void {
    if (this.discountForm.valid) {
      this.saveDiscount.emit(this.discountForm.value);
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }
}