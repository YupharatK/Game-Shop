// src/app/user/shop/games.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { GameDto, GameType, GameUi } from '../models/game';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class GamesService {
  // ควรเป็นโดเมนฐานแบบไม่มี slash ท้าย เช่น 'https://your-backend'
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /** ดึงเกมทั้งหมด และ map เป็น GameUi ที่มีฟิลด์ game_type */
  getAll(): Observable<GameUi[]> {
    return this.http.get<GameDto[]>(`${this.base}/api/games`).pipe(
      tap(rows => {
        // ดีบักดู response ดิบจาก backend
        console.log('[GamesService] raw rows:', rows?.length ?? 0);
        if (rows?.length) console.log('[GamesService] raw sample:', rows[0]);
      }),
      map(rows =>
        rows.map(r => ({
          id: r.id,
          title: r.name,
          // รองรับทั้งกรณี backend ส่ง game_type หรือ genre_name
          game_type: (r as any).game_type ?? (r as any).genre_name ?? '',
          price: r.price,
          imageUrl: r.image_url ?? ''
        }))
      ),
      tap(mapped => {
        // ดีบักดูผลหลัง map แล้ว
        console.log('[GamesService] mapped GameUi:', mapped?.length ?? 0);
        if (mapped?.length) console.log('[GamesService] mapped sample:', mapped[0]);
      })
    );
  }


  getByUser(userId: number): Observable<GameUi[]> {
    return this.http.get<GameDto[]>(`${this.base}/api/games/users/${userId}`).pipe(
      map(rows => rows.map(r => ({
        id: r.id,
        title: r.name,
        game_type: r.game_type,
        price: r.price,
        imageUrl: r.image_url ?? '',
        purchase_date: r.purchase_date
      })))
    );
  }
}

 

