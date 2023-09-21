import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarConsensusProtocolComponent } from './stellar-consensus-protocol.component';

describe('StellarConsensusProtocolComponent', () => {
  let component: StellarConsensusProtocolComponent;
  let fixture: ComponentFixture<StellarConsensusProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellarConsensusProtocolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StellarConsensusProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
