import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDefiPlatformsComponent } from './best-defi-platforms.component';

describe('BestDefiPlatformsComponent', () => {
  let component: BestDefiPlatformsComponent;
  let fixture: ComponentFixture<BestDefiPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDefiPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDefiPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
