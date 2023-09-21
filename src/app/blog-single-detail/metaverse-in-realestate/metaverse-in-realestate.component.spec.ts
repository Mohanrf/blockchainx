import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseInRealestateComponent } from './metaverse-in-realestate.component';

describe('MetaverseInRealestateComponent', () => {
  let component: MetaverseInRealestateComponent;
  let fixture: ComponentFixture<MetaverseInRealestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseInRealestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseInRealestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
