import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidityDevelopmentComponent } from './solidity-development.component';

describe('SolidityDevelopmentComponent', () => {
  let component: SolidityDevelopmentComponent;
  let fixture: ComponentFixture<SolidityDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidityDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidityDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
