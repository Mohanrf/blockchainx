import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainInnovationComponent } from './blockchain-innovation.component';

describe('BlockchainInnovationComponent', () => {
  let component: BlockchainInnovationComponent;
  let fixture: ComponentFixture<BlockchainInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainInnovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
