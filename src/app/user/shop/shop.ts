// src/app/user/shop/shop.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameUi } from '../../models/game';
import { GamesService } from '../gameservice';
import { CartService } from '../../shared/cart';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss']
})
export class Shop implements OnInit {
  allGames: GameUi[] = [];
  filtered: GameUi[] = [];
  genres: string[] = [];
  loading = false;
  error: string | null = null;

  // '', 'Action', 'Open-World', ...
  selectedGenre = '';

   constructor(
    private games: GamesService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('[Shop] ngOnInit');
    this.fetch();
  }

  fetch(): void {
    this.loading = true;
    this.error = null;
    console.log('[Shop] fetch -> calling getAll()');

    this.games.getAll().subscribe({
      next: (data) => {
        console.log('[Shop] /api/games -> count:', data?.length ?? 0);
        if (data && data.length) {
          console.log('[Shop] sample row (mapped GameUi):', data[0]);
          // ถ้าจะดูทุกแถวแบบย่อ:
          console.table(
            data.map(({ id, title, game_type, price }) => ({ id, title, game_type, price }))
          );
        }

        this.allGames = data ?? [];

        // สกัดรายชื่อประเภท (มาจาก game_type ใน GameUi)
        const uniq = new Set(
          this.allGames
            .map(g => (g.game_type ?? '').trim())
            .filter((v): v is string => !!v)
        );
        this.genres = Array.from(uniq).sort((a, b) => a.localeCompare(b));

        console.log('[Shop] genres (unique):', this.genres);

        this.applyFilter();
        this.loading = false;
      },
      error: (err) => {
        console.error('[Shop] getAll error:', err);
        this.error = 'โหลดข้อมูลเกมไม่สำเร็จ';
        this.loading = false;
      }
    });
  }

  onGenreChange(value: string): void {
    this.selectedGenre = value || '';
    console.log('[Shop] onGenreChange -> selectedGenre:', this.selectedGenre);
    this.applyFilter();
  }

  showAll(): void {
    this.selectedGenre = '';
    console.log('[Shop] showAll -> reset selectedGenre');
    this.applyFilter();
  }

  private applyFilter(): void {
    const g = this.selectedGenre.trim().toLowerCase();
    if (!g) {
      this.filtered = [...this.allGames];
      console.log('[Shop] applyFilter -> show all, count:', this.filtered.length);
      return;
    }

    this.filtered = this.allGames.filter(x => (x.game_type || '').toLowerCase() === g);
    console.log('[Shop] applyFilter -> genre:', this.selectedGenre, 'count:', this.filtered.length);

    // ดูตัวอย่าง 1 แถวหลังกรอง
    if (this.filtered.length) {
      console.log('[Shop] filtered sample:', this.filtered[0]);
    }
  }

  trackById(_: number, it: GameUi) {
    return it.id;
  }



  // 4. สร้างเมธอดสำหรับปุ่ม "ADD"
  addToCart(game: any, event: MouseEvent): void {
    // ป้องกันไม่ให้ event click ลามไปถึง <a> ที่ครอบอยู่
    event.preventDefault();
    event.stopPropagation(); 
    this.cartService.addItem(game);
    // (Optional) อาจจะแสดง Notification ว่า "Added to cart!"
    console.log(`${game.title} added to cart!`);
  }

  // 5. สร้างเมธอดสำหรับปุ่ม "BUY"
  buyNow(game: any, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.clearCart(); // (Optional) ล้างตะกร้าก่อนเพิ่มของชิ้นใหม่
    this.cartService.addItem(game);
    this.router.navigate(['/shopping-cart']); // นำทางไปหน้าตะกร้า
  }
}
