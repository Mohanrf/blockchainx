import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolanaPolygonEthComponent } from './solana-polygon-eth.component';

describe('SolanaPolygonEthComponent', () => {
  let component: SolanaPolygonEthComponent;
  let fixture: ComponentFixture<SolanaPolygonEthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolanaPolygonEthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolanaPolygonEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
