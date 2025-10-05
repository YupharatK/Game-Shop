// src/app/admin/transaction/transaction.component.ts
import { Component } from '@angular/core';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction',
  standalone: false,
  templateUrl: './transaction.html',
  styleUrls: ['./transaction.scss']
})
export class TransactionComponent {
  faSearch = faSearch;
  faCalendar = faCalendarAlt;

  // ข้อมูลธุรกรรมจำลอง
  transactions = [
    { username: 'john_doe', email: 'john.d@example.com', type: 'Purchase', details: 'Game: \'Cosmic Conquest\'', amount: -350, date: '2025-09-21' },
    { username: 'jane_smith', email: 'jane.smith@example.com', type: 'Top-up', details: 'Added funds to wallet', amount: 500, date: '2025-09-22' },
    { username: 'gamer_x', email: 'gamerx@email.com', type: 'Purchase', details: 'Game: \'Mystic Realms\'', amount: -200, date: '2025-09-23' },
    { username: 'jane_smith', email: 'jane.smith@example.com', type: 'Top-up', details: 'Added funds to wallet', amount: 1000, date: '2025-09-23' },
    { username: 'master_chief', email: 'mc117@email.com', type: 'Purchase', details: 'Game: \'Shadow Legends\'', amount: -200, date: '2025-09-23' }
  ];
}