import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsDefiComponent } from './what-is-defi.component';

describe('WhatIsDefiComponent', () => {
  let component: WhatIsDefiComponent;
  let fixture: ComponentFixture<WhatIsDefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsDefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
