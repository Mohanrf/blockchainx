import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildMetaverseWorldComponent } from './build-metaverse-world.component';

describe('BuildMetaverseWorldComponent', () => {
  let component: BuildMetaverseWorldComponent;
  let fixture: ComponentFixture<BuildMetaverseWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildMetaverseWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildMetaverseWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
