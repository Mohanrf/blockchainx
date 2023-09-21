import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesOfMetaverseComponent } from './futures-of-metaverse.component';

describe('FuturesOfMetaverseComponent', () => {
  let component: FuturesOfMetaverseComponent;
  let fixture: ComponentFixture<FuturesOfMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturesOfMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturesOfMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
