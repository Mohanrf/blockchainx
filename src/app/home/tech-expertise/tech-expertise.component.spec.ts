import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechExpertiseComponent } from './tech-expertise.component';

describe('TechExpertiseComponent', () => {
  let component: TechExpertiseComponent;
  let fixture: ComponentFixture<TechExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
