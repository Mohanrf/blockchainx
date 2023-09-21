import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainIdentityManagementComponent } from './blockchain-identity-management.component';

describe('BlockchainIdentityManagementComponent', () => {
  let component: BlockchainIdentityManagementComponent;
  let fixture: ComponentFixture<BlockchainIdentityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainIdentityManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainIdentityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
