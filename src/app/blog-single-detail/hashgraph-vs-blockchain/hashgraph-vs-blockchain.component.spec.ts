import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashgraphVsBlockchainComponent } from './hashgraph-vs-blockchain.component';

describe('HashgraphVsBlockchainComponent', () => {
  let component: HashgraphVsBlockchainComponent;
  let fixture: ComponentFixture<HashgraphVsBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashgraphVsBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashgraphVsBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
