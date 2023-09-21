import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToInvestInBitcoinComponent } from './how-to-invest-in-bitcoin.component';

describe('HowToInvestInBitcoinComponent', () => {
  let component: HowToInvestInBitcoinComponent;
  let fixture: ComponentFixture<HowToInvestInBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToInvestInBitcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToInvestInBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
