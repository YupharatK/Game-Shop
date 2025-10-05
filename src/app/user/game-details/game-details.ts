// src/app/user/game-details/game-details.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-details',
  standalone: false,
  templateUrl: './game-details.html',
  styleUrls: ['./game-details.scss']
})
export class GameDetails {
  // ข้อมูลจำลองสำหรับ 1 เกม
  game = {
    title: 'Red Dead Redemption 2',
    price: '609.09',
    genre: 'Open-World',
    imageUrl: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png',
    description: [`Just one more job, just one more big score, that's how it always begins... but you'll never expect where Red Dead Redemption 2 takes the story from there. The massive open world of RDR2 is filled with quests, characters, animals, weapons, and secrets that will remain hidden even after hundreds of hours of gameplay. As Arthur Morgan, member of the Van der Linde gang (and now a fugitive), your only choice is to flee to survive in Red Dead Redemption 2.`],
    releaseDate: 'December 10, 2025',
    bestSellerRank: '# 1'
  };
}