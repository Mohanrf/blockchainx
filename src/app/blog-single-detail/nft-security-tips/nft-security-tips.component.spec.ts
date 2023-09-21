import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftSecurityTipsComponent } from './nft-security-tips.component';

describe('NftSecurityTipsComponent', () => {
  let component: NftSecurityTipsComponent;
  let fixture: ComponentFixture<NftSecurityTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftSecurityTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftSecurityTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
