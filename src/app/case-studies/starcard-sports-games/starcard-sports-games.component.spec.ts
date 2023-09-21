import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcardSportsGamesComponent } from './starcard-sports-games.component';

describe('StarcardSportsGamesComponent', () => {
  let component: StarcardSportsGamesComponent;
  let fixture: ComponentFixture<StarcardSportsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarcardSportsGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarcardSportsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
