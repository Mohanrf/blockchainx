import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainRustComponent } from './blockchain-rust.component';

describe('BlockchainRustComponent', () => {
  let component: BlockchainRustComponent;
  let fixture: ComponentFixture<BlockchainRustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainRustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainRustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
