import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20TokenDevelopmentNewComponent } from './erc20-token-development-new.component';

describe('Erc20TokenDevelopmentNewComponent', () => {
  let component: Erc20TokenDevelopmentNewComponent;
  let fixture: ComponentFixture<Erc20TokenDevelopmentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erc20TokenDevelopmentNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erc20TokenDevelopmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
