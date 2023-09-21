import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythsAboutBlockchainComponent } from './myths-about-blockchain.component';

describe('MythsAboutBlockchainComponent', () => {
  let component: MythsAboutBlockchainComponent;
  let fixture: ComponentFixture<MythsAboutBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MythsAboutBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MythsAboutBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
