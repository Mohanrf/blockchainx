import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureOfNftApplicationsComponent } from './future-of-nft-applications.component';

describe('FutureOfNftApplicationsComponent', () => {
  let component: FutureOfNftApplicationsComponent;
  let fixture: ComponentFixture<FutureOfNftApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureOfNftApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureOfNftApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
