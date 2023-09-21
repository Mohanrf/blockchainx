import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeSmartContractComponent } from './bridge-smart-contract.component';

describe('BridgeSmartContractComponent', () => {
  let component: BridgeSmartContractComponent;
  let fixture: ComponentFixture<BridgeSmartContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeSmartContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeSmartContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
