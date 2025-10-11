// src/app/user/game-details/game-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../gameservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-details',
  standalone: false,
  templateUrl: './game-details.html',
  styleUrls: ['./game-details.scss']
})
export class GameDetails implements OnInit {
  // เปลี่ยนจาก object ธรรมดาเป็น Observable
  game$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    // 1. ดึง ID ของเกมจาก URL
    const gameId = Number(this.route.snapshot.paramMap.get('id'));

    // 2. ถ้ามี ID, ให้เรียกใช้ service เพื่อดึงข้อมูลเกม
    if (gameId) {
      this.game$ = this.gamesService.getById(gameId);
    }
  }
}