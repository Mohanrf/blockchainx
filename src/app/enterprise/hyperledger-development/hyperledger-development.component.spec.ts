import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperledgerDevelopmentComponent } from './hyperledger-development.component';

describe('HyperledgerDevelopmentComponent', () => {
  let component: HyperledgerDevelopmentComponent;
  let fixture: ComponentFixture<HyperledgerDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyperledgerDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperledgerDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
