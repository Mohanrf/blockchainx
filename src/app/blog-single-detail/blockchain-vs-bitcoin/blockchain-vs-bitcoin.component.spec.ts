import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainVsBitcoinComponent } from './blockchain-vs-bitcoin.component';

describe('BlockchainVsBitcoinComponent', () => {
  let component: BlockchainVsBitcoinComponent;
  let fixture: ComponentFixture<BlockchainVsBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainVsBitcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainVsBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
