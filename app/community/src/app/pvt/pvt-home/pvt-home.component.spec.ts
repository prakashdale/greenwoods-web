import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtHomeComponent } from './pvt-home.component';

describe('PvtHomeComponent', () => {
  let component: PvtHomeComponent;
  let fixture: ComponentFixture<PvtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvtHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
