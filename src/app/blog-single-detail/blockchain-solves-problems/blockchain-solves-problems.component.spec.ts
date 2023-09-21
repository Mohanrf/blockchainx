import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainSolvesProblemsComponent } from './blockchain-solves-problems.component';

describe('BlockchainSolvesProblemsComponent', () => {
  let component: BlockchainSolvesProblemsComponent;
  let fixture: ComponentFixture<BlockchainSolvesProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainSolvesProblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainSolvesProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
