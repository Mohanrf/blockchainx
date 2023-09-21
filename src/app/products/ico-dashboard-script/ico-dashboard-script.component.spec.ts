import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoDashboardScriptComponent } from './ico-dashboard-script.component';

describe('IcoDashboardScriptComponent', () => {
  let component: IcoDashboardScriptComponent;
  let fixture: ComponentFixture<IcoDashboardScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcoDashboardScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoDashboardScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
