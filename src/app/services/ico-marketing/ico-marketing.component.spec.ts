import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoMarketingComponent } from './ico-marketing.component';

describe('IcoMarketingComponent', () => {
  let component: IcoMarketingComponent;
  let fixture: ComponentFixture<IcoMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcoMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
