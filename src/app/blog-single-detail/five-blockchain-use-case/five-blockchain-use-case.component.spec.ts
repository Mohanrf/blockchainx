import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveBlockchainUseCaseComponent } from './five-blockchain-use-case.component';

describe('FiveBlockchainUseCaseComponent', () => {
  let component: FiveBlockchainUseCaseComponent;
  let fixture: ComponentFixture<FiveBlockchainUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveBlockchainUseCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveBlockchainUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
