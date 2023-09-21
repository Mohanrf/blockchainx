import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolanaProofComponent } from './solana-proof.component';

describe('SolanaProofComponent', () => {
  let component: SolanaProofComponent;
  let fixture: ComponentFixture<SolanaProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolanaProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolanaProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
