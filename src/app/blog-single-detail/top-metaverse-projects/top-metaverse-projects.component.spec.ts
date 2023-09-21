import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMetaverseProjectsComponent } from './top-metaverse-projects.component';

describe('TopMetaverseProjectsComponent', () => {
  let component: TopMetaverseProjectsComponent;
  let fixture: ComponentFixture<TopMetaverseProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMetaverseProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMetaverseProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
