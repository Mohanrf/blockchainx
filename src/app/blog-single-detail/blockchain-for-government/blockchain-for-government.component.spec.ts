import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainForGovernmentComponent } from './blockchain-for-government.component';

describe('BlockchainForGovernmentComponent', () => {
  let component: BlockchainForGovernmentComponent;
  let fixture: ComponentFixture<BlockchainForGovernmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainForGovernmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainForGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
