import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticVsDynamicNftComponent } from './static-vs-dynamic-nft.component';

describe('StaticVsDynamicNftComponent', () => {
  let component: StaticVsDynamicNftComponent;
  let fixture: ComponentFixture<StaticVsDynamicNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticVsDynamicNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticVsDynamicNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
