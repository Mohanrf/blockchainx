import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDevelopmentCompanyNewComponent } from './nft-development-company-new.component';

describe('NftDevelopmentCompanyNewComponent', () => {
  let component: NftDevelopmentCompanyNewComponent;
  let fixture: ComponentFixture<NftDevelopmentCompanyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDevelopmentCompanyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftDevelopmentCompanyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
