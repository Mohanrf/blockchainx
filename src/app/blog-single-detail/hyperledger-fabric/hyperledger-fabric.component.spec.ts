import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperledgerFabricComponent } from './hyperledger-fabric.component';

describe('HyperledgerFabricComponent', () => {
  let component: HyperledgerFabricComponent;
  let fixture: ComponentFixture<HyperledgerFabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyperledgerFabricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperledgerFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
