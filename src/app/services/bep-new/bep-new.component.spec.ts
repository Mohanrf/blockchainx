import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BepNewComponent } from './bep-new.component';

describe('BepNewComponent', () => {
  let component: BepNewComponent;
  let fixture: ComponentFixture<BepNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BepNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BepNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
