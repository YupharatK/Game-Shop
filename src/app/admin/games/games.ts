// src/app/admin/games/games.component.ts
import { Component } from '@angular/core';
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.html',
  styleUrls: ['./games.scss'],
})
export class GamesComponent {
  faPlus = faPlus;
  faEdit = faPenToSquare;
  faDelete = faTrash;
  games = [
    { title: 'Red Dead Redemption 2', genre: 'Open-World', releaseDate: '2019-11-05' },
    { title: "Marvel's Spider-Man Remastered", genre: 'Open-World', releaseDate: '2022-08-12' },
    { title: 'God of War PC', genre: 'Action', releaseDate: '2022-01-14' },
    { title: 'Grand Theft Auto 5', genre: 'Open-World', releaseDate: '2015-04-14' },
    { title: 'Forza Horizon 5', genre: 'Racing', releaseDate: '2021-11-09' },
    { title: 'Minecraft', genre: 'Sandbox', releaseDate: '2011-11-18' },
    { title: 'Battlefield 6', genre: 'Action', releaseDate: '2021-10-22' },
  ];

  isGameFormOpen = false;
  currentGameForEdit: any | null = null; // ตัวแปรเก็บข้อมูลเกมที่จะแก้ไข

  isConfirmDialogOpen = false;
  gameToDelete: any | null = null;

  // ปรับปรุงเมธอดนี้ให้รับข้อมูลเกมได้ (สำหรับการแก้ไข)
  openGameForm(game: any | null = null): void {
    this.currentGameForEdit = game; // ถ้า game เป็น null คือการ "เพิ่ม", ถ้ามีค่า คือการ "แก้ไข"
    this.isGameFormOpen = true;
  }

  closeGameForm(): void {
    this.isGameFormOpen = false;
    this.currentGameForEdit = null; // เคลียร์ข้อมูลเกมที่กำลังแก้ไข
  }

  // เมธอดสำหรับรับข้อมูลที่บันทึกจากฟอร์ม
  handleFormSave(formData: any): void {
    if (this.currentGameForEdit) {
      // โหมดแก้ไข: ค้นหาเกมเดิมแล้วอัปเดตข้อมูล
      console.log('Updating game:', this.currentGameForEdit, 'with', formData);
    } else {
      // โหมดเพิ่ม: เพิ่มเกมใหม่เข้าไปใน array
      console.log('Adding new game:', formData);
    }
    this.closeGameForm(); // ปิดฟอร์มหลังจากบันทึก
  }

  // เมธอดสำหรับเปิด Popup ยืนยัน
  openConfirmDialog(game: any): void {
    this.gameToDelete = game;
    this.isConfirmDialogOpen = true;
  }

  // เมธอดสำหรับจัดการผลลัพธ์จาก Popup
  handleConfirmation(isConfirmed: boolean): void {
    if (isConfirmed && this.gameToDelete) {
      // ถ้าผู้ใช้กดยืนยัน ให้ทำการลบเกม
      console.log(`Deleting game: ${this.gameToDelete.title}`);
      // ลบเกมออกจาก array (ในชีวิตจริงคือการเรียก API ไปลบที่ server)
      this.games = this.games.filter((game) => game !== this.gameToDelete);
    }
    // ปิด Popup
    this.isConfirmDialogOpen = false;
    this.gameToDelete = null;
  }
}
