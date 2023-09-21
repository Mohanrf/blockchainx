import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiVsCefiComponent } from './defi-vs-cefi.component';

describe('DefiVsCefiComponent', () => {
  let component: DefiVsCefiComponent;
  let fixture: ComponentFixture<DefiVsCefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiVsCefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiVsCefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
