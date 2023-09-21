import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsDaoComponent } from './what-is-dao.component';

describe('WhatIsDaoComponent', () => {
  let component: WhatIsDaoComponent;
  let fixture: ComponentFixture<WhatIsDaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsDaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsDaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
