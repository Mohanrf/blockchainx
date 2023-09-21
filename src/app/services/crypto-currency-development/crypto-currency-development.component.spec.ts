import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyDevelopmentComponent } from './crypto-currency-development.component';

describe('CryptoCurrencyDevelopmentComponent', () => {
  let component: CryptoCurrencyDevelopmentComponent;
  let fixture: ComponentFixture<CryptoCurrencyDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCurrencyDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCurrencyDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
