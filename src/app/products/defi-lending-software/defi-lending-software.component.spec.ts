import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiLendingSoftwareComponent } from './defi-lending-software.component';

describe('DefiLendingSoftwareComponent', () => {
  let component: DefiLendingSoftwareComponent;
  let fixture: ComponentFixture<DefiLendingSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiLendingSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiLendingSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
