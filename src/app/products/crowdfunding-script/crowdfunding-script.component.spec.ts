import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdfundingScriptComponent } from './crowdfunding-script.component';

describe('CrowdfundingScriptComponent', () => {
  let component: CrowdfundingScriptComponent;
  let fixture: ComponentFixture<CrowdfundingScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdfundingScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdfundingScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
