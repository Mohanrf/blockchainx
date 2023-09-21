import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNftMarketplacePolygonComponent } from './create-nft-marketplace-polygon.component';

describe('CreateNftMarketplacePolygonComponent', () => {
  let component: CreateNftMarketplacePolygonComponent;
  let fixture: ComponentFixture<CreateNftMarketplacePolygonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNftMarketplacePolygonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNftMarketplacePolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
