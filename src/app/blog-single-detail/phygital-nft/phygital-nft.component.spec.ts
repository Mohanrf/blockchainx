import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhygitalNftComponent } from './phygital-nft.component';

describe('PhygitalNftComponent', () => {
  let component: PhygitalNftComponent;
  let fixture: ComponentFixture<PhygitalNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhygitalNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhygitalNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
