import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMetaverseKnowAboutComponent } from './best-metaverse-know-about.component';

describe('BestMetaverseKnowAboutComponent', () => {
  let component: BestMetaverseKnowAboutComponent;
  let fixture: ComponentFixture<BestMetaverseKnowAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestMetaverseKnowAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestMetaverseKnowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
