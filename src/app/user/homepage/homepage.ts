// src/app/user/shop/shop.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageComponent {

  // ข้อมูลจำลองสำหรับส่วน Best Sellers
  // ข้อมูลจำลองสำหรับส่วน Best Sellers
  bestSellers = [
    { imageUrl: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png', title: 'Red Dead Redemption 2', price: '609.09 B' },
    { imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/BtsjAgHT9pqHRXtN9FCk7xc8.png', title: 'Marvel\'s Spider-Man Remastered', price: '2,257.00 B' },
    { imageUrl: 'https://cdn.focus-home.com/fhi-fastforward-admin/resources/games/expeditions-a-mudrunner-game/images/29012025_9e15a72b03cc44259df1b785abd9894c.jpeg', title: 'Expedition A MudRunner Game', price: '1,037.99 B' },
    { imageUrl: 'https://assets-prd.ignimgs.com/2025/01/29/town-to-city-button-1738159361052.jpg', title: 'Town to City', price: '631.69 B' }
  ];

  // ข้อมูลจำลองสำหรับส่วน New Releases
  newReleases = [
    { imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202502/1900/631436cfbc1d64659c778e3783f29fafad6022145e0ffec8.jpg', title: 'Forza Horizon 5', price: '1,218.59 B' },
    { imageUrl: 'https://imgproxy.eneba.games/IRglYcwilNc3GguGGpby0x_x0jFgdFvPVR1ngi-BkR0/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw', title: 'Minecraft: Java & Bedrock Edition', price: '1,200.00 B' },
    { imageUrl: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7', title: 'God of War PC', price: '609.09 B' },
    { imageUrl: 'https://cdn1.epicgames.com/offer/b61e8ddd14e94619b7a74cf9d73f86b5/EGS_EASPORTSFC25StandardEdition_EACanada_S2_1200x1600-6e6b5c1d5d30e15b1dbdde721c6bc544', title: 'EA SPORTS FC 25', price: '2,200 B' }
  ];


}