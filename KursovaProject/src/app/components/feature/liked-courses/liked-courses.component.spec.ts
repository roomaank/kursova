import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedCoursesComponent } from './liked-courses.component';

describe('LikedCoursesComponent', () => {
  let component: LikedCoursesComponent;
  let fixture: ComponentFixture<LikedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
