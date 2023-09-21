import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTechStackComponent } from './business-tech-stack.component';

describe('BusinessTechStackComponent', () => {
  let component: BusinessTechStackComponent;
  let fixture: ComponentFixture<BusinessTechStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessTechStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
