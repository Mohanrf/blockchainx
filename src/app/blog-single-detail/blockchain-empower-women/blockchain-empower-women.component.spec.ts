import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainEmpowerWomenComponent } from './blockchain-empower-women.component';

describe('BlockchainEmpowerWomenComponent', () => {
  let component: BlockchainEmpowerWomenComponent;
  let fixture: ComponentFixture<BlockchainEmpowerWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainEmpowerWomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainEmpowerWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
