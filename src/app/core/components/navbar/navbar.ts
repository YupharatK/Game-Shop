// src/app/core/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private cartService: CartService,
    private router: Router, // 4. Inject Router
    private fb: FormBuilder // 5. Inject FormBuilder
  ) {
    this.currentUser$ = this.authService.currentUser$;
    this.searchForm = this.fb.group({
      query: ['']
    });
  }
  // 7. สร้างเมธอดสำหรับ Submit ฟอร์ม
  onSearchSubmit(): void {
    console.log('Search Submitted!');
    const query = this.searchForm.get('query')?.value.trim();
    if (query) {
      // นำทางไปยังหน้า search พร้อมส่ง query parameter
      this.router.navigate(['/search'], { queryParams: { q: query } });
      this.searchForm.reset(); // (Optional) ล้างค่าในช่องค้นหา
    }
  }

  // 3. สร้างเมธอด toggleCart() เพื่อเรียกใช้ service
  toggleCart(): void {
    this.cartService.toggleCart();
  }

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  searchForm: FormGroup;

  logout(): void {
    this.authService.logout();
  }
}