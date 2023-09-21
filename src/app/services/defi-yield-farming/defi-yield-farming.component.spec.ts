import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiYieldFarmingComponent } from './defi-yield-farming.component';

describe('DefiYieldFarmingComponent', () => {
  let component: DefiYieldFarmingComponent;
  let fixture: ComponentFixture<DefiYieldFarmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiYieldFarmingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiYieldFarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
