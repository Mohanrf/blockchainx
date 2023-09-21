import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftRoleInMetaverseComponent } from './nft-role-in-metaverse.component';

describe('NftRoleInMetaverseComponent', () => {
  let component: NftRoleInMetaverseComponent;
  let fixture: ComponentFixture<NftRoleInMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftRoleInMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftRoleInMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
