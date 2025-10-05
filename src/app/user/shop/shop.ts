// src/app/user/shop/shop.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss']
})
export class Shop {
  // ข้อมูลจำลองสำหรับเกมทั้งหมดในร้าน
  allGames = [
    { imageUrl: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png', title: 'Red Dead Redemption 2', genre: 'Open-World', price: '609.09 B' },
    { imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/BtsjAgHT9pqHRXtN9FCk7xc8.png', title: 'Marvel\'s Spider-Man Remastered', genre: 'Open-World', price: '2,257.00 B' },
    { imageUrl: 'https://cdn.focus-home.com/fhi-fastforward-admin/resources/games/expeditions-a-mudrunner-game/images/29012025_9e15a72b03cc44259df1b785abd9894c.jpeg', title: 'Clair Obscur: Expedition 33', genre: 'Open-World', price: '1,037.99 B' },
    { imageUrl: 'https://assets-prd.ignimgs.com/2025/01/29/town-to-city-button-1738159361052.jpg', title: 'Town to City', genre: 'Simulation', price: '631.69 B' },
    { imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202502/1900/631436cfbc1d64659c778e3783f29fafad6022145e0ffec8.jpg', title: 'Forza Horizon 5', genre: 'Racing', price: '1,218.59 B' },
    { imageUrl: 'https://imgproxy.eneba.games/IRglYcwilNc3GguGGpby0x_x0jFgdFvPVR1ngi-BkR0/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw', title: 'Minecraft: Java & Bedrock', genre: 'Sandbox', price: '1,200.00 B' },
    { imageUrl: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7', title: 'God of War PC', genre: 'Action', price: '609.09 B' },
    { imageUrl: 'https://cdn1.epicgames.com/offer/b61e8ddd14e94619b7a74cf9d73f86b5/EGS_EASPORTSFC25StandardEdition_EACanada_S2_1200x1600-6e6b5c1d5d30e15b1dbdde721c6bc544',  title: 'EA SPORTS FC 26', genre: 'Sports', price: '2,200 B' },
    { imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2819/1651043aae33bdb6cf17d9992409d2ec5cc4856eb76228f6.png', title: 'Battlefield 6', genre: 'Action', price: '1,218.59 B' },
    { imageUrl: 'https://img.tapimg.net/market/images/FhGX9GUJBBPEbSBBTUQ4uT11xYkg.jpg', title: 'House Flipper 2', genre: 'Builder', price: '1,200.00 B' },
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png', title: 'Grand Theft Auto 5', genre: 'Open-World', price: '609.09 B' },
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Grounded_game_cover_art.jpg', title: 'Grounded', genre: 'Open-World', price: '2,200 B' }
  ];
}