import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTechnologyInMetaverseComponent } from './primary-technology-in-metaverse.component';

describe('PrimaryTechnologyInMetaverseComponent', () => {
  let component: PrimaryTechnologyInMetaverseComponent;
  let fixture: ComponentFixture<PrimaryTechnologyInMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryTechnologyInMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryTechnologyInMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
