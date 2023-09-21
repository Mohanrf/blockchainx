import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDevelopmentCompanyComponent } from './nft-development-company.component';

describe('NftDevelopmentCompanyComponent', () => {
  let component: NftDevelopmentCompanyComponent;
  let fixture: ComponentFixture<NftDevelopmentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDevelopmentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftDevelopmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
