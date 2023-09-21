import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftInsightsComponent } from './nft-insights.component';

describe('NftInsightsComponent', () => {
  let component: NftInsightsComponent;
  let fixture: ComponentFixture<NftInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
