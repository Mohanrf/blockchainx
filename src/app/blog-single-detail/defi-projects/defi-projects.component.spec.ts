import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiProjectsComponent } from './defi-projects.component';

describe('DefiProjectsComponent', () => {
  let component: DefiProjectsComponent;
  let fixture: ComponentFixture<DefiProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
