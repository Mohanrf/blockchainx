import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftMusicMarketplaceComponent } from './nft-music-marketplace.component';

describe('NftMusicMarketplaceComponent', () => {
  let component: NftMusicMarketplaceComponent;
  let fixture: ComponentFixture<NftMusicMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftMusicMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftMusicMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
