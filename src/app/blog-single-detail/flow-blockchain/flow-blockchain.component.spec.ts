import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowBlockchainComponent } from './flow-blockchain.component';

describe('FlowBlockchainComponent', () => {
  let component: FlowBlockchainComponent;
  let fixture: ComponentFixture<FlowBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
