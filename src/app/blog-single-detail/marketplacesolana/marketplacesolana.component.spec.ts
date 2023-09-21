import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacesolanaComponent } from './marketplacesolana.component';

describe('MarketplacesolanaComponent', () => {
  let component: MarketplacesolanaComponent;
  let fixture: ComponentFixture<MarketplacesolanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplacesolanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacesolanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
