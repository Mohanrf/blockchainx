import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftMarketplaceDevelopmentComponent } from './nft-marketplace-development.component';

describe('NftMarketplaceDevelopmentComponent', () => {
  let component: NftMarketplaceDevelopmentComponent;
  let fixture: ComponentFixture<NftMarketplaceDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftMarketplaceDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftMarketplaceDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
