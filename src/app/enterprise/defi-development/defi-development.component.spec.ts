import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiDevelopmentComponent } from './defi-development.component';

describe('DefiDevelopmentComponent', () => {
  let component: DefiDevelopmentComponent;
  let fixture: ComponentFixture<DefiDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
