import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseDevelopmentComponent } from './metaverse-development.component';

describe('MetaverseDevelopmentComponent', () => {
  let component: MetaverseDevelopmentComponent;
  let fixture: ComponentFixture<MetaverseDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
