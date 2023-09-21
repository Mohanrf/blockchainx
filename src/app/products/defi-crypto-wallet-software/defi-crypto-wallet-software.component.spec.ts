import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiCryptoWalletSoftwareComponent } from './defi-crypto-wallet-software.component';

describe('DefiCryptoWalletSoftwareComponent', () => {
  let component: DefiCryptoWalletSoftwareComponent;
  let fixture: ComponentFixture<DefiCryptoWalletSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiCryptoWalletSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiCryptoWalletSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
