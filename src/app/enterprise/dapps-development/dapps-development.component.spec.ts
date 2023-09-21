import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DappsDevelopmentComponent } from './dapps-development.component';

describe('DappsDevelopmentComponent', () => {
  let component: DappsDevelopmentComponent;
  let fixture: ComponentFixture<DappsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DappsDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DappsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
