import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecentralizedIdentityInBlockchainComponent } from './decentralized-identity-in-blockchain.component';

describe('DecentralizedIdentityInBlockchainComponent', () => {
  let component: DecentralizedIdentityInBlockchainComponent;
  let fixture: ComponentFixture<DecentralizedIdentityInBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecentralizedIdentityInBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecentralizedIdentityInBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
