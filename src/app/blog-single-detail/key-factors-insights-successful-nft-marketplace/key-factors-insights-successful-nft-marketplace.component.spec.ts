import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFactorsInsightsSuccessfulNftMarketplaceComponent } from './key-factors-insights-successful-nft-marketplace.component';

describe('KeyFactorsInsightsSuccessfulNftMarketplaceComponent', () => {
  let component: KeyFactorsInsightsSuccessfulNftMarketplaceComponent;
  let fixture: ComponentFixture<KeyFactorsInsightsSuccessfulNftMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyFactorsInsightsSuccessfulNftMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFactorsInsightsSuccessfulNftMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
