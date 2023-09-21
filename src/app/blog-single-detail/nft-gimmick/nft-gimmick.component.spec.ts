import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftGimmickComponent } from './nft-gimmick.component';

describe('NftGimmickComponent', () => {
  let component: NftGimmickComponent;
  let fixture: ComponentFixture<NftGimmickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftGimmickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftGimmickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
