import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenMigrationComponent } from './token-migration.component';

describe('TokenMigrationComponent', () => {
  let component: TokenMigrationComponent;
  let fixture: ComponentFixture<TokenMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenMigrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
