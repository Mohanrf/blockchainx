import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePermissionedBlockchainComponent } from './create-permissioned-blockchain.component';

describe('CreatePermissionedBlockchainComponent', () => {
  let component: CreatePermissionedBlockchainComponent;
  let fixture: ComponentFixture<CreatePermissionedBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePermissionedBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePermissionedBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
