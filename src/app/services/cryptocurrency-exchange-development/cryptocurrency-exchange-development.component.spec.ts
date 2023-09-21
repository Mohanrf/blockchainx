import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyExchangeDevelopmentComponent } from './cryptocurrency-exchange-development.component';

describe('CryptocurrencyExchangeDevelopmentComponent', () => {
  let component: CryptocurrencyExchangeDevelopmentComponent;
  let fixture: ComponentFixture<CryptocurrencyExchangeDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyExchangeDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyExchangeDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
