import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfBlockchainComponent } from './types-of-blockchain.component';

describe('TypesOfBlockchainComponent', () => {
  let component: TypesOfBlockchainComponent;
  let fixture: ComponentFixture<TypesOfBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesOfBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
