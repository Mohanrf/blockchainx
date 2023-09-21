import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftSportsComponent } from './nft-sports.component';

describe('NftSportsComponent', () => {
  let component: NftSportsComponent;
  let fixture: ComponentFixture<NftSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
