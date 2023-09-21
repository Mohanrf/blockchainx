import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduringTechnologiesComponent } from './enduring-technologies.component';

describe('EnduringTechnologiesComponent', () => {
  let component: EnduringTechnologiesComponent;
  let fixture: ComponentFixture<EnduringTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnduringTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduringTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
