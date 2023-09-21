import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftmarketplaconavalancheComponent } from './nftmarketplaconavalanche.component';

describe('NftmarketplaconavalancheComponent', () => {
  let component: NftmarketplaconavalancheComponent;
  let fixture: ComponentFixture<NftmarketplaconavalancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftmarketplaconavalancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftmarketplaconavalancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
