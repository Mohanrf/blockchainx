import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdWalletIntegrationComponent } from './cold-wallet-integration.component';

describe('ColdWalletIntegrationComponent', () => {
  let component: ColdWalletIntegrationComponent;
  let fixture: ComponentFixture<ColdWalletIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdWalletIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdWalletIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
