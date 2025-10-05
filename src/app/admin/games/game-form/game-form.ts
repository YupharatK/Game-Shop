// src/app/admin/games/game-form/game-form.component.ts
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-form',
  standalone: false,
  templateUrl: './game-form.html',
  styleUrls: ['./game-form.scss']
})
export class GameFormComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() gameToEdit: any | null = null; // รับข้อมูลเกมที่จะแก้ไข
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveGame = new EventEmitter<any>(); // ส่งข้อมูลที่บันทึกกลับไป

  gameForm: FormGroup;
  faCloudUpload = faCloudUpload;

  constructor(private fb: FormBuilder) {
    // สร้างฟอร์มด้วย FormBuilder
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      genre: ['', Validators.required],
      description: [''],
      // เราจะยังไม่จัดการเรื่อง image ในขั้นตอนนี้
    });
  }

  // Lifecycle Hook ที่จะทำงานเมื่อ Input property (gameToEdit) เปลี่ยนแปลง
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gameToEdit'] && this.gameToEdit) {
      // ถ้ามีข้อมูล gameToEdit เข้ามา ให้ patch ค่าลงในฟอร์ม
      this.gameForm.patchValue(this.gameToEdit);
    } else {
      // ถ้าไม่มี (เป็นการเพิ่มใหม่) ให้รีเซ็ตฟอร์ม
      this.gameForm.reset();
    }
  }

  onSave(): void {
    if (this.gameForm.valid) {
      this.saveGame.emit(this.gameForm.value); // ส่งข้อมูลจากฟอร์มกลับไป
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }
}