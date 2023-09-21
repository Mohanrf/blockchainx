import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftEverytingAboutNftMetaversesComponent } from './nft-everyting-about-nft-metaverses.component';

describe('NftEverytingAboutNftMetaversesComponent', () => {
  let component: NftEverytingAboutNftMetaversesComponent;
  let fixture: ComponentFixture<NftEverytingAboutNftMetaversesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftEverytingAboutNftMetaversesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftEverytingAboutNftMetaversesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
