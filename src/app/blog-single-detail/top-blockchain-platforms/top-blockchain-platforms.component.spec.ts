import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBlockchainPlatformsComponent } from './top-blockchain-platforms.component';

describe('TopBlockchainPlatformsComponent', () => {
  let component: TopBlockchainPlatformsComponent;
  let fixture: ComponentFixture<TopBlockchainPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBlockchainPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBlockchainPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
