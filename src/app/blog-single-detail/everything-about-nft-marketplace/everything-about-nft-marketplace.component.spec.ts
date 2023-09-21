import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingAboutNftMarketplaceComponent } from './everything-about-nft-marketplace.component';

describe('EverythingAboutNftMarketplaceComponent', () => {
  let component: EverythingAboutNftMarketplaceComponent;
  let fixture: ComponentFixture<EverythingAboutNftMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingAboutNftMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingAboutNftMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
