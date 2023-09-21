import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseBusinessComponent } from './metaverse-business.component';

describe('MetaverseBusinessComponent', () => {
  let component: MetaverseBusinessComponent;
  let fixture: ComponentFixture<MetaverseBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
