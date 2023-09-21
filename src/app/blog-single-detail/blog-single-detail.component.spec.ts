import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleDetailComponent } from './blog-single-detail.component';

describe('BlogSingleDetailComponent', () => {
  let component: BlogSingleDetailComponent;
  let fixture: ComponentFixture<BlogSingleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
