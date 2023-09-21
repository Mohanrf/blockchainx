import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinosisComponent } from './minosis.component';

describe('MinosisComponent', () => {
  let component: MinosisComponent;
  let fixture: ComponentFixture<MinosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
