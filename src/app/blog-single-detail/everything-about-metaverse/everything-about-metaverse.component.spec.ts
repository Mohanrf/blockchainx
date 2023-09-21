import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingAboutMetaverseComponent } from './everything-about-metaverse.component';

describe('EverythingAboutMetaverseComponent', () => {
  let component: EverythingAboutMetaverseComponent;
  let fixture: ComponentFixture<EverythingAboutMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingAboutMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingAboutMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
