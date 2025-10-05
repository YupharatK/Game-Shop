// src/app/core/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth';
import { User } from '../../../models/user.model';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../shared/cart';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  currentUser$: Observable<User | null>;

   constructor(
    private authService: AuthService,
    private cartService: CartService 
  ) {
    this.currentUser$ = this.authService.currentUser$;
  }

  // 3. สร้างเมธอด toggleCart() เพื่อเรียกใช้ service
  toggleCart(): void {
    this.cartService.toggleCart();
  }

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  logout(): void {
    this.authService.logout();
  }
}