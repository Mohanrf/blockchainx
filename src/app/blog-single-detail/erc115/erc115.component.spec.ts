import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc115Component } from './erc115.component';

describe('Erc115Component', () => {
  let component: Erc115Component;
  let fixture: ComponentFixture<Erc115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erc115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erc115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
