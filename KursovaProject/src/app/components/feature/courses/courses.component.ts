import { LikedCoursesService } from './../../../services/liked-courses.service';
import { signUpModalComponent } from '../../shared/sign-up-modal/sign-up-modal.component';
import { COURSES } from './../../../constants/courses.constants';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { COURSE_ITEM } from 'src/app/models/ICouse-item';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  fileNameDialogRef: MatDialogRef<signUpModalComponent>;
  courses = COURSES;
  likedCourses = {};
  likedCoursesArray: COURSE_ITEM[] = [];

  constructor( 
    public dialog: MatDialog,
    public likedCoursesService: LikedCoursesService,
    ) {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  openSignUpDialog(): void {
    this.dialog.open(signUpModalComponent);
  }

  handleLikeClick(course: COURSE_ITEM): void {
    if (this.likedCourses[course.id]) {
      delete this.likedCourses[course.id];

      let likedCoursesArray = localStorage.getItem('likedCourses')
        ? JSON.parse(localStorage.getItem('likedCourses'))
        : [];

      let index;

      for (let i = 0; i < likedCoursesArray.length; i++) {
        if (likedCoursesArray[i].id === course.id) {
          index = i;
          break;
        }
      }

      likedCoursesArray.splice(index, 1);
      localStorage.setItem('likedCourses', JSON.stringify(likedCoursesArray));
      
      this.likedCoursesArray = likedCoursesArray;
      this.likedCoursesService.likedCoursesLength$.next(this.likedCoursesArray.length);
    } else {
      this.likedCourses[course.id] = true;

      const courseItem = {
        id: course.id,
        type: course.type,
        subType: course.subType,
        days: course.days,
        price: course.price,
      };

      this.likedCoursesArray = [...this.likedCoursesArray, courseItem];
      localStorage.setItem('likedCourses', JSON.stringify(this.likedCoursesArray)
      );
      this.likedCoursesService.likedCoursesLength$.next(this.likedCoursesArray.length);
    }
  }

  private scrollToTop(): void {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 3);
  }
}
