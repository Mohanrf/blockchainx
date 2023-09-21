import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareManagementComponent } from './healthcare-management.component';

describe('HealthcareManagementComponent', () => {
  let component: HealthcareManagementComponent;
  let fixture: ComponentFixture<HealthcareManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcareManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
