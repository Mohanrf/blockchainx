import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EktachainComponent } from './ektachain.component';

describe('EktachainComponent', () => {
  let component: EktachainComponent;
  let fixture: ComponentFixture<EktachainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EktachainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EktachainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
