import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../core/config';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  checkout(items: any[]): Observable<any> {
    return this.http.post<any>(this.config.ordersEndpoints.checkout, { items });
  }
}