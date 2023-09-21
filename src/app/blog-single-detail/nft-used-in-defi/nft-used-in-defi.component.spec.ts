import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftUsedInDefiComponent } from './nft-used-in-defi.component';

describe('NftUsedInDefiComponent', () => {
  let component: NftUsedInDefiComponent;
  let fixture: ComponentFixture<NftUsedInDefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftUsedInDefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftUsedInDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
