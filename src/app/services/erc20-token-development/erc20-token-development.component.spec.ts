import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20TokenDevelopmentComponent } from './erc20-token-development.component';

describe('Erc20TokenDevelopmentComponent', () => {
  let component: Erc20TokenDevelopmentComponent;
  let fixture: ComponentFixture<Erc20TokenDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erc20TokenDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erc20TokenDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
