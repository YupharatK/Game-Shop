// src/app/models/user.model.ts
export interface User {
  id: number;
  username: string;
  email: string;
  profile_image: string;
  role: 'USER' | 'ADMIN'; // กำหนดค่าที่เป็นไปได้
  wallet_balance: number;
  created_at: string; // หรือ Date
   token?: string;
}