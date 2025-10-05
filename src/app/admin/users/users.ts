// src/app/admin/users/users.component.ts
import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
export class UsersComponent {
  faSearch = faSearch;

  // ข้อมูลผู้ใช้จำลอง
  users = [
    { username: 'john_doe', email: 'john.d@example.com', registrationDate: '2025-09-20' },
    { username: 'jane_smith', email: 'jane.smith@example.com', registrationDate: '2025-09-18' },
    { username: 'gamer_x', email: 'gamerx@email.com', registrationDate: '2025-09-15' },
    { username: 'master_chief', email: 'mc117@email.com', registrationDate: '2025-09-12' },
    { username: 'lara_croft', email: 'lara@tombraider.com', registrationDate: '2025-09-10' }
  ];
}