import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTokenHowUsedComponent } from './social-token-how-used.component';

describe('SocialTokenHowUsedComponent', () => {
  let component: SocialTokenHowUsedComponent;
  let fixture: ComponentFixture<SocialTokenHowUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialTokenHowUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTokenHowUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
