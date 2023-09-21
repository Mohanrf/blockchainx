import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeatureOfMetaverseComponent } from './key-feature-of-metaverse.component';

describe('KeyFeatureOfMetaverseComponent', () => {
  let component: KeyFeatureOfMetaverseComponent;
  let fixture: ComponentFixture<KeyFeatureOfMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyFeatureOfMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFeatureOfMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
