import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainHealthcareComponent } from './blockchain-healthcare.component';

describe('BlockchainHealthcareComponent', () => {
  let component: BlockchainHealthcareComponent;
  let fixture: ComponentFixture<BlockchainHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainHealthcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
