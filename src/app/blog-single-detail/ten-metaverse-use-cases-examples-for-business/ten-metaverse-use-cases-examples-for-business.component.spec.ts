import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenMetaverseUseCasesExamplesForBusinessComponent } from './ten-metaverse-use-cases-examples-for-business.component';

describe('TenMetaverseUseCasesExamplesForBusinessComponent', () => {
  let component: TenMetaverseUseCasesExamplesForBusinessComponent;
  let fixture: ComponentFixture<TenMetaverseUseCasesExamplesForBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenMetaverseUseCasesExamplesForBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenMetaverseUseCasesExamplesForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
