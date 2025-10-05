// src/app/user/my-games/my-games.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-games',
  standalone: false,
  templateUrl: './my-games.html',
  styleUrls: ['./my-games.scss']
})
export class MyGames {
  // ข้อมูลจำลองสำหรับเกมใน library ของผู้ใช้
  myGames = [
    { imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2819/1651043aae33bdb6cf17d9992409d2ec5cc4856eb76228f6.png', title: 'Call of duty warzon' },
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Grounded_game_cover_art.jpg', title: 'Grounded' },
    { imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202507/2917/3bcfe09c4fbb3890f6c45a5cf9464570e36f2b08770187a2.png', title: 'Battlefield 6' },
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png', title: 'Grand Theft Auto 5' },
    { imageUrl: 'https://img.tapimg.net/market/images/FhGX9GUJBBPEbSBBTUQ4uT11xYkg.jpg', title: 'House Flipper 2' }
  ];

  // ตัวแปรสำหรับนับจำนวนเกม
  ownedGameCount = this.myGames.length;
}