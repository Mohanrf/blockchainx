import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolkadotParachainComponent } from './polkadot-parachain.component';

describe('PolkadotParachainComponent', () => {
  let component: PolkadotParachainComponent;
  let fixture: ComponentFixture<PolkadotParachainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolkadotParachainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolkadotParachainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
