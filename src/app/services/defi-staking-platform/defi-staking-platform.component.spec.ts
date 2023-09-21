import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiStakingPlatformComponent } from './defi-staking-platform.component';

describe('DefiStakingPlatformComponent', () => {
  let component: DefiStakingPlatformComponent;
  let fixture: ComponentFixture<DefiStakingPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiStakingPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiStakingPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
