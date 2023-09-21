import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZukiComponent } from './zuki.component';

describe('ZukiComponent', () => {
  let component: ZukiComponent;
  let fixture: ComponentFixture<ZukiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZukiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
