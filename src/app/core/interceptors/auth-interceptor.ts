// src/app/core/interceptors/auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth'; // Import AuthService ของคุณ

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 1. ดึงข้อมูลผู้ใช้ปัจจุบันจาก AuthService
    const currentUser = this.authService.currentUserValue;

    // 2. ตรวจสอบว่ามีผู้ใช้ login อยู่ และมี token หรือไม่
    if (currentUser && currentUser.token) {
      // 3. ถ้ามี token, ให้ clone request เดิมแล้วเพิ่ม Authorization Header เข้าไป
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    // 4. ส่ง request ที่อาจจะถูกแก้ไขแล้ว (หรือ request เดิมถ้าไม่มี token) ไปทำงานต่อ
    return next.handle(request);
  }
}