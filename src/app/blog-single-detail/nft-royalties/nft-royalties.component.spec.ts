import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftRoyaltiesComponent } from './nft-royalties.component';

describe('NftRoyaltiesComponent', () => {
  let component: NftRoyaltiesComponent;
  let fixture: ComponentFixture<NftRoyaltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftRoyaltiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftRoyaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
