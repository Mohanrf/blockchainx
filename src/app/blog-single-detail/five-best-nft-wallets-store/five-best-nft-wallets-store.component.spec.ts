import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveBestNftWalletsStoreComponent } from './five-best-nft-wallets-store.component';

describe('FiveBestNftWalletsStoreComponent', () => {
  let component: FiveBestNftWalletsStoreComponent;
  let fixture: ComponentFixture<FiveBestNftWalletsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveBestNftWalletsStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveBestNftWalletsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
