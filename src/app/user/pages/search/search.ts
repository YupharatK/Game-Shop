// src/app/user/pages/search/search.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../admin/services/game'; 

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrls: ['./search.scss']
})
export class SearchComponent implements OnInit {
  searchResults: any[] = [];
  query: string | null = '';
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.query = params.get('q');
      this.isLoading = true;
      if (this.query) {
        this.gameService.searchGames(this.query).subscribe(results => {
          this.searchResults = results;
          this.isLoading = false;
        });
      } else {
        this.searchResults = [];
        this.isLoading = false;
      }
    });
  }
}