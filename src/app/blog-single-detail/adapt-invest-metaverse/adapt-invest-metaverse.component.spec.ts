import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptInvestMetaverseComponent } from './adapt-invest-metaverse.component';

describe('AdaptInvestMetaverseComponent', () => {
  let component: AdaptInvestMetaverseComponent;
  let fixture: ComponentFixture<AdaptInvestMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaptInvestMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptInvestMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
