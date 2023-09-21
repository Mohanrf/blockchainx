import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMetaversePlatformComponent } from './create-metaverse-platform.component';

describe('CreateMetaversePlatformComponent', () => {
  let component: CreateMetaversePlatformComponent;
  let fixture: ComponentFixture<CreateMetaversePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMetaversePlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMetaversePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
