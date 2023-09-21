import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCryptopunksComponent } from './nft-cryptopunks.component';

describe('NftCryptopunksComponent', () => {
  let component: NftCryptopunksComponent;
  let fixture: ComponentFixture<NftCryptopunksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftCryptopunksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftCryptopunksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
