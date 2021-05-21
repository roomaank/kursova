import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signUpModalComponent } from './signUpModal.component';

describe('signUpModalComponent', () => {
  let component: signUpModalComponent;
  let fixture: ComponentFixture<signUpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signUpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
