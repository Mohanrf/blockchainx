import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoCoinDevelopmentComponent } from './sto-coin-development.component';

describe('StoCoinDevelopmentComponent', () => {
  let component: StoCoinDevelopmentComponent;
  let fixture: ComponentFixture<StoCoinDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoCoinDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoCoinDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
