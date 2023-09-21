import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsGamefiComponent } from './what-is-gamefi.component';

describe('WhatIsGamefiComponent', () => {
  let component: WhatIsGamefiComponent;
  let fixture: ComponentFixture<WhatIsGamefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsGamefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsGamefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
