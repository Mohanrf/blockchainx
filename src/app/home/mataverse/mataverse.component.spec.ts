import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MataverseComponent } from './mataverse.component';

describe('MataverseComponent', () => {
  let component: MataverseComponent;
  let fixture: ComponentFixture<MataverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MataverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MataverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
