import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFungibleComponent } from './non-fungible.component';

describe('NonFungibleComponent', () => {
  let component: NonFungibleComponent;
  let fixture: ComponentFixture<NonFungibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonFungibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonFungibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
