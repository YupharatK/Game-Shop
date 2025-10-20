// ✅ src/app/admin/discounts/discount-form/discount-form.ts
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { firstValueFrom } from 'rxjs';
import { DiscountsService } from '../../services/discount';

@Component({
  selector: 'app-discount-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './discount-form.html',
  styleUrls: ['./discount-form.scss']
})
export class DiscountForm implements OnChanges {
  @Input() isOpen = false;
  @Input() discountToEdit: any = null;

  @Output() closeModal = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();

  faCalendar = faCalendar;
  discountForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private api: DiscountsService) {
    this.discountForm = this.fb.group({
      codeName: ['', Validators.required],
      value: [0, [Validators.required, Validators.min(1)]],
      totalUses: [1, [Validators.required, Validators.min(1)]],
      expirationDate: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.discountToEdit) {
      this.discountForm.patchValue({
        codeName: this.discountToEdit.code,
        value: this.discountToEdit.discount_percent,
        totalUses: this.discountToEdit.max_usage,
        expirationDate: this.discountToEdit.expiration_date
          ? new Date(this.discountToEdit.expiration_date).toLocaleDateString('en-US')
          : ''
      });
    } else {
      this.discountForm.reset();
    }
  }

  mapFormToCreateDto(formValue: any) {
    return {
      code: formValue.codeName,
      discount_percent: formValue.value,
      max_usage: formValue.totalUses,
      expiration_date: formValue.expirationDate
    };
  }

  async onSave(): Promise<void> {
    if (this.discountForm.invalid || this.isSubmitting) return;
    this.isSubmitting = true;

    const payload = this.mapFormToCreateDto(this.discountForm.value);
    try {
      if (this.discountToEdit?.id) {
        await firstValueFrom(this.api.update(this.discountToEdit.id, payload));
      } else {
        await firstValueFrom(this.api.create(payload));
      }
      this.saved.emit();
      this.closeModal.emit();
    } catch (e) {
      console.error('Save discount failed:', e);
      alert('Save failed.');
    } finally {
      this.isSubmitting = false;
    }
  }

  async onDelete(): Promise<void> {
    if (!this.discountToEdit?.id || this.isSubmitting) return;
    const confirmed = confirm('Delete this discount code?');
    if (!confirmed) return;

    this.isSubmitting = true;
    try {
      await firstValueFrom(this.api.delete(this.discountToEdit.id));
      this.deleted.emit();
      this.closeModal.emit();
    } catch (e) {
      console.error('Delete failed:', e);
      alert('Delete failed.');
    } finally {
      this.isSubmitting = false;
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }
}
