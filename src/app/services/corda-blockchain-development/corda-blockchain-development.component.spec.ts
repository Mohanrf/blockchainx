import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordaBlockchainDevelopmentComponent } from './corda-blockchain-development.component';

describe('CordaBlockchainDevelopmentComponent', () => {
  let component: CordaBlockchainDevelopmentComponent;
  let fixture: ComponentFixture<CordaBlockchainDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordaBlockchainDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordaBlockchainDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
