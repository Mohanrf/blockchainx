import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TronTokenDevelopmentComponent } from './tron-token-development.component';

describe('TronTokenDevelopmentComponent', () => {
  let component: TronTokenDevelopmentComponent;
  let fixture: ComponentFixture<TronTokenDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TronTokenDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TronTokenDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
