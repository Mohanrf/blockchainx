import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContractDevelopmentComponent } from './smart-contract-development.component';

describe('SmartContractDevelopmentComponent', () => {
  let component: SmartContractDevelopmentComponent;
  let fixture: ComponentFixture<SmartContractDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartContractDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContractDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
