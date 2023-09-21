import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNftMarketplaceComponent } from './create-nft-marketplace.component';

describe('CreateNftMarketplaceComponent', () => {
  let component: CreateNftMarketplaceComponent;
  let fixture: ComponentFixture<CreateNftMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNftMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNftMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
