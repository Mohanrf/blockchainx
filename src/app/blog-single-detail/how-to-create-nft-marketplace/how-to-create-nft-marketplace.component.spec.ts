import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToCreateNftMarketplaceComponent } from './how-to-create-nft-marketplace.component';

describe('HowToCreateNftMarketplaceComponent', () => {
  let component: HowToCreateNftMarketplaceComponent;
  let fixture: ComponentFixture<HowToCreateNftMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToCreateNftMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToCreateNftMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
