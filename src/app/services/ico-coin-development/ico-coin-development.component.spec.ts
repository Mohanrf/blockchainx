import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoCoinDevelopmentComponent } from './ico-coin-development.component';

describe('IcoCoinDevelopmentComponent', () => {
  let component: IcoCoinDevelopmentComponent;
  let fixture: ComponentFixture<IcoCoinDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcoCoinDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoCoinDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
