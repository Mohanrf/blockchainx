import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMeetMetaverseComponent } from './ai-meet-metaverse.component';

describe('AiMeetMetaverseComponent', () => {
  let component: AiMeetMetaverseComponent;
  let fixture: ComponentFixture<AiMeetMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiMeetMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiMeetMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
