import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardanoBlockchainDevelopmentComponent } from './cardano-blockchain-development.component';

describe('CardanoBlockchainDevelopmentComponent', () => {
  let component: CardanoBlockchainDevelopmentComponent;
  let fixture: ComponentFixture<CardanoBlockchainDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardanoBlockchainDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardanoBlockchainDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
