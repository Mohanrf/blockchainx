import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetDiscussComponent } from './let-discuss.component';

describe('LetDiscussComponent', () => {
  let component: LetDiscussComponent;
  let fixture: ComponentFixture<LetDiscussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetDiscussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
