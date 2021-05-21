import { signUpModalComponent } from '../../shared/sign-up-modal/sign-up-modal.component';
import { COURSES } from './../../../constants/courses.constants';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  fileNameDialogRef: MatDialogRef<signUpModalComponent>
  courses = COURSES;
  isLiked = false;
  likedCourses = {};

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  openSignUpDialog(): void {
    this.dialog.open(signUpModalComponent);
  }

  handleLikeClick(id: number): void {
    console.log('Liked clicked');

    if (this.likedCourses[id]) {
      delete this.likedCourses[id];
    } else {
      this.likedCourses[id] = true;
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
