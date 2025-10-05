import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGames } from './my-games';

describe('MyGames', () => {
  let component: MyGames;
  let fixture: ComponentFixture<MyGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
