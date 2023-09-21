import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesOfNftComponent } from './advantages-of-nft.component';

describe('AdvantagesOfNftComponent', () => {
  let component: AdvantagesOfNftComponent;
  let fixture: ComponentFixture<AdvantagesOfNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantagesOfNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesOfNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
