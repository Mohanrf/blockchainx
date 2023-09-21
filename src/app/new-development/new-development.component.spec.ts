import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDevelopmentComponent } from './new-development.component';

describe('NewDevelopmentComponent', () => {
  let component: NewDevelopmentComponent;
  let fixture: ComponentFixture<NewDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
