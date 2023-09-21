import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftGamingPlatformDevelopmentComponent } from './nft-gaming-platform-development.component';

describe('NftGamingPlatformDevelopmentComponent', () => {
  let component: NftGamingPlatformDevelopmentComponent;
  let fixture: ComponentFixture<NftGamingPlatformDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftGamingPlatformDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftGamingPlatformDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
