import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingAboutWeb3Component } from './everything-about-web3.component';

describe('EverythingAboutWeb3Component', () => {
  let component: EverythingAboutWeb3Component;
  let fixture: ComponentFixture<EverythingAboutWeb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingAboutWeb3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingAboutWeb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
