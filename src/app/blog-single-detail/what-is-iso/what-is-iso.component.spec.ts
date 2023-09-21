import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsIsoComponent } from './what-is-iso.component';

describe('WhatIsIsoComponent', () => {
  let component: WhatIsIsoComponent;
  let fixture: ComponentFixture<WhatIsIsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsIsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsIsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
