// src/app/admin/services/game.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../../core/config'; 

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(this.config.gamesEndpoints.getAll);
  }

  createGame(gameData: FormData): Observable<any> {
    return this.http.post<any>(this.config.gamesEndpoints.getAll, gameData);
  }
  
  updateGame(id: number, gameData: FormData): Observable<any> {
    return this.http.patch<any>(this.config.gamesEndpoints.updateById(id), gameData);
  }

  deleteGame(id: number): Observable<any> {
    return this.http.delete<any>(this.config.gamesEndpoints.deleteById(id));
  }
}