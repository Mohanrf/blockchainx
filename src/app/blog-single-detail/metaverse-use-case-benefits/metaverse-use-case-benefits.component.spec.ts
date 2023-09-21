import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseUseCaseBenefitsComponent } from './metaverse-use-case-benefits.component';

describe('MetaverseUseCaseBenefitsComponent', () => {
  let component: MetaverseUseCaseBenefitsComponent;
  let fixture: ComponentFixture<MetaverseUseCaseBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseUseCaseBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseUseCaseBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
