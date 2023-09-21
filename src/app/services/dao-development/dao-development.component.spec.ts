import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaoDevelopmentComponent } from './dao-development.component';

describe('DaoDevelopmentComponent', () => {
  let component: DaoDevelopmentComponent;
  let fixture: ComponentFixture<DaoDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaoDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaoDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
