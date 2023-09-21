import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainxInSupplyChainComponent } from './blockchainx-in-supply-chain.component';

describe('BlockchainxInSupplyChainComponent', () => {
  let component: BlockchainxInSupplyChainComponent;
  let fixture: ComponentFixture<BlockchainxInSupplyChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainxInSupplyChainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainxInSupplyChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
