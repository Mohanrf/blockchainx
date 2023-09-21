import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCasesOfDefiComponent } from './use-cases-of-defi.component';

describe('UseCasesOfDefiComponent', () => {
  let component: UseCasesOfDefiComponent;
  let fixture: ComponentFixture<UseCasesOfDefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCasesOfDefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCasesOfDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
