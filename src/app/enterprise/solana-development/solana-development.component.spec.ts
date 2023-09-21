import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolanaDevelopmentComponent } from './solana-development.component';

describe('SolanaDevelopmentComponent', () => {
  let component: SolanaDevelopmentComponent;
  let fixture: ComponentFixture<SolanaDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolanaDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolanaDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
