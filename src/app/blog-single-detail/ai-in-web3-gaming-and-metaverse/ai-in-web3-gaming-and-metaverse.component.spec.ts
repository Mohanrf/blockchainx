import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInWeb3GamingAndMetaverseComponent } from './ai-in-web3-gaming-and-metaverse.component';

describe('AiInWeb3GamingAndMetaverseComponent', () => {
  let component: AiInWeb3GamingAndMetaverseComponent;
  let fixture: ComponentFixture<AiInWeb3GamingAndMetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiInWeb3GamingAndMetaverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiInWeb3GamingAndMetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
