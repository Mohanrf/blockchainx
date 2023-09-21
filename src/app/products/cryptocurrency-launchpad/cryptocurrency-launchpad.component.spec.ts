import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyLaunchpadComponent } from './cryptocurrency-launchpad.component';

describe('CryptocurrencyLaunchpadComponent', () => {
  let component: CryptocurrencyLaunchpadComponent;
  let fixture: ComponentFixture<CryptocurrencyLaunchpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyLaunchpadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyLaunchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
