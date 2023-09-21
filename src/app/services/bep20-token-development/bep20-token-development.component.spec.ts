import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bep20TokenDevelopmentComponent } from './bep20-token-development.component';

describe('Bep20TokenDevelopmentComponent', () => {
  let component: Bep20TokenDevelopmentComponent;
  let fixture: ComponentFixture<Bep20TokenDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bep20TokenDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bep20TokenDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
