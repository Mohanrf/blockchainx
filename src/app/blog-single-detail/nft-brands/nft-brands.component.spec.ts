import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftBrandsComponent } from './nft-brands.component';

describe('NftBrandsComponent', () => {
  let component: NftBrandsComponent;
  let fixture: ComponentFixture<NftBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
