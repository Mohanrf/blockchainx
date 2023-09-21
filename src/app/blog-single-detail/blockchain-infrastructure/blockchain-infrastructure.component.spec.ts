import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainInfrastructureComponent } from './blockchain-infrastructure.component';

describe('BlockchainInfrastructureComponent', () => {
  let component: BlockchainInfrastructureComponent;
  let fixture: ComponentFixture<BlockchainInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainInfrastructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
