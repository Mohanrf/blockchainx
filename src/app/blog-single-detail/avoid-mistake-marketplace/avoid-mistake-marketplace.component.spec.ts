import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidMistakeMarketplaceComponent } from './avoid-mistake-marketplace.component';

describe('AvoidMistakeMarketplaceComponent', () => {
  let component: AvoidMistakeMarketplaceComponent;
  let fixture: ComponentFixture<AvoidMistakeMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvoidMistakeMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidMistakeMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
