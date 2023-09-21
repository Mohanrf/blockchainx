import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAutionsComponent } from './nft-autions.component';

describe('NftAutionsComponent', () => {
  let component: NftAutionsComponent;
  let fixture: ComponentFixture<NftAutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftAutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftAutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
