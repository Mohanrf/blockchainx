import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsPolkadotComponent } from './what-is-polkadot.component';

describe('WhatIsPolkadotComponent', () => {
  let component: WhatIsPolkadotComponent;
  let fixture: ComponentFixture<WhatIsPolkadotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsPolkadotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsPolkadotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
