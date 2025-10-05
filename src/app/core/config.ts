// src/app/core/config.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development'; // เรายังสามารถใช้ environment สำหรับ baseUrl ได้

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly baseUrl = environment.apiUrl; // URL หลักของ API

  // Endpoint สำหรับส่วน Auth
  public readonly authEndpoints = {
    register: `${this.baseUrl}/api/auth/register`,
    login: `${this.baseUrl}/api/auth/login`
  };

  // Endpoint สำหรับส่วน Games (ตัวอย่าง)
  public readonly gamesEndpoints = {
    getAll: `${this.baseUrl}/api/games`,
    getById: (id: string | number) => `${this.baseUrl}/api/games/${id}`
  };

  // Endpoint สำหรับส่วน Users (ตัวอย่าง)
  public readonly usersEndpoints = {
    getAll: `${this.baseUrl}/api/users`,
    updateProfile: `${this.baseUrl}/api/users/profile`
  };

  constructor() { }
}