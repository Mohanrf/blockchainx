import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifunctionalNftComponent } from './multifunctional-nft.component';

describe('MultifunctionalNftComponent', () => {
  let component: MultifunctionalNftComponent;
  let fixture: ComponentFixture<MultifunctionalNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultifunctionalNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultifunctionalNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
