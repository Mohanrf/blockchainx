import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecentralizedApplicationsRevolutionizingComponent } from './decentralized-applications-revolutionizing.component';

describe('DecentralizedApplicationsRevolutionizingComponent', () => {
  let component: DecentralizedApplicationsRevolutionizingComponent;
  let fixture: ComponentFixture<DecentralizedApplicationsRevolutionizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecentralizedApplicationsRevolutionizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecentralizedApplicationsRevolutionizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
