import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingAboutSubstrateComponent } from './everything-about-substrate.component';

describe('EverythingAboutSubstrateComponent', () => {
  let component: EverythingAboutSubstrateComponent;
  let fixture: ComponentFixture<EverythingAboutSubstrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingAboutSubstrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingAboutSubstrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
