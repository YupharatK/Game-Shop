import { Component, OnInit } from '@angular/core';
import { GamesService } from '../gameservice';
import { LibraryService } from '../../services/library';
import { of, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

type CardGame = {
  id: number;
  imageUrl: string;
  title: string;
  price: number | string;
  qty_sold?: number;  // ✅ เพิ่ม field สำหรับยอดขาย
  isOwned?: boolean;
};

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageComponent implements OnInit {
  bestSellers: CardGame[] = [];
  loadingTop = false;
  topError: string | null = null;

  newReleases: CardGame[] = [
    { id: 999, imageUrl: 'https://d1wgd08o7gfznj.cloudfront.net/uploads/gallery_images/2b8db9e8-4753-4950-92ad-e432743a80d1/Box%203D%20Ext%20In%20Real%20Life%20FR_legacy_square_thumb.png', title: 'Cyber Odyssey', price: 799 },
    { id: 1000, imageUrl: 'https://i.ytimg.com/vi/wLJM4CrJhQ4/maxresdefault.jpg', title: 'The Lost Realm', price: 699 }
  ];

  constructor(
    private games: GamesService,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    this.loadTopSellers();
  }

  private loadTopSellers(): void {
    this.loadingTop = true;
    this.topError = null;

    forkJoin({
      best: this.games.getTopSellers(),
      ownedIds: this.libraryService.getOwnedGameIds()
    })
      .pipe(
        map(({ best, ownedIds }: any) => {
          const ownedSet = new Set(ownedIds);
          return (best ?? [])
            .map((g: any) => ({
              id: g.id,
              imageUrl: g.image_url ?? g.imageUrl ?? '',
              title: g.name ?? g.title ?? 'Untitled',
              price: g.price,
              qty_sold: g.qty_sold ?? 0, // ✅ รองรับฟิลด์ยอดขาย
              isOwned: ownedSet.has(g.id)
            }))
            // ✅ เรียงจากยอดขายมาก → น้อย
            .sort((a: CardGame, b: CardGame) => (b.qty_sold ?? 0) - (a.qty_sold ?? 0));

        }),
        catchError(err => {
          console.error('[Homepage] loadTopSellers error:', err);
          this.topError = 'Failed to load Best Sellers';
          return of([] as CardGame[]);
        })
      )
      .subscribe(list => {
        this.bestSellers = list;
        this.loadingTop = false;
      });
  }
}
