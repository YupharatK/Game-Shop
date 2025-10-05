// src/app/user/user.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// 1. Import UserRoutingModule และ SharedModule เข้ามา
import { UserRoutingModule } from './user-routing-module';
import { SharedModule } from '../shared/shared-module'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// 2. Import Component ทั้งหมดที่อยู่ใน UserModule
import { Layout } from './layout/layout'; 
import { HomepageComponent } from './homepage/homepage'; 
import { Shop } from './shop/shop'; 
import { MyGames } from './my-games/my-games'; 
import { GameDetails } from './game-details/game-details'; 
import { ShoppingCartComponent } from './shopping-cart/shopping-cart';
import { ProfileComponent} from './profile/profile.component';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal';

@NgModule({
  declarations: [
    Layout,
    HomepageComponent,
    Shop,
    MyGames,
    GameDetails,
    ShoppingCartComponent,
    ProfileComponent,
    EditProfileModalComponent
  ],
  imports: [
    CommonModule,
    // 3. ใส่ UserRoutingModule และ SharedModule ใน imports array
    UserRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }