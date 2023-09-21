import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpfsDevelopmentComponent } from './ipfs-development.component';

describe('IpfsDevelopmentComponent', () => {
  let component: IpfsDevelopmentComponent;
  let fixture: ComponentFixture<IpfsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpfsDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpfsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
