import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashgraphDevelopmentComponent } from './hashgraph-development.component';

describe('HashgraphDevelopmentComponent', () => {
  let component: HashgraphDevelopmentComponent;
  let fixture: ComponentFixture<HashgraphDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashgraphDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashgraphDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
