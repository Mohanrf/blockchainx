import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildVirtualWorldComponent } from './build-virtual-world.component';

describe('BuildVirtualWorldComponent', () => {
  let component: BuildVirtualWorldComponent;
  let fixture: ComponentFixture<BuildVirtualWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildVirtualWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildVirtualWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
