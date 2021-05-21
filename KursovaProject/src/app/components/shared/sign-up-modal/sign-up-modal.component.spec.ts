import { ComponentFixture, TestBed } from '@angular/core/testing';

import { singUpModalComponent } from './singUpModal.component';

describe('singUpModalComponent', () => {
  let component: singUpModalComponent;
  let fixture: ComponentFixture<singUpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ singUpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(singUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
