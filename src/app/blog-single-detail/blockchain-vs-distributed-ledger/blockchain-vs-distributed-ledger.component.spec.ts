import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainVsDistributedLedgerComponent } from './blockchain-vs-distributed-ledger.component';

describe('BlockchainVsDistributedLedgerComponent', () => {
  let component: BlockchainVsDistributedLedgerComponent;
  let fixture: ComponentFixture<BlockchainVsDistributedLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainVsDistributedLedgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainVsDistributedLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
